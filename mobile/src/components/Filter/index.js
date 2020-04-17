import React from 'react';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function Filter({ children, isActive, ...rest }) {
  return (
    <Container isActive={isActive} {...rest}>
      <Text isActive={isActive}>{children}</Text>
    </Container>
  );
}

Filter.propTypes = {
  children: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};
