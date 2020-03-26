import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo-fastfeet.svg';

import { Container, Content, Tab } from './styles';

export default function Header() {
  const [select, setSelect] = useState('1');

  const dispatch = useDispatch();

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <Tab select={select === '1'} onClick={() => setSelect('1')}>
            <span>ENCOMENDAS</span>
          </Tab>
          <Tab select={select === '2'} onClick={() => setSelect('2')}>
            <span>ENTREGADORES</span>
          </Tab>
          <Tab select={select === '3'} onClick={() => setSelect('3')}>
            <span>DESTINATÁRIOS</span>
          </Tab>
          <Tab select={select === '4'} onClick={() => setSelect('4')}>
            <span>PROBLEMAS</span>
          </Tab>
        </nav>

        <aside>
          <div>
            <strong>Admin FastFeet</strong>
            <a onClick={() => dispatch(signOut())}>sair do sistema</a>
          </div>
        </aside>
      </Content>
    </Container>
  );
}
