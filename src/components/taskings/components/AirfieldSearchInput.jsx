import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';

function AirfieldSearchInput(props) {
  const { airfields, name, style, onChange, options } = props;

  // Create airfield options from the list of airfields available
  const [airfieldOptions, setAirfieldOptions] = useState([]);
  useEffect(
    () => {
      setAirfieldOptions(
        options.map((airfield) => ({
          key: `${airfield.airfield_id}`,
          label: `${airfield.af_icao} (RWY ${airfield.af_rwy}) - ${airfield.af_name}`,
          value: airfield.airfield_id,
        })),
      );
    },
    [options],
  );

  // Match the current selected airfield to the airfieldOption object
  const [value, setValue] = useState(null);
  useEffect(
    () => {
      // Find the stored airfield...
      const airfield = airfields.find((field) => field.name === name);
      // ...match that airfield to our options, so that we can display the correct data
      const newValue = airfieldOptions.find((option) => option.key === airfield.id.toString());
      setValue(newValue);
    },
    [airfieldOptions],
  );

  // Return data to parent component when a new airfield is selected
  const [result, setResult] = useState(null);
  useEffect(
    () => {
      if (result) {
        const index = airfields.findIndex((field) => field.name === result.name);

        const data = options.find((option) => option.airfield_id === result.value);
        const updatedAirfield = {
          id: result.value,
          icao: data.af_icao,
          tcn: data.af_tcn,
          gnd: data.af_gnd,
          twr: data.af_twr,
          elev: data.af_elev,
          rwy: data.af_rwy,
          ils: data.af_ils,
          ctrl: data.af_ctrl,
          len: data.af_rwy_length,
          lat: data.af_lat,
          lon: data.af_lon,
        };

        airfields[index] = Object.assign({}, airfields[index], updatedAirfield);
        onChange({ name: 'airfields', value: airfields });
      }
    },
    [result],
  );

  return (
    <SearchInput
      value={value ? value.label : ''}
      name={name}
      onChange={setResult}
      data={airfieldOptions}
      style={style}
    />
  );
}

AirfieldSearchInput.propTypes = {
  name: PropTypes.string.isRequired,
  airfields: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  style: PropTypes.object,
};

AirfieldSearchInput.defaultProps = {
  style: {},
};

export default AirfieldSearchInput;
