import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormItem } from '../Form';

const ErrorMessage = styled.small`
  color: #f5222d;
`;

export const InputField = styled.input`
  width: 100%;
  margin-bottom: 2px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  padding-left: 0.5em;

  /* :valid {
    background: lightcyan;
  } */

  :invalid {
    border-color: ${(props) => (props.error ? '#f5222d' : 'inherit')};
  }
`;

export const InputFieldMultiline = styled.textarea`
  width: 100%;
  margin-bottom: 2px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  padding-left: 0.5em;

  min-height: 3em;
`;

export default function Input({
  type,
  name,
  label,
  id,
  placeholder,
  multiline,
  onChange,
  required,
  pattern,
  minlength,
  maxlength,
  error,
  value,
}) {
  return (
    <FormItem label={label} id={id} required={required}>
      {multiline ? (
        <InputFieldMultiline
          onChange={onChange}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          required={required}
          pattern={pattern}
          max={maxlength}
          min={minlength}
          error={error}
        />
      ) : (
        <InputField
          type={type}
          onChange={onChange}
          name={name}
          id={`input-${id}`}
          placeholder={placeholder}
          value={value}
          required={required}
          pattern={pattern}
          max={maxlength}
          min={minlength}
          error={error}
        />
      )}
      <ErrorMessage>{error}</ErrorMessage>
    </FormItem>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  multiline: PropTypes.bool,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  pattern: PropTypes.string,
  minlength: PropTypes.number,
  maxlength: PropTypes.number,
  error: PropTypes.string,
  value: PropTypes.any,
};

Input.defaultProps = {
  type: null,
  name: Date.now().toString(),
  label: null,
  id: Date.now().toString(),
  placeholder: null,
  multiline: false,
  onChange: () => null,
  required: false,
  pattern: null,
  minlength: null,
  maxlength: null,
  error: null,
  value: null,
};
