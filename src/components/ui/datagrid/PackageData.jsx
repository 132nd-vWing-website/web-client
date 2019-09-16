import React from 'react';
import ReactDataGrid from 'react-data-grid';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/** Custom Formatters */
const AircraftAndQty = ({ row, value }) => <div>{`${row.qty} x ${value}`}</div>;

/** Default Data */
const columns = [
  { key: 'callsign', name: 'Callsign' },
  { key: 'aircraft', name: 'Aircraft', formatter: AircraftAndQty },
  { key: 'uhf', name: 'UHF' },
  { key: 'tcn', name: 'TCN' },
  { key: 'idm', name: 'IDM' },
  { key: 'task', name: 'Task/Notes' },
];

const rows = [
  {
    id: 0,
    callsign: 'RAVEN-5',
    aircraft: 'F/A-18C',
    qty: 2,
    uhf: 'GOLD5',
    tcn: '53X/116X',
    idm: '',
    task: 'CAP',
  },
  {
    id: 1,
    callsign: 'FALCON-1',
    aircraft: 'F/A-18C',
    qty: 4,
    uhf: 'BROWN6',
    tcn: '54X/117X',
    idm: '',
    task: 'STRIKE',
  },
  {
    id: 2,
    callsign: 'RODENT-3',
    aircraft: 'F-16CJ',
    qty: 2,
    uhf: 'YELLOW2',
    tcn: '55X/118X',
    idm: '',
    task: 'RSEAD',
  },
];

/** Package Data */
export default function PackageData() {
  return (
    <div>
      <ReactDataGrid
        columns={columns}
        rowGetter={(i) => rows[i]}
        rowsCount={3}
        minHeight={150}
        minColumnWidth={40}
      />
    </div>
  );
}

PackageData.propTypes = {
  name: PropTypes.string,
  value: PropTypes.array,
  onChange: PropTypes.func,
};

PackageData.defaultProps = {
  name: '',
  value: null,
  onChange: () => null,
};
