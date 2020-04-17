import React, { useState } from 'react';
import { Image, StatusBar } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';
import { Container, IdInput, SignInButton } from './styles';
import logo from '~/assets/logo.png';

export default function SignIn() {
  const [id, setId] = useState('');

  const dispatch = useDispatch();

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(id));
  }
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <Container>
        <Image source={logo} />
        <IdInput
          placeholderTextColor="#999"
          placeholder="Informe seu ID de cadastro"
          keyboardType="numbers-and-punctuation"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={id}
          onChangeText={setId}
        />
        <SignInButton loading={loading} onPress={handleSubmit}>
          Entrar no sistema
        </SignInButton>
      </Container>
    </>
  );
}
