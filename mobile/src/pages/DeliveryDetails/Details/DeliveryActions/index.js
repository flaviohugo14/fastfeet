import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import PropTypes from 'prop-types';

import api from '~/services/api';

import {
  Container,
  Text,
  InfoProblem,
  ShowProblems,
  ConfirmDelivery,
  ConfirmWithdrawal,
  TextLarge,
} from './styles';

export default function DeliveryActions({ delivery, status, navigation }) {
  const profile = useSelector(state => state.deliveryman.profile);

  async function handleConfirm() {
    try {
      await api.put(`/deliveryman/${profile.id}/deliveries/${delivery.id}`, {
        start_date: new Date(),
      });

      Alert.alert(
        'Encomenda retirada com sucesso!',
        'Se houver algum problema, entre em contato.'
      );
    } catch (err) {
      Alert.alert(
        'Falha ao confirmar',
        'Não foi possível confirmar a data de retirada'
      );
    }
  }

  function handleShowProblems() {}

  function handleRegisterProblem() {}

  function handleConfirmDelivery() {}

  return (
    <>
      <ConfirmWithdrawal
        disabled={status === 'Retirada'}
        onPress={handleConfirm}
      >
        <Icon name="autorenew" color="#82BF18" size={28} />
        <TextLarge>Confirmar Retirada</TextLarge>
      </ConfirmWithdrawal>
      <Container>
        <InfoProblem
          disabled={status === 'Entregue'}
          onPress={handleRegisterProblem}
        >
          <Icon color="#e74040" name="highlight-off" size={28} />
          <Text>Informar Problema</Text>
        </InfoProblem>
        <ShowProblems onPress={handleShowProblems}>
          <Icon color="#E7BA40" name="info-outline" size={28} />
          <Text>Visualizar Problemas</Text>
        </ShowProblems>
        <ConfirmDelivery
          onPress={handleConfirmDelivery}
          disabled={status === 'Entregue'}
        >
          <IconCommunity
            color="#7D40E7"
            name="check-circle-outline"
            size={28}
          />
          <Text>Confirmar Entrega</Text>
        </ConfirmDelivery>
      </Container>
    </>
  );
}

DeliveryActions.propTypes = {
  delivery: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  status: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
