import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const testSource = [
  {
    key: '1',
    position: '1',
    pilot: 'Maverick',
    tcn: '53X',
    laser: '1601',
    mode: '4211',
  },
  {
    key: '2',
    position: '2',
    pilot: 'Goose',
    tcn: '116X',
    laser: '1602',
    mode: '4212',
  },
  {
    key: '3',
    position: '3',
    pilot: 'Iceman',
    tcn: '116X',
    laser: '1603',
    mode: '4213',
  },
  {
    key: '4',
    position: '4',
    pilot: 'Slider',
    tcn: '116X',
    laser: '1604',
    mode: '4214',
  },
];

const testColumns = [
  {
    title: '#',
    dataIndex: 'position',
    key: 'position',
  },
  {
    title: 'Pilot',
    dataIndex: 'pilot',
    key: 'pilot',
  },
  {
    title: 'TCN',
    dataIndex: 'tcn',
    key: 'tcn',
  },
  {
    title: 'Laser',
    dataIndex: 'laser',
    key: 'laser',
  },
  {
    title: 'Mode',
    dataIndex: 'mode',
    key: 'mode',
  },
];

export const TableContainer = styled.table`
  width: 100%;
  /* border: 1px solid rgba(0, 0, 0, 0.20); */
`;

export const Tr = styled.tr`
  text-align: ${(attr) => (attr.centered ? 'center' : 'inherit')};
`;

export const Th = styled.th`
  /* background: rgba(0, 0, 0, 0.05); */
  margin-bottom: 2px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding-left: 0.5em;
  text-align: ${(attr) => (attr.centered ? 'center' : 'inherit')};
`;

export const Td = styled.td`
  margin-bottom: 2px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding-left: 0.5em;
`;

/** TABLE HEADERS */
export function TableHeaders({ columns, centered }) {
  const tableHeaders = columns.map((col) => (
    <Th centered={centered} key={col.key}>
      {col.title}
    </Th>
  ));

  return (
    <thead>
      <Tr>{tableHeaders}</Tr>
    </thead>
  );
}

TableHeaders.propTypes = {
  columns: PropTypes.array,
  centered: PropTypes.bool,
};

TableHeaders.defaultProps = {
  columns: testColumns,
  centered: false,
};

/** TABLE BODY */
export function TableBody({ source }) {
  const rows = source.map((row) => <TableRow key={row.key} rowData={row} />);

  return <tbody>{rows}</tbody>;
}

TableBody.propTypes = {
  source: PropTypes.array,
};

TableBody.defaultProps = {
  source: testSource,
};

/** TABLE ROW */
export function TableRow({ rowData, centered }) {
  const keys = Object.keys(rowData).filter((cell) => cell !== 'key');
  const cells = keys.map((key) => <Td key={key}>{rowData[key]}</Td>);

  return <Tr centered={centered}>{cells}</Tr>;
}

TableRow.propTypes = {
  rowData: PropTypes.object,
  centered: PropTypes.bool,
};

TableRow.defaultProps = {
  rowData: {},
  centered: false,
};

/** TABLE */
export default function Table({ source, columns, centered }) {
  return (
    <TableContainer>
      <TableHeaders columns={columns} centered={centered} />
      <TableBody source={source} centered={centered} />
    </TableContainer>
  );
}

Table.propTypes = {
  columns: PropTypes.array,
  source: PropTypes.array,
  centered: PropTypes.bool,
};

Table.defaultProps = {
  source: testSource,
  columns: testColumns,
  centered: false,
};
