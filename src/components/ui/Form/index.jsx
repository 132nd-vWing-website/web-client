import React from 'react';
import styled from 'styled-components';
import { Grid, GridItem } from 'styled-grid-component';
import PropTypes from 'prop-types';

const FormLabel = styled.label`
  font-weight: 600;
  float: right;

  ::before {
    display: inline-block;
    margin-right: 4px;
    color: #f5222d;
    font-size: 14px;
    font-family: SimSun, sans-serif;
    line-height: 1;
    content: ${(props) => (props.required ? "'*'" : "''")};
  }
`;

const FormLabelWrapper = styled.div`
  min-width: 4em;
  float: right;
`;

const FormContainer = styled.div`
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

const FormHead = styled.div`
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

const FormHeadWrapper = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
`;

const FormHeadTitle = styled.div`
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

const FormHeadIcon = styled.span`
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  top: 50%;
  margin-top: 2px;
  padding-right: 1em;
`;

const FormBody = styled.div`
  padding: 1.5em 2em;
  zoom: 1;
`;

export default function Form({ children, title, icon }) {
  return (
    <FormContainer>
      {title ? (
        <FormHead>
          <FormHeadWrapper>
            <FormHeadTitle>
              {icon ? <FormHeadIcon>{icon}</FormHeadIcon> : null} {title}
            </FormHeadTitle>
          </FormHeadWrapper>
        </FormHead>
      ) : null}
      <FormBody>{children}</FormBody>
    </FormContainer>
  );
}

Form.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  icon: PropTypes.object,
};

Form.defaultProps = {
  children: null,
  title: null,
  icon: null,
};

export function FormItem({ label, children, id, required }) {
  // If no label, just return the children
  if (!label) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  // If there is a label, we need to wrap children accordingly
  return (
    <Grid width='100%' templateColumns='repeat(6, 1fr)' gap='10px'>
      <GridItem column='1 / 2' row='1'>
        <FormLabelWrapper>
          <FormLabel htmlFor={id} required={required}>
            {label}
          </FormLabel>
        </FormLabelWrapper>
      </GridItem>
      <GridItem column='2 / 7' row='1'>
        {children}
      </GridItem>
    </Grid>
  );
}

FormItem.propTypes = {
  label: PropTypes.string,
  children: PropTypes.any,
  id: PropTypes.string,
  required: PropTypes.bool,
};

FormItem.defaultProps = {
  label: 'Label',
  children: null,
  id: '',
  required: false,
};
