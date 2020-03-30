import React, { useState, useEffect } from 'react';

import { MdAdd, MdMoreHoriz } from 'react-icons/md';

import api from '~/services/api';

import { Container, Title, Content, Table, Thead, Item, Tag } from './styles';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('deliveries');
      setDeliveries(response.data);
    }

    loadDeliveries();
  }, []);

  return (
    <Container>
      <Content>
        <Title>Gerenciando encomendas</Title>
        <div>
          <input type="text" placeholder="Buscar por encomendas" />
          <button type="button">
            <MdAdd size={20} color="#fff" />
            <span>CADASTRAR</span>
          </button>
        </div>
      </Content>
      <Table>
        <Thead>
          <span className="id">ID</span>
          <span>Destinatário</span>
          <span>Entregador</span>
          <span>Cidade</span>
          <span>Estado</span>
          <span>Status</span>
          <span className="action">Ações</span>
        </Thead>
        {deliveries.map(delivery => (
          <Item key={delivery.id}>
            <div className="id">
              <span>#{delivery.id}</span>
            </div>
            <div>
              <span>{delivery.recipient.name}</span>
            </div>
            <div>
              <img
                src={
                  delivery.deliveryman.avatar?.url ||
                  'https://api.adorable.io/avatars/50/abott@adorable.png'
                }
                alt="Avatar"
              />
              <span>{delivery.deliveryman.name}</span>
            </div>
            <div>
              <span>{delivery.recipient.city}</span>
            </div>
            <div>
              <span>{delivery.recipient.state}</span>
            </div>

            <Tag>
              <div>
                <span />
                <strong>ENTREGUE</strong>
              </div>
            </Tag>
            <div className="action">
              <MdMoreHoriz color="#c6c6c6" />
            </div>
          </Item>
        ))}
      </Table>
    </Container>
  );
}
