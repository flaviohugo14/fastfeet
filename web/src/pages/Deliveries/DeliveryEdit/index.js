/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useEffect } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';

import AsyncSelectInput from '~/components/AsyncSelectInput';
import SimpleInput from '~/components/SimpleInput';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Content, Title, FormContainer } from './styles';

export default function DeliveryEdit({ match }) {
  const { id } = match.params;
  const formRef = useRef(null);

  useEffect(() => {
    async function loadInitialData(deliveryId) {
      const response = await api.get(`/deliveries/${deliveryId}`);

      formRef.current.setData(response.data);
      formRef.current.setFieldValue('recipient_id', {
        value: response.data.recipient.id,
        label: response.data.recipient.name,
      });
      formRef.current.setFieldValue('deliveryman_id', {
        value: response.data.deliveryman.id,
        label: response.data.deliveryman.name,
      });
    }
    loadInitialData(id);
  }, [id]);

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
    input: styles => ({ ...styles, backgroundColor: 'none' }),
    placeholder: styles => ({
      ...styles,
      color: '#999',
      fontSize: 16,
    }),
    singleValue: styles => ({ ...styles, backgroundColor: 'none' }),
  };

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        product: Yup.string().required('O nome do produto é obrigatório'),
        recipient_id: Yup.string().required('O destinatário é obrigatório'),
        deliveryman_id: Yup.string().required('O entregador é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.put(`/deliveries/${id}`, data);
      history.push('/deliveries');
      toast.success('Encomenda editada com sucesso!');
    } catch (err) {
      toast.error(err);
    }
  }

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
            <button
              type="button"
              id="save"
              onClick={() => formRef.current.submitForm()}
            >
              <MdCheck size={20} color="#fff" /> SALVAR
            </button>
          </div>
        </div>
        <FormContainer ref={formRef} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="recipients" id="recipients">
              <strong>Destinatário</strong>
              <AsyncSelectInput
                type="text"
                name="recipient_id"
                placeholder="Destinatários"
                loadOptions={loadRecipients}
                styles={colourStyles}
                noOptionsMessage={() => 'Nenhum destinatário encontrado'}
              />
            </label>
            <label htmlFor="deliveryman">
              <strong>Entregador</strong>
              <AsyncSelectInput
                type="text"
                name="deliveryman_id"
                loadOptions={loadDeliverymen}
                placeholder="Entregadores"
                styles={colourStyles}
                noOptionsMessage={() => 'Nenhum entregador encontrado'}
              />
            </label>
          </div>
          <label htmlFor="productName">
            <strong>Nome do produto</strong>
            <SimpleInput type="text" id="productName" name="product" />
          </label>
        </FormContainer>
      </Content>
    </Container>
  );
}

DeliveryEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
