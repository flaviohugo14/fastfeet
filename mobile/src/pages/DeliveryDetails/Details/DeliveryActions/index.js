import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Text,
  InfoProblem,
  ShowProblems,
  ConfirmDelivery,
} from './styles';

export default function DeliveryActions() {
  return (
    <Container>
      <InfoProblem>
        <Icon color="#e74040" name="highlight-off" size={28} />
        <Text>Informar Problema</Text>
      </InfoProblem>
      <ShowProblems>
        <Icon color="#E7BA40" name="info-outline" size={28} />
        <Text>Visualizar Problemas</Text>
      </ShowProblems>
      <ConfirmDelivery>
        <IconCommunity color="#7D40E7" name="check-circle-outline" size={28} />
        <Text>Confirmar Entrega</Text>
      </ConfirmDelivery>
    </Container>
  );
}
