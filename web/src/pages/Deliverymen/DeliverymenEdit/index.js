/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useEffect } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';

import PropTypes from 'prop-types';

import api from '~/services/api';
import history from '~/services/history';

import SimpleInput from '~/components/SimpleInput';
import AvatarInput from '~/components/AvatarInput';

import { Container, Content, Title, FormContainer } from './styles';

export default function DeliverymenEdit({ match }) {
  const { id } = match.params;
  const formRef = useRef(null);

  useEffect(() => {
    async function loadInitialData(deliverymanId) {
      const response = await api.get(`/deliverymen/${deliverymanId}`);

      formRef.current.setData(response.data);
      formRef.current.setFieldValue('avatar', response?.data?.avatar?.url);
    }
    loadInitialData(id);
  }, [id]);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome do entregador é obrigatório'),
        email: Yup.string().required('O email do entregador é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const dataFile = new FormData();

      dataFile.append('file', data.avatar);

      const responseFile = data.avatar
        ? await api.post('files', dataFile)
        : null;

      await api.put(`deliverymen/${id}`, {
        name: data.name,
        email: data.email,
        avatar_id: responseFile?.data?.id,
      });
      toast.success('Entregador editado com sucesso!');
      history.push('/deliverymen');
    } catch (err) {
      toast.error('Não foi possível editar o entregador');
    }
  }

  return (
    <Container>
      <Content>
        <div>
          <Title>Cadastro de entregadores</Title>
          <div>
            <button
              type="button"
              id="return"
              onClick={() => history.push('/deliverymen')}
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
          <AvatarInput name="avatar" />
          <label htmlFor="name">
            <strong>Nome</strong>
            <SimpleInput
              type="text"
              id="name"
              name="name"
              placeholder="Nome do entregador"
            />
          </label>
          <label htmlFor="email">
            <strong>Email</strong>
            <SimpleInput
              type="text"
              id="email"
              name="email"
              placeholder="E-mail do entregador"
            />
          </label>
        </FormContainer>
      </Content>
    </Container>
  );
}

DeliverymenEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
