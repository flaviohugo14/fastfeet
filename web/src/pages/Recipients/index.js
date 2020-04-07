import React, { useState, useEffect } from 'react';

import { MdAdd, MdSearch } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import RecipientItem from './RecipientItem';

import { Container, Title, Content, Table, Thead } from './styles';

export default function Recipients() {
  const [recipients, setRecipients] = useState([]);

  async function loadRecipients() {
    const response = await api.get('/recipients');

    setRecipients(response.data);
  }

  useEffect(() => {
    loadRecipients();
  }, []);

  async function handleSearchRecipients(e) {
    const response = await api.get('/recipients', {
      params: {
        q: e.target.value,
      },
    });

    setRecipients(response.data);
  }

  return (
    <Container>
      <Content>
        <Title>Gerenciando destinatários</Title>
        <div>
          <div>
            <input
              type="text"
              onChange={handleSearchRecipients}
              placeholder="Buscar por destinatários"
            />
            <MdSearch color="#999" size={16} />
          </div>
          <button
            type="button"
            onClick={() => history.push('/recipients/register')}
          >
            <MdAdd size={20} color="#fff" />
            <span>CADASTRAR</span>
          </button>
        </div>
      </Content>
      <Table>
        <Thead>
          <span className="id">ID</span>
          <span>Nome</span>
          <span className="address">Endereço</span>
          <span className="action">Ações</span>
        </Thead>
        {recipients.map(recipient => (
          <RecipientItem
            key={recipient.id}
            recipient={recipient}
            loadRecipients={loadRecipients}
          />
        ))}
      </Table>
    </Container>
  );
}
