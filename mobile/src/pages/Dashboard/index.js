import React from 'react';
import { useSelector } from 'react-redux';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

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
  const profile = useSelector(state => state.deliveryman.profile);

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
          <PendingFilter>Pendentes</PendingFilter>
          <DeliveredFilter>Entregues</DeliveredFilter>
        </ButtonGroup>
      </Header>
      <DeliveryList />
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
