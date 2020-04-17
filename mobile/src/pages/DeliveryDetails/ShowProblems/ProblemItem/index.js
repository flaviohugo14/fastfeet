import React from 'react';

import PropTypes from 'prop-types';

import { format, parseISO } from 'date-fns';

import { Container, Description, Date } from './styles';

export default function ProblemItem({ data }) {
  const date = format(parseISO(data.createdAt), 'dd/MM/yyyy');

  return (
    <Container>
      <Description>{data.description}</Description>
      <Date>{date}</Date>
    </Container>
  );
}

ProblemItem.propTypes = {
  data: PropTypes.shape({
    createdAt: PropTypes.instanceOf(Date),
    description: PropTypes.string,
  }).isRequired,
};
