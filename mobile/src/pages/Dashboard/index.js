import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Delivery from '~/components/Delivery';

import {
  Container,
  Profile,
  Avatar,
  Header,
  Title,
  PendingFilter,
  DeliveredFilter,
  DeliveryList,
  Top,
  Div,
  ButtonGroup,
  Welcome,
  Logout,
} from './styles';

export default function Dashboard() {
  const [isActive, setIsActive] = useState(true);
  const [deliveries, setDeliveries] = useState([]);

  const profile = useSelector(state => state.deliveryman.profile);

  useEffect(() => {
    async function loadDeliveries(id) {
      let response = {};

      if (isActive) {
        response = await api.get(`deliveryman/${id}`);
      } else {
        response = await api.get(`deliveryman/${id}/deliveries`);
      }

      setDeliveries(response.data);
    }
    loadDeliveries(profile.id);
  }, [profile.id, isActive]);

  return (
    <Container>
      <Top>
        <Profile>
          <Avatar
            source={{
              uri: profile.avatar
                ? profile.avatar.url
                : `https://api.adorable.io/avatar/50/${profile.name}.png`,
            }}
          />
          <Div>
            <Welcome>Bem vindo de volta,</Welcome>
            <Title>{profile.name}</Title>
          </Div>
        </Profile>
        <Logout>
          <Icon name="exit-to-app" size={24} color="#e74040" />
        </Logout>
      </Top>
      <Header>
        <Title>Entregas</Title>
        <ButtonGroup>
          <PendingFilter
            isActive={isActive}
            onPress={() => setIsActive(!isActive)}
          >
            Pendentes
          </PendingFilter>
          <DeliveredFilter
            isActive={!isActive}
            onPress={() => setIsActive(!isActive)}
          >
            Entregues
          </DeliveredFilter>
        </ButtonGroup>
      </Header>
      <DeliveryList
        data={deliveries}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Delivery data={item} />}
      />
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: ({ tintColor }) => (
    <Text style={{ fontSize: 14, color: tintColor }}>Entrega</Text>
  ),
  tabBarIcon: ({ tintColor }) => (
    <Icon name="reorder" size={24} color={tintColor} />
  ),
};
