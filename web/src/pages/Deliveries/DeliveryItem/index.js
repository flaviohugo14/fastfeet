import React from 'react';

import PropTypes from 'prop-types';

import { MdEdit, MdDeleteForever } from 'react-icons/md';

import history from '~/services/history';

import ActionButton from '~/components/ActionButton';
import DeliveryDetails from '../DeliveryDetails';

import { Container, Tag, ActionContainer } from './styles';

export default function DeliveryItem({ delivery }) {
  return (
    <Container>
      <div className="id">
        <span>#{delivery.id}</span>
      </div>
      <div>
        <span>{delivery.recipient.name}</span>
      </div>
      <div>
        <img
          src={
            delivery.deliveryman.avatar?.url ||
            'https://api.adorable.io/avatars/50/abott@adorable.png'
          }
          alt="Avatar"
        />
        <span>{delivery.deliveryman.name}</span>
      </div>
      <div>
        <span>{delivery.recipient.city}</span>
      </div>
      <div className="state">
        <span>{delivery.recipient.state}</span>
      </div>

      <Tag status={delivery.status}>
        <div>
          <span />
          <strong>{delivery.status}</strong>
        </div>
      </Tag>
      <div className="action">
        <ActionButton>
          <ActionContainer>
            <div>
              <DeliveryDetails delivery={delivery} />
            </div>
            <div>
              <button
                type="button"
                onClick={() => history.push(`/deliveries/edit/${delivery.id}`)}
              >
                <MdEdit size={16} color="#4D85EE" />
                <span>Editar</span>
              </button>
            </div>
            <div>
              <MdDeleteForever size={16} color="#DE3B3B" />
              <span>Excluir</span>
            </div>
          </ActionContainer>
        </ActionButton>
      </div>
    </Container>
  );
}

DeliveryItem.propTypes = {
  delivery: PropTypes.shape({
    id: PropTypes.number,
    recipient: PropTypes.shape({
      name: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
    }),
    deliveryman: PropTypes.shape({
      avatar: PropTypes.shape({
        url: PropTypes.string,
      }),
      name: PropTypes.string,
    }),
    status: PropTypes.string,
  }).isRequired,
};
