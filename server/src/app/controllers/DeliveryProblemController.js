import Delivery from '../models/Delivery';
import DeliveryProblem from '../models/DeliveryProblem';

class DeliveryProblemController {
  async index(req, res) {
    const { id } = req.params;

    const deliveryExists = await Delivery.findOne({
      where: { id },
    });

    if (!deliveryExists) {
      return res.status(400).json({ error: 'Delivery does not exists' });
    }

    const deliveryProblems = await DeliveryProblem.findAll({
      where: { delivery_id: id },
    });

    return res.json(deliveryProblems);
  }

  async store(req, res) {
    return res.json();
  }
}

export default new DeliveryProblemController();
