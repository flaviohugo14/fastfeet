export default function dataWithStatus(response) {
  const data = response.data.map(delivery => {
    let status = '';

    if (delivery.canceled_at) {
      status = 'CANCELADA';
    } else if (!delivery.start_date) {
      status = 'PENDENTE';
    } else if (delivery.start_date && !delivery.end_date) {
      status = 'RETIRADA';
    } else {
      status = 'ENTREGUE';
    }

    return {
      ...delivery,
      status,
    };
  });

  return data;
}
