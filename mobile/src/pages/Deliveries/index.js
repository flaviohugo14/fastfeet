import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';

import api from '~/services/api';

import Delivery from '~/components/Delivery';

import { signOut } from '~/store/modules/auth/actions';

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

export default function Deliveries({ navigation }) {
  const [isActive, setIsActive] = useState(true);
  const [deliveries, setDeliveries] = useState([]);

  const dispatch = useDispatch();
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
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#7c4890" />
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
          <Logout onPress={() => dispatch(signOut())}>
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
          renderItem={({ item }) => (
            <Delivery data={item} navigation={navigation} />
          )}
        />
      </Container>
    </>
  );
}

Deliveries.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};