import Mail from '../../lib/Mail';

class CancellationMail {
  get key() {
    return 'CancellationMail';
  }

  async handle({ data }) {
    const { delivery, deliveryman, problem, startDate } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: `Cancelamento de entrega`,
      template: 'Cancellation',
      context: {
        product: delivery.product,
        deliveryman: deliveryman.name,
        description: problem.description,
        startDate,
      },
    });
  }
}

export default new CancellationMail();
