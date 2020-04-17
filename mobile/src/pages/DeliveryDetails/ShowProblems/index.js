import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import ProblemItem from './ProblemItem';

import api from '~/services/api';

import { Container, HeaderBackground, Title, List, Header } from './styles';

export default function ShowProblems({ navigation }) {
  const id = navigation.getParam('id');

  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get(`/deliveries/${id}/problems`);

      setProblems(response.data);
    }

    loadProblems();
  }, [id]);

  return (
    <Container>
      <HeaderBackground />
      <Header>
        <Title>{`Encomenda ${id}`}</Title>
      </Header>
      <List
        data={problems}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <ProblemItem data={item} />}
      />
    </Container>
  );
}

ShowProblems.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
