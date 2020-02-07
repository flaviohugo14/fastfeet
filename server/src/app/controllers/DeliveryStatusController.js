import { Op } from 'sequelize';
import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';

class DeliveryStatusController {
  async index(req, res) {
    const checkDeliverymanExists = await Deliveryman.findOne({
      where: { id: req.body.id },
    });

    if (!checkDeliverymanExists) {
      res.json({ error: 'This Deliveryman does not exists' });
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
      res.json({ error: 'This Deliveryman does not exists' });
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
    return res.json();
  }
}

export default new DeliveryStatusController();
