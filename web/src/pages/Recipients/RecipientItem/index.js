/* eslint-disable no-alert */
import React from 'react';

import PropTypes from 'prop-types';

import { toast } from 'react-toastify';

import { MdEdit, MdDeleteForever } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import ActionButton from '~/components/ActionButton';

import { Container, ActionContainer } from './styles';

export default function RecipientItem({ recipient, loadRecipients }) {
  async function handleDelete() {
    const confirm = window.confirm('Você tem certeza que deseja deletar isso?');

    if (!confirm) {
      toast.error('Destinatário não apagado!');
      return;
    }

    try {
      await api.delete(`/recipients/${recipient.id}`);
      loadRecipients();
      toast.success('Destinatário apagado com sucesso!');
    } catch (err) {
      toast.error('Esse destinatário não pode ser deletado!');
    }
  }

  return (
    <Container>
      <div className="id">
        <span>#{recipient.id}</span>
      </div>
      <div>
        <span>{recipient.name}</span>
      </div>
      <div className="address">
        <span>
          {recipient.street}, {recipient.number}, {recipient.city} -{' '}
          {recipient.state}
        </span>
      </div>
      <div className="action">
        <ActionButton>
          <ActionContainer>
            <div>
              <button
                type="button"
                onClick={() => history.push(`/recipients/edit/${recipient.id}`)}
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

RecipientItem.propTypes = {
  loadRecipients: PropTypes.func.isRequired,
  recipient: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    street: PropTypes.string,
    number: PropTypes.number,
    complement: PropTypes.string,
    state: PropTypes.string,
    city: PropTypes.string,
    zipcode: PropTypes.string,
  }).isRequired,
};
