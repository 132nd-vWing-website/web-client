import React from 'react';
import styled from 'styled-components';
import { Grid, GridItem } from 'styled-grid-component';
import PropTypes from 'prop-types';

const InputLabel = styled.label`
    font-weight: 600;
    float:right;
`;

const InputField = styled.input`
    width: 100%;
    margin-bottom: 2px;
    border: 1px solid rgba(0, 0, 0, 0.20);
    border-radius: 2px;
    padding-left: .5em;
`;

export default function Input({ label, id, placeholder }) {
    return (
        <Grid
            width="100%"
            templateColumns="repeat(6, 1fr)"
            gap="10px"
        >
            <GridItem column="1 / 2" row="1">
                <InputLabel htmlFor={`input-${id}`}>
                    {label}
                </InputLabel>
            </GridItem>
            <GridItem column="2 / 7" row="1">
                <InputField id={`input-${id}`} placeholder={placeholder} />
            </GridItem>
        </Grid>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,

};

Input.defaultProps = {
    label: 'Input:',
    id: Date.now().toString(),
    placeholder: null,
};