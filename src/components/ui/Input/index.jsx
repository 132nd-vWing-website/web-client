import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormItem } from '../Form';

const InputField = styled.input`
    width: 100%;
    margin-bottom: 2px;
    border: 1px solid rgba(0, 0, 0, 0.20);
    border-radius: 2px;
    padding-left: .5em;
`;

const InputFieldMultiline = styled.textarea`
    width: 100%;
    margin-bottom: 2px;
    border: 1px solid rgba(0, 0, 0, 0.20);
    border-radius: 2px;
    padding-left: .5em;

    min-height: 3em;
`;

export default function Input({ name, label, id, placeholder, multiline, onChange, value }) {
    return (
        <FormItem label={label} id={id}>
            {multiline ? <InputFieldMultiline onChange={onChange} name={name} id={id} placeholder={placeholder} value={value} /> : <InputField onChange={onChange} name={name} id={`input-${id}`} placeholder={placeholder} value={value} />}
        </FormItem>
    )
}


Input.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    multiline: PropTypes.bool,
    onChange: PropTypes.func,
};

Input.defaultProps = {
    name: Date.now().toString(),
    label: null,
    id: Date.now().toString(),
    placeholder: null,
    multiline: false,
    onChange: () => null,
};