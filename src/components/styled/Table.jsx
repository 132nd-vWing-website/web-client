import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from './colors';
import media from './media';

/** <table></table> */
export const Table = styled.table`
  border-bottom: 1px solid #dadada;
  width: 100%;
`;

/** <th></th> */
export const Th = styled.th`
  padding-left: 0.5em;
  padding-top: 1em;
  border-bottom: 1px solid #dadada;

  @media (max-width: ${media.md}) {
    display: none;
  }
`;

export const Tbody = styled.tbody`
  background: ${colors.global.white};

  & tr:nth-child(odd) {
    background: ${colors.global.input};
  }
`;

/** <tr></tr> */
export const Tr = styled.tr`
  background: inherit;
`;

/** <td></td> */
const StyledTd = styled.td`
  border: 1px solid #dadada;
  padding: 0.5em;
  background: ${(props) => (props.readOnly ? colors.global.readOnly : 'inherit')};

  @media (max-width: ${media.md}) {
    width: 100%
    display: block;
    margin:10px 0px;

    &:last-of-type {
      margin-bottom: 1.5em;
    }
  }
`;

const InputTd = styled(StyledTd)`
  background: inherit;
`;

const StyledInput = styled.input`
  width: 100%;
  border: 0;
  background: none;
`;

export function Td(props) {
  const { input } = props;

  const htmlProps = Object.assign({}, props);
  delete htmlProps.input;

  if (input)
    return (
      <InputTd>
        <StyledInput {...htmlProps} />
      </InputTd>
    );

  return <StyledTd {...props} />;
}

Td.propTypes = {
  input: PropTypes.bool,
};

Td.defaultProps = {
  input: null,
};

/** TableActions */
const StyledActions = styled.div`
  float: right;
  margin-right: 1em;
  margin-bottom: 2em;

  & div:first-of-type {
    border-bottom-left-radius: 0.5em;
  }

  & div:last-of-type {
    border-bottom-right-radius: 0.5em;
  }
`;

const Action = styled.div`
  display: inline-block;
  padding: 0.25em 1em;
  border: 1px solid #dadada;
  border-top: 0;
  cursor: pointer;
  user-select: none;
`;

const AddAction = styled(Action)`
  color: #fff;
  background: #1890ff;
  border-color: #1890ff;

  &:hover {
    background: #40a9ff;
    border-color: #1890ff;
  }
`;

const RemoveAction = styled(Action)`
  color: #f5222d;
  background-color: #f5f5f5;
  border-color: #d9d9d9;

  &:hover {
    color: white;
    background: #f5222d;
    border-color: #f5222d;
  }
`;

export function TableActions({ onAdd, onRemove }) {
  const actions = [];

  if (onAdd)
    actions.push(
      <AddAction key='add' onClick={onAdd}>
        Add Row
      </AddAction>,
    );

  if (onRemove)
    actions.push(
      <RemoveAction key='remove' onClick={onRemove}>
        Delete Row
      </RemoveAction>,
    );

  return <StyledActions>{actions}</StyledActions>;
}

export default Table;
