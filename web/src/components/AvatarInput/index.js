import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { MdImage } from 'react-icons/md';
import PropTypes from 'prop-types';
import api from '~/services/api';

import { Container } from './styles';

export default function AvatarInput({ name }) {
  const { fieldName, defaultValue, registerField } = useField(name);

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const avatarRef = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: avatarRef.current,
      path: 'dataset.file',
    });
  }, [fieldName, registerField]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        {preview ? (
          <img src={preview} alt="" />
        ) : (
          <div>
            <MdImage color="#DDD" />
            <span>Adicionar foto</span>
          </div>
        )}
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={avatarRef}
        />
      </label>
    </Container>
  );
}

AvatarInput.propTypes = {
  name: PropTypes.string.isRequired,
};
