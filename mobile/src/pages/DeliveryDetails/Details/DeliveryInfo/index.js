import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';

import {
  Container,
  Header,
  Title,
  Content,
  Group,
  Field,
  Value,
} from './styles';

export default function DeliveryInfo({ recipient, product }) {
  return (
    <Container>
      <Header>
        <Icon size={25} name="local-shipping" color="#7d40e7" />
        <Title>Informações da entrega</Title>
      </Header>
      <Content>
        <Group>
          <Field>DESTINATÁRIO</Field>
          <Value>{recipient.name}</Value>
        </Group>
        <Group>
          <Field>ENDEREÇO DE ENTREGA</Field>
          <Value>{`${recipient.street}, ${recipient.number}, ${recipient.city} - ${recipient.state}, ${recipient.zipcode}`}</Value>
        </Group>
        <Group>
          <Field>PRODUTO</Field>
          <Value>{product}</Value>
        </Group>
      </Content>
    </Container>
  );
}

DeliveryInfo.propTypes = {
  recipient: PropTypes.shape({
    name: PropTypes.string,
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zipcode: PropTypes.string,
    number: PropTypes.number,
  }).isRequired,
  product: PropTypes.string.isRequired,
};
