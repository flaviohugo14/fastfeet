import React from 'react';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function Filter({ children, ...rest }) {
  return (
    <Container {...rest}>
      <Text>{children}</Text>
    </Container>
  );
}

Filter.propTypes = {
  children: PropTypes.string.isRequired,
};
