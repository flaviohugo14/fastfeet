import React, { useState, useEffect } from 'react';

import { MdAdd, MdMoreHoriz } from 'react-icons/md';

import api from '~/services/api';

import { Container, Title, Content, Table, Thead, Item, Tag } from './styles';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('deliveries');

      const data = response.data.map(delivery => {
        let status = '';

        if (delivery.canceled_at) {
          status = 'CANCELADA';
        } else if (!delivery.start_date) {
          status = 'PENDENTE';
        } else if (delivery.start_date && !delivery.end_date) {
          status = 'RETIRADA';
        } else {
          status = 'ENTREGUE';
        }

        return {
          ...delivery,
          status,
        };
      });

      setDeliveries(data);
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
          <span className="state">Estado</span>
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
            <div className="state">
              <span>{delivery.recipient.state}</span>
            </div>

            <Tag status={delivery.status}>
              <div>
                <span />
                <strong>{delivery.status}</strong>
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
