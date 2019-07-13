import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { InputField } from '../Input';
import { TableContainer, TableHeaders, Tr, Td } from '.';

import connectHtmlElementValueToObject from '../../helpers/connectHtmlElementValueToObject';

const defaultSource = [
  {
    key: '0',
    position: '1',
    pilot: '',
    tcn: '',
    laser: '',
    mode: '',
  },
  {
    key: '1',
    position: '2',
    pilot: '',
    tcn: '',
    laser: '',
    mode: '',
  },
  {
    key: '2',
    position: '3',
    pilot: '',
    tcn: '',
    laser: '',
    mode: '',
  },
  {
    key: '3',
    position: '4',
    pilot: '',
    tcn: '',
    laser: '',
    mode: '',
  },
];

const columns = [
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

const TableRow = styled(Tr)`
  background: white;
`;

const TableData = styled(Td)`
  padding: 0;
`;

const InputCell = styled(InputField)`
  margin: 0;
  padding: 0;
  padding-left: 0.5em;
  border: none !important;
`;

/** Flight Data Row */
export function FlightDataRow({ data, name, onChange }) {
  const handleChange = (e) => {
    // Merge the changed data with the flight's data into an object of objects (See default source)
    const change = { ...data, ...{ [e.target.name]: e.target.value } };

    const result = {
      target: {
        name,
        value: change,
      },
    };

    onChange(result);
  };

  const keys = Object.keys(data).filter((cell) => cell !== 'key');
  const cells = keys.map((key) => (
    <TableData key={key}>
      <InputCell name={`${key}`} value={data[key]} onChange={handleChange} />
    </TableData>
  ));

  return <TableRow>{cells}</TableRow>;
}

FlightDataRow.propTypes = {
  data: PropTypes.object,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

FlightDataRow.defaultProps = {
  data: {},
  name: '',
  onChange: () => null,
};

/** Flight Data */
export default function FlightData({ value, name, onChange }) {
  // Make sure we actually have a default object to populate
  if (!value) {
    onChange({ target: { name, value: defaultSource } });
    return null;
  }

  const handleChange = (e) => {
    // Merge the changed data with other flights's data into an array of objects (See default source)
    const change = Object.keys(value).map((key) => {
      if (key === e.target.name) return e.target.value;
      return value[key];
    });

    const result = {
      target: {
        name,
        value: change,
      },
    };

    onChange(result);
  };

  const rows = value.map((item) => (
    <FlightDataRow key={item.key} name={`${item.key}`} data={item} onChange={handleChange} />
  ));

  return (
    <TableContainer name={name}>
      <TableHeaders columns={columns} centered />
      <tbody>{rows}</tbody>
    </TableContainer>
  );
}

FlightData.propTypes = {
  name: PropTypes.string,
  value: PropTypes.array,
  onChange: PropTypes.func,
};

FlightData.defaultProps = {
  name: '',
  value: null,
  onChange: () => null,
};
