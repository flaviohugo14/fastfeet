import React from 'react';

import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';

import Icon from 'react-native-vector-icons/MaterialIcons';

import StatusLine from './StatusLine';

import {
  Container,
  Content,
  Header,
  Title,
  Footer,
  Group,
  Field,
  Value,
  LookDetailsButton,
  Text,
} from './styles';

export default function Delivery({ data }) {
  const formattedDate = format(parseISO(data.createdAt), 'dd/MM/yyyy');

  return (
    <Container>
      <Content>
        <Header>
          <Icon size={25} name="local-shipping" color="#7d40e7" />
          <Title>{`Encomenda ${data.id}`}</Title>
        </Header>
        <StatusLine />
      </Content>
      <Footer>
        <Group>
          <Field>Data</Field>
          <Value>{formattedDate}</Value>
        </Group>
        <Group>
          <Field>Cidade</Field>
          <Value>{data.recipient.city}</Value>
        </Group>
        <LookDetailsButton>
          <Text>Ver detalhes</Text>
        </LookDetailsButton>
      </Footer>
    </Container>
  );
}

Delivery.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    createdAt: PropTypes.string,
    recipient: PropTypes.shape({
      city: PropTypes.string,
    }),
  }).isRequired,
};
