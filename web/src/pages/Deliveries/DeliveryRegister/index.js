/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import AsyncSelect from 'react-select/async';

import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Content, Title, FormContainer } from './styles';

export default function DeliveryRegister() {
  async function loadRecipients(inputValue, callback) {
    const response = await api.get('recipients', {
      params: {
        q: inputValue,
      },
    });

    const data = response.data.map(recipient => ({
      value: recipient.id,
      label: recipient.name,
    }));

    callback(data);
  }

  async function loadDeliverymen(inputValue, callback) {
    const response = await api.get('deliverymen', {
      params: {
        q: inputValue,
      },
    });

    const data = response.data.map(deliveryman => ({
      value: deliveryman.id,
      label: deliveryman.name,
    }));

    callback(data);
  }

  const colourStyles = {
    control: styles => ({
      ...styles,
      backgroundColor: 'white',
      width: '100%',
      maxWidth: 450,
      height: 45,
    }),
    option: styles => ({
      ...styles,
      backgroundColor: 'none',
    }),
    input: styles => ({ ...styles }),
    placeholder: styles => ({
      ...styles,
      color: '#999',
      fontSize: 16,
    }),
    singleValue: styles => ({ ...styles }),
  };

  return (
    <Container>
      <Content>
        <div>
          <Title>Cadastro de encomendas</Title>
          <div>
            <button
              type="button"
              id="return"
              onClick={() => history.push('/deliveries')}
            >
              <MdKeyboardArrowLeft size={20} color="#fff" /> VOLTAR
            </button>
            <button type="button" id="save">
              <MdCheck size={20} color="#fff" /> SALVAR
            </button>
          </div>
        </div>
        <FormContainer>
          <div>
            <label htmlFor="recipients" id="recipients">
              <strong>Destinatário</strong>
              <AsyncSelect
                cacheOptions
                loadOptions={loadRecipients}
                defaultOptions
                styles={colourStyles}
              />
            </label>
            <label htmlFor="deliveryman">
              <strong>Entregador</strong>
              <AsyncSelect
                cacheOptions
                loadOptions={loadDeliverymen}
                defaultOptions
                styles={colourStyles}
              />
            </label>
          </div>
          <label htmlFor="productName">
            <strong>Nome do produto</strong>
            <input type="text" id="productName" />
          </label>
        </FormContainer>
      </Content>
    </Container>
  );
}
