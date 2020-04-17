import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

import PropTypes from 'prop-types';

import ProblemItem from './ProblemItem';

import api from '~/services/api';

import { Container, HeaderBackground, Title, List, Header } from './styles';

export default function ShowProblems({ navigation }) {
  const id = navigation.getParam('id');

  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get(`/deliveries/${id}/problems`);

      setProblems(response.data);
      setLoading(false);
    }

    loadProblems();
  }, [id]);

  return (
    <Container>
      <HeaderBackground />
      <Header>
        <Title>
          {!loading && problems.length === 0
            ? 'Nenhum problema encontrado'
            : `Encomenda ${id}`}
        </Title>
      </Header>
      {loading ? (
        <ActivityIndicator color="#fff" size={30} />
      ) : (
        <List
          data={problems}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <ProblemItem data={item} />}
        />
      )}
    </Container>
  );
}

ShowProblems.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
