import React, { useState, useEffect } from 'react';

import { MdAdd, MdSearch } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import DeliverymenItem from './DeliverymenItem';

import { Container, Title, Content, Table, Thead } from './styles';

export default function Deliverymen() {
  const [deliverymen, setDeliverymen] = useState([]);

  async function loadDeliverymen() {
    const response = await api.get('/deliverymen');

    setDeliverymen(response.data);
  }

  useEffect(() => {
    loadDeliverymen();
  }, []);

  async function handleSearchDeliveryman(e) {
    const response = await api.get('/deliverymen', {
      params: {
        q: e.target.value,
      },
    });

    setDeliverymen(response.data);
  }

  return (
    <Container>
      <Content>
        <Title>Gerenciando entregadores</Title>
        <div>
          <div>
            <input
              type="text"
              onChange={handleSearchDeliveryman}
              placeholder="Buscar por entregadores"
            />
            <MdSearch color="#999" size={16} />
          </div>
          <button
            type="button"
            onClick={() => history.push('/deliverymen/register')}
          >
            <MdAdd size={20} color="#fff" />
            <span>CADASTRAR</span>
          </button>
        </div>
      </Content>
      <Table>
        <Thead>
          <span className="id">ID</span>
          <span>Foto</span>
          <span>Nome</span>
          <span>Email</span>
          <span className="action">Ações</span>
        </Thead>
        {deliverymen.map(deliveryman => (
          <DeliverymenItem
            key={deliveryman.id}
            deliveryman={deliveryman}
            loadDeliverymen={loadDeliverymen}
          />
        ))}
      </Table>
    </Container>
  );
}
