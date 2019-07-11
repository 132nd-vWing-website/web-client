import React from 'react';
import styled from 'styled-components';
import { Grid, GridItem } from 'styled-grid-component';
import PropTypes from 'prop-types';

const InputLabel = styled.label`
    font-weight: 600;
    float: right;
`;

const InputLabelWrapper = styled.div`
    min-width: 4em;
    float:right
`;

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

const InputContainer = styled.div`
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 1em;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    background: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 2px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    margin-bottom: 1em;
`;

const InputHead = styled.div`
    min-height: 3em;
    margin-bottom: -1px;
    padding: 0 1.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 16px;
    background: transparent;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 2px 2px 0 0;
    zoom: 1;

    &::before {
        content: '';
        display: table;
    }    
`;

const InputHeadWrapper = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
`;

const InputHeadTitle = styled.div`
    display: inline-block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 16px 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const InputHeadIcon = styled.span`
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    top: 50%;
    margin-top: 2px;
    padding-right: 1em;
`;

const InputBody = styled.div`
    padding: 1.5em 2em;
    zoom: 1;
`;

export function InputGroup({ children, title, icon }) {
    return (
        <InputContainer>
            <InputHead><InputHeadWrapper><InputHeadTitle>{icon ? (<InputHeadIcon>{icon}</InputHeadIcon>) : null} {title}</InputHeadTitle></InputHeadWrapper></InputHead>
            <InputBody>{children}</InputBody>
        </InputContainer>
    )
}

export default function Input({ name, label, id, placeholder, multiline, onChange }) {

    // If there is no label supplied, then have the input element take up the whole space
    if (!label) {
        return (
            <React.Fragment>

                {multiline ? <InputFieldMultiline name={name} id={`input-${id}`} placeholder={placeholder} /> : <InputField name={name} id={`input-${id}`} placeholder={placeholder} />}
            </React.Fragment>
        )
    }

    // If there is a label, then we need to present it accordingly
    return (
        <Grid
            width="100%"
            templateColumns="repeat(6, 1fr)"
            gap="10px"
        >
            <GridItem column="1 / 2" row="1">
                <InputLabelWrapper>
                    <InputLabel htmlFor={`input-${id}`}>
                        {label}
                    </InputLabel>
                </InputLabelWrapper>
            </GridItem>
            <GridItem column="2 / 7" row="1">
                {multiline ? <InputFieldMultiline onChange={onChange} name={name} id={`input-${id}`} placeholder={placeholder} /> : <InputField onChange={onChange} name={name} id={`input-${id}`} placeholder={placeholder} />}
            </GridItem>
        </Grid>
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