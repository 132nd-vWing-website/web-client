import PropTypes from 'prop-types';
import React from 'react';
import { Td, Tr } from '../styled/Table';

export default function NavPoint(props) {
  const {
    index,
    name,
    lat,
    lon,
    tos,
    hdg,
    dist,
    speed,
    alt,
    action,
    form,
    minFuel,
    onChange,
  } = props;

  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <Tr key={index}>
      <Td center name='index'>
        {index}
      </Td>
      <Td input name='name' value={name} onChange={handleChange} data-key={index} />
      <Td center name='lat'>
        {lat}
      </Td>
      <Td center name='lon'>
        {lon}
      </Td>
      <Td center name='tos'>
        {tos}
      </Td>
      <Td center name='hdg'>
        {hdg}
      </Td>
      <Td center name='dist'>
        {dist}
      </Td>
      <Td input center name='speed' value={speed} onChange={handleChange} data-key={index} />

      <Td center name='alt'>
        {alt}
      </Td>
      <Td input name='action' value={action || ''} onChange={handleChange} data-key={index} />
      <Td input name='form' value={form || ''} onChange={handleChange} data-key={index} />
      <Td input name='minFuel' value={minFuel || ''} onChange={handleChange} data-key={index} />
    </Tr>
  );
}

NavPoint.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string,
  lat: PropTypes.string,
};

NavPoint.defaultProps = {
  name: '',
  lat: "00°00'00",
};
