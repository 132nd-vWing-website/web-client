import { Input, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';

export default function AircraftSelector(props) {
  const { onChange, name, style, options, value } = props;

  // console.log('options: ', options);

  // Create aircraft options from props
  const [aircraftOptions, setAircraftOptions] = useState([]);
  useEffect(
    () => {
      setAircraftOptions(
        options.map((type) => ({
          key: `${type.ac_id}`,
          label: `${type.ac_type} ${type.ac_nato}`,
          value: type.ac_id,
        })),
      );
    },
    [options],
  );

  // Store value in state
  const [type, setType] = useState(null);
  useEffect(
    () => {
      const newType = aircraftOptions.find((option) => option.key === value.id.toString());
      setType(newType);
    },
    [aircraftOptions],
  );

  // Return data to the missionData object when a new aircraft is selected
  const [result, setResult] = useState(null);
  useEffect(
    () => {
      if (result) {
        const data = options.find((option) => option.ac_id === result.value);
        onChange((prev) => ({
          ...prev,
          aircraft: {
            id: result.value,
            type: data.ac_type,
            nato: data.ac_nato,
            role: data.ac_role,
          },
        }));
      }
    },
    [result],
  );

  return (
    <SearchInput
      value={type ? type.label : ''}
      name={name}
      onChange={setResult}
      data={aircraftOptions}
      style={style}
    />
  );
}

AircraftSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array,
  name: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.object,
};

AircraftSelector.defaultProps = {
  name: 'aircraft',
  style: {},
  options: [],
  value: {},
};
