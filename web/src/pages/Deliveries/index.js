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
          <span className="id">ID</span>
          <span>Destinatário</span>
          <span>Entregador</span>
          <span>Cidade</span>
          <span>Estado</span>
          <span>Status</span>
          <span className="action">Ações</span>
        </Thead>
        <Item>
          <div className="id">
            <span>#01</span>
          </div>
          <div>
            <span>Ludwig van Beethoven</span>
          </div>
          <div>
            <span>John Doe</span>
          </div>
          <div>
            <span>Rio do Sul</span>
          </div>
          <div>
            <span>Santa Catarina</span>
          </div>

          <Tag>
            <div>
              <span />
              ENTREGUE
            </div>
          </Tag>
          <div className="action">
            <MdMoreHoriz color="#c6c6c6" />
          </div>
        </Item>
      </Table>
    </Container>
  );
}
