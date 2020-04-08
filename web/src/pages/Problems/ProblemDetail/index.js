import React from 'react';

import PropTypes from 'prop-types';

import Modal from '~/components/Modal';

import { Container } from './styles';

export default function ProblemDetail({ problem }) {
  return (
    <Modal>
      <Container>
        <strong>VISUALIZAR PROBLEMA</strong>
        <span>{problem.description}</span>
      </Container>
    </Modal>
  );
}

ProblemDetail.propTypes = {
  problem: PropTypes.shape({
    description: PropTypes.string,
  }).isRequired,
};
