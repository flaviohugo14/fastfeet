/* eslint-disable no-alert */
import React from 'react';

import PropTypes from 'prop-types';

import { toast } from 'react-toastify';

import { MdDeleteForever } from 'react-icons/md';

import api from '~/services/api';

import ActionButton from '~/components/ActionButton';
import ProblemDetail from '../ProblemDetail';

import { Container, ActionContainer } from './styles';

export default function ProblemItem({ problem, loadProblems }) {
  async function handleDelete() {
    const confirm = window.confirm(
      'Você tem certeza que deseja cancelar a entrega?'
    );

    if (!confirm) {
      toast.error('Entrega não cancelada!');
      return;
    }

    try {
      await api.delete(`/problem/${problem.id}/cancel-delivery`);
      loadProblems();
      toast.success('Entrega cancelada com sucesso!');
    } catch (err) {
      toast.error('Essa entrega não pode ser cancelada!');
    }
  }

  return (
    <Container>
      <div className="id">
        <span>#{problem.delivery_id}</span>
      </div>
      <div className="description">
        <span>{problem.description}</span>
      </div>
      <div className="action">
        <ActionButton big>
          <ActionContainer>
            <div>
              <ProblemDetail problem={problem} />
            </div>
            <div>
              <button type="button" onClick={handleDelete}>
                <MdDeleteForever size={16} color="#DE3B3B" />
                <span>Cancelar encomenda</span>
              </button>
            </div>
          </ActionContainer>
        </ActionButton>
      </div>
    </Container>
  );
}

ProblemItem.propTypes = {
  loadProblems: PropTypes.func.isRequired,
  problem: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    delivery_id: PropTypes.number,
  }).isRequired,
};
