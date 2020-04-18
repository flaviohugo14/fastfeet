import React, { useState } from 'react';
import { Alert } from 'react-native';

import api from '~/services/api';

import {
  Container,
  HeaderBackground,
  Box,
  Input,
  SubmitButton,
} from './styles';

export default function RegisterProblem({ navigation }) {
  const id = navigation.getParam('id');

  const [problem, setProblem] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);

    try {
      await api.post(`deliveries/${id}/problems`, {
        description: problem,
      });

      setLoading(false);
      Alert.alert(
        'Recebemos o problema!',
        'Iremos analisar e te retornaremos em breve.',
        [
          {
            title: 'Ok',
            onPress: () => navigation.goBack(),
          },
        ]
      );
    } catch (err) {
      Alert.alert('Falha ao registrar problema', 'Tente novamente mais tarde', [
        {
          title: 'Ok',
          onPress: () => navigation.goBack(),
        },
      ]);
    }
  }

  return (
    <Container>
      <HeaderBackground />
      <Box>
        <Input
          autoCapitalize="none"
          placeholder="Inclua aqui o problema que ocorreu na entrega."
          autoCorrect={false}
          multiline
          numberOfLines={8}
          returnKeyType="send"
          value={problem}
          onChangeText={setProblem}
          onSubmitEditing={handleSubmit}
        />
      </Box>
      <SubmitButton loading={loading} onPress={handleSubmit}>
        Enviar
      </SubmitButton>
    </Container>
  );
}
