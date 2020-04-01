import React, { useState, useEffect } from 'react';

import { MdAdd } from 'react-icons/md';

import api from '~/services/api';

import DeliveryItem from './DeliveryItem';

import { Container, Title, Content, Table, Thead } from './styles';

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
          <DeliveryItem key={delivery.id} delivery={delivery} />
        ))}
      </Table>
    </Container>
  );
}
