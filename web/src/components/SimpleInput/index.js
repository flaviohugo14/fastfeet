import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { UnInput } from './styles';

export default function SimpleInput({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = '', registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return <UnInput ref={inputRef} defaultValue={defaultValue} {...rest} />;
}

SimpleInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

SimpleInput.defaultProps = {
  label: '',
};
