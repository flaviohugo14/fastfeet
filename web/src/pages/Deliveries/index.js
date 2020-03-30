import React from 'react';

import { MdAdd, MdMoreHoriz } from 'react-icons/md';
import { Container, Title, Content, Table, Thead, Item, Tag } from './styles';

export default function Deliveries() {
  return (
    <Container>
      <Content>
        <Title>Gerenciando encomendas</Title>
        <div>
          <input type="text" placeholder="Buscar por encomendas" />
          <button type="button">
            <MdAdd size={20} color="#fff" /> CADASTRAR
          </button>
        </div>
      </Content>
      <Table>
        <Thead>
          <span>ID</span>
          <span>Destinatário</span>
          <span>Entregador</span>
          <span>Cidade</span>
          <span>Estado</span>
          <span>Status</span>
          <span>Ações</span>
        </Thead>
        <Item>
          <span>#01</span>
          <span>Ludwig van Beethoven</span>
          <span>John Doe</span>
          <span>Rio do Sul</span>
          <span>Santa Catarina</span>

          <Tag>
            <div>
              <span />
              ENTREGUE
            </div>
          </Tag>

          <div>
            <MdMoreHoriz color="#c6c6c6" />
          </div>
        </Item>
      </Table>
    </Container>
  );
}
