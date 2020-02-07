import { Op } from 'sequelize';
import * as Yup from 'yup';
import {
  isAfter,
  isBefore,
  parseISO,
  setSeconds,
  setMinutes,
  setHours,
  startOfDay,
  endOfDay,
} from 'date-fns';
import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';

class DeliveryStatusController {
  async index(req, res) {
    const checkDeliverymanExists = await Deliveryman.findOne({
      where: { id: req.body.id },
    });

    if (!checkDeliverymanExists) {
      res.status(400).json({ error: 'This Deliveryman does not exists' });
    }

    const deliveries = await Delivery.findAll({
      where: {
        end_date: null,
        canceled_at: null,
        deliveryman_id: req.body.id,
      },
    });
    return res.json(deliveries);
  }

  async show(req, res) {
    const { id } = req.params;

    const checkDeliverymanExists = await Deliveryman.findOne({
      where: { id },
    });

    if (!checkDeliverymanExists) {
      res.status(400).json({ error: 'This Deliveryman does not exists' });
    }

    const deliveries = await Delivery.findAll({
      where: {
        end_date: {
          [Op.ne]: null,
        },
      },
    });

    return res.json(deliveries);
  }

  async update(req, res) {
    const schema = Yup.object(req.body).shape({
      start_date: Yup.date(),
      end_date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fail' });
    }

    /**
     * Verify if order pickup is past
     */

    const startDate = parseISO(req.body.start_date);

    if (isBefore(startDate, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted' });
    }

    /**
     * Verify if orders pickup is between interval configured
     */

    const startInterval = setSeconds(setMinutes(setHours(startDate, 8), 0), 0);
    const endInterval = setSeconds(setMinutes(setHours(startDate, 18), 0), 0);

    if (isAfter(startDate, endInterval) || isBefore(startDate, startInterval)) {
      return res
        .status(400)
        .json({ error: 'Orders pickup only between 08:00 and 18:00h' });
    }

    const { deliveryman_id, delivery_id } = req.params;

    const deliverymanExists = await Deliveryman.findOne({
      where: { id: deliveryman_id },
    });

    const deliveryExists = await Delivery.findOne({
      where: { id: delivery_id },
    });

    if (!deliverymanExists && !deliveryExists) {
      return res
        .status(400)
        .json({ error: 'Delivery and Deliveryman does not exists' });
    }

    if (!deliverymanExists) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    if (!deliveryExists) {
      return res.status(400).json({ error: 'Delivery does not exists' });
    }

    /**
     * Verify if delivery belongs to Deliveryman
     */

    const deliveryBelongsToDeliveryman = await Delivery.findOne({
      where: { id: delivery_id, deliveryman_id },
    });

    if (!deliveryBelongsToDeliveryman) {
      return res.status(401).json({
        error: 'This Delivery does not belogs to Deliveryman',
      });
    }

    const ordersPickupInDay = await Delivery.findAll({
      where: {
        start_date: {
          [Op.between]: [startOfDay(startDate), endOfDay(startDate)],
        },
      },
    });

    if (ordersPickupInDay.length < 5) {
      const {
        id,
        product,
        recipient_id,
        canceled_at,
        start_date,
        end_date,
      } = await deliveryBelongsToDeliveryman.update(req.body);

      return res.json({
        id,
        product,
        deliveryman_id,
        recipient_id,
        canceled_at,
        start_date,
        end_date,
      });
    }

    return res
      .status(401)
      .json({ error: 'You cannot make more withdrawals on this day' });
  }
}

export default new DeliveryStatusController();
