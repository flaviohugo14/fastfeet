import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdMenu } from 'react-icons/md';
import history from '~/services/history';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo-fastfeet.svg';

import {
  Container,
  Content,
  Tab,
  ButtonToggle,
  MenuContainer,
  Logoff,
} from './styles';

export default function Header() {
  const [select, setSelect] = useState('deliveries');
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleToggle() {
    setShow(!show);
  }

  function handlePage(page) {
    history.push(`/${page}`);
    setSelect(page);
  }

  return (
    <>
      <Container>
        <Content>
          <nav>
            <img src={logo} alt="FastFeet" />
            <Tab
              select={select === 'deliveries'}
              onClick={() => handlePage('deliveries')}
            >
              <span>ENCOMENDAS</span>
            </Tab>
            <Tab
              select={select === 'deliverymen'}
              onClick={() => handlePage('deliverymen')}
            >
              <span>ENTREGADORES</span>
            </Tab>
            <Tab
              select={select === 'recipients'}
              onClick={() => handlePage('recipients')}
            >
              <span>DESTINATÁRIOS</span>
            </Tab>
            <Tab
              select={select === 'problems'}
              onClick={() => handlePage('problems')}
            >
              <span>PROBLEMAS</span>
            </Tab>
          </nav>

          <aside>
            <div>
              <strong>{profile.name}</strong>
              <Logoff onClick={() => dispatch(signOut())}>
                sair do sistema
              </Logoff>
            </div>
          </aside>
          <ButtonToggle type="button" onClick={handleToggle} show={show}>
            <MdMenu size={28} color="#7d40e7" />
          </ButtonToggle>
        </Content>
      </Container>
      {show ? (
        <MenuContainer show={show}>
          <Tab
            select={select === 'deliveries'}
            onClick={() => handlePage('deliveries')}
            show={show}
          >
            <span>ENCOMENDAS</span>
          </Tab>
          <Tab
            select={select === 'deliverymen'}
            onClick={() => handlePage('deliverymen')}
            show={show}
          >
            <span>ENTREGADORES</span>
          </Tab>
          <Tab
            select={select === 'recipients'}
            onClick={() => handlePage('recipients')}
            show={show}
          >
            <span>DESTINATÁRIOS</span>
          </Tab>
          <Tab
            select={select === 'problems'}
            onClick={() => handlePage('problems')}
            show={show}
          >
            <span>PROBLEMAS</span>
          </Tab>
          <Logoff onClick={() => dispatch(signOut())}>sair do sistema</Logoff>
        </MenuContainer>
      ) : null}
    </>
  );
}
