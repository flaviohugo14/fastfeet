import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import ProblemItem from './ProblemItem';

import { Container, Title, Content, Table, Thead } from './styles';

export default function Problems() {
  const [problems, setProblems] = useState([]);

  async function loadProblems() {
    const response = await api.get('/problems');

    setProblems(response.data);
  }

  useEffect(() => {
    loadProblems();
  }, []);

  return (
    <Container>
      <Content>
        <Title>Gerenciando problemas</Title>
      </Content>
      <Table>
        <Thead>
          <span className="id">Encomenda</span>
          <span className="description">Problema</span>
          <span className="action">Ações</span>
        </Thead>
        {problems.map(problem => (
          <ProblemItem
            key={problem.id}
            problem={problem}
            loadProblems={loadProblems}
          />
        ))}
      </Table>
    </Container>
  );
}
