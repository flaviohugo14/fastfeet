import React from 'react';
import { format, parseISO } from 'date-fns';

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
  Horizontal,
} from './styles';

export default function DeliverySituation({ delivery, status }) {
  return (
    <Container>
      <Header>
        <Icon size={25} name="event" color="#7d40e7" />
        <Title>Situação da entrega</Title>
      </Header>
      <Content>
        <Group>
          <Field>STATUS</Field>
          <Value>{status}</Value>
        </Group>
        <Horizontal>
          <Group>
            <Field>DATA DE RETIRADA</Field>
            <Value>
              {delivery.start_date
                ? format(parseISO(delivery.start_date), 'dd / MM / yyyy')
                : '-- / -- / --'}
            </Value>
          </Group>
          <Group>
            <Field>DATA DE ENTREGA</Field>
            <Value>
              {delivery.end_date
                ? format(parseISO(delivery.start_date), 'dd / MM / yyyy')
                : '-- / -- / --'}
            </Value>
          </Group>
        </Horizontal>
      </Content>
    </Container>
  );
}

DeliverySituation.propTypes = {
  delivery: PropTypes.shape({
    start_date: PropTypes.string,
    end_date: PropTypes.string,
  }).isRequired,
  status: PropTypes.string.isRequired,
};
