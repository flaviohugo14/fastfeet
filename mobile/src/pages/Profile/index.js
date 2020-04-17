import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Container } from './styles';

export default function Profile() {
  return <View />;
}

Profile.navigationOptions = {
  tabBarLabel: ({ tintColor }) => (
    <Text style={{ fontSize: 14, color: tintColor }}>Meu Perfil</Text>
  ),
  tabBarIcon: ({ tintColor }) => (
    <Icon name="account-circle" size={24} color={tintColor} />
  ),
};
