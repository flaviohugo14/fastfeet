import React from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { format, parseISO } from 'date-fns';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Content,
  Header,
  Avatar,
  Small,
  Text,
  LogoutButton,
} from './styles';

export default function Profile() {
  const profile = useSelector(state => state.deliveryman.profile);
  const loading = useSelector(state => state.auth.loading);

  const dispatch = useDispatch();

  const formattedRegisterDate = format(
    parseISO(profile.created_at),
    'dd/MM/yyyy'
  );

  return (
    <Container>
      <Content>
        <Header>
          <Avatar
            source={{
              uri: profile.avatar
                ? profile.avatar.url
                : `https://api.adorable.io/avatar/50/${profile.name}.png`,
            }}
          />
        </Header>
        <View style={{ marginTop: 40 }}>
          <Small>Nome completo</Small>
          <Text>{profile.name}</Text>
          <Small>Email</Small>
          <Text>{profile.email}</Text>
          <Small>Data de cadastro</Small>
          <Text>{formattedRegisterDate}</Text>
        </View>
        <LogoutButton loading={loading} onPress={() => dispatch(signOut())}>
          Logout
        </LogoutButton>
      </Content>
    </Container>
  );
}
