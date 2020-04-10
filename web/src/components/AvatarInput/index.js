import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useField } from '@unform/core';
import { MdImage } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function AvatarInput({ name, ...rest }) {
  const { fieldName, defaultValue, registerField } = useField(name);
  const [preview, setPreview] = useState(defaultValue);
  const avatarRef = useRef(null);

  const handlePreview = useCallback(e => {
    const file = e.target.files?.[0];
    if (!file) {
      setPreview(null);
      return;
    }

    const previewURL = URL.createObjectURL(file);
    setPreview(previewURL);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: avatarRef.current,
      path: 'files[0]',
      clearValue(ref) {
        ref.value = '';
        setPreview(null);
      },
      setValue(_, value) {
        setPreview(value);
      },
    });
  }, [fieldName, registerField]);

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
          onChange={handlePreview}
          ref={avatarRef}
          {...rest}
        />
      </label>
    </Container>
  );
}

AvatarInput.propTypes = {
  name: PropTypes.string.isRequired,
};
