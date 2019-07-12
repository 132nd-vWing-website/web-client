import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const test_source = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const test_columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const TableContainer = styled.table`
  width: 100%;
  /* border: 1px solid rgba(0, 0, 0, 0.20); */
`;

const Tr = styled.tr``;

const Th = styled.th`
  /* background: rgba(0, 0, 0, 0.05); */
  margin-bottom: 2px;
  border: 1px solid rgba(0, 0, 0, 0.20);
  padding-left: .5em;
  text-align: ${(attr) => (attr.centered ? 'center' : 'inherit')};
`;

const Td = styled.td`
  margin-bottom: 2px;
  border: 1px solid rgba(0, 0, 0, 0.20);
  padding-left: .5em;
`;

export default function Table({ children, source, columns, centered }) {

  const headers = columns.map((col) => <Th centered key={col.key}>{col.title}</Th>)

  return (
    <TableContainer>
      <thead>
        <Tr>
          {headers}
          {/* <Th centered={centered}>ID</Th>
          <Th centered={centered}>Pilot</Th>
          <Th centered={centered}>TCN</Th>
          <Th centered={centered}>Laser</Th>
          <Th centered={centered}>Mode</Th> */}
        </Tr>
      </thead>
      <tbody>
        <Tr>
          <Td>1 FL</Td>
          <Td>DEX</Td>
          <Td>53X</Td>
          <Td>1600</Td>
          <Td>4211</Td>
        </Tr>
        <Tr>
          <Td>2 WM</Td>
          <Td>GOOSE</Td>
          <Td>116X</Td>
          <Td>1601</Td>
          <Td>4212</Td>
        </Tr>
      </tbody>
    </TableContainer>
  )
}


Table.propTypes = {
  children: PropTypes.array,
  columns: PropTypes.array,
}

Table.defaultProps = {
  columns: []
};