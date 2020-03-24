import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/fastfeet-logo.png';

export default function SignIn() {
  function handleSubmit(data) {}

  return (
    <>
      <img src={logo} alt="FastFeet" />

      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <strong>SEU EMAIL</strong>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="exemplo@gmail.com"
          />
        </label>

        <label htmlFor="password">
          <strong>SUA SENHA</strong>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Sua senha secreta"
          />
        </label>

        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
