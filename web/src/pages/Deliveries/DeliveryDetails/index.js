import React from 'react';

import PropTypes from 'prop-types';

import { MdImage } from 'react-icons/md';

import formatDate from '~/utils/formatDate';

import Modal from '~/components/Modal';

import { Container } from './styles';

export default function DeliveryDetails({ delivery }) {
  return (
    <Modal>
      <Container>
        <strong>Informações da encomenda</strong>
        <small>
          {delivery.recipient.street}, {delivery.recipient.number}
        </small>
        <small>
          {delivery.recipient.city} - {delivery.recipient.state}
        </small>
        <small>{delivery.recipient.zipcode}</small>
        <strong>Datas</strong>
        <small>
          Retirada:{' '}
          {formatDate(delivery.start_date) || 'Ainda não foi retirada'}
        </small>
        <small>
          Entrega: {formatDate(delivery.end_date) || 'Ainda não foi entregue'}
        </small>
        <strong>Assinatura do destinatário</strong>
        <div>
          {delivery.signature ? (
            <img src={delivery.signature?.url} alt="Signature" />
          ) : (
            <MdImage size={36} color="#999" />
          )}
        </div>
      </Container>
    </Modal>
  );
}

DeliveryDetails.propTypes = {
  delivery: PropTypes.shape({
    recipient: PropTypes.shape({
      name: PropTypes.string,
      street: PropTypes.string,
      number: PropTypes.number,
      city: PropTypes.string,
      state: PropTypes.string,
      zipcode: PropTypes.string,
    }),
    status: PropTypes.string,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    signature: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
};
