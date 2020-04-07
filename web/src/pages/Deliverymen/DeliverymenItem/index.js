/* eslint-disable no-alert */
import React from 'react';

import PropTypes from 'prop-types';

import { toast } from 'react-toastify';

import { MdEdit, MdDeleteForever } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import ActionButton from '~/components/ActionButton';

import { Container, ActionContainer } from './styles';

export default function DeliverymenItem({ deliveryman, loadDeliverymen }) {
  async function handleDelete() {
    const confirm = window.confirm('Você tem certeza que deseja deletar isso?');

    if (!confirm) {
      toast.error('Entregador não apagado!');
      return;
    }

    try {
      await api.delete(`/deliverymen/${deliveryman.id}`);
      loadDeliverymen();
      toast.success('Entregador apagado com sucesso!');
    } catch (err) {
      toast.error('Esse entregador não pode ser deletado!');
    }
  }

  return (
    <Container>
      <div className="id">
        <span>#{deliveryman.id}</span>
      </div>
      <div>
        <img
          src={
            deliveryman.avatar?.url ||
            'https://api.adorable.io/avatars/50/abott@adorable.png'
          }
          alt="Avatar"
        />
      </div>
      <div>
        <span>{deliveryman.name}</span>
      </div>
      <div>
        <span>{deliveryman.email}</span>
      </div>
      <div className="action">
        <ActionButton>
          <ActionContainer>
            <div>
              <button
                type="button"
                onClick={() =>
                  history.push(`/deliveryman/edit/${deliveryman.id}`)
                }
              >
                <MdEdit size={16} color="#4D85EE" />
                <span>Editar</span>
              </button>
            </div>
            <div>
              <button type="button" onClick={handleDelete}>
                <MdDeleteForever size={16} color="#DE3B3B" />
                <span>Excluir</span>
              </button>
            </div>
          </ActionContainer>
        </ActionButton>
      </div>
    </Container>
  );
}

DeliverymenItem.propTypes = {
  loadDeliverymen: PropTypes.func.isRequired,
  deliveryman: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
};
