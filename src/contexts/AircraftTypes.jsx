import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const defaultTypes = [
  {
    ac_id: 1,
    ac_type: 'F/A-18C',
    ac_nato: 'Hornet',
    ac_role: 'multi',
  },
  {
    ac_id: 2,
    ac_type: 'A-10C',
    ac_nato: 'Warthog',
    ac_role: 'cas',
  },
  {
    ac_id: 3,
    ac_type: 'Ka-50',
    ac_nato: 'Black Shark',
    ac_role: 'cas',
  },
  {
    ac_id: 4,
    ac_type: 'Mi-8',
    ac_nato: 'Hip',
    ac_role: 'transport',
  },
  {
    ac_id: 5,
    ac_type: 'M2000C',
    ac_nato: 'Mirage',
    ac_role: 'multi',
  },
  {
    ac_id: 6,
    ac_type: 'N/A',
    ac_nato: 'Ground Unit(s)',
    ac_role: 'ground',
  },
];

export const AircraftTypesContext = React.createContext({
  types: [],
  setTypes: () => null,
});

export const AircraftTypesConsumer = AircraftTypesContext.Consumer;

export default function AircraftTypesProvider(props) {
  const { children } = props;

  const [types, setTypes] = useState(defaultTypes);
  // useEffect(() => {
  //   axios
  //     .get(`${API_ROOT}/aircraft/types`)
  //     .then((res) => setTypes(res.data))
  //     .catch(() => setTypes([]));
  // }, []);

  return (
    <AircraftTypesContext.Provider value={{ types, setTypes }}>
      {children}
    </AircraftTypesContext.Provider>
  );
}

AircraftTypesProvider.propTypes = {
  children: PropTypes.any,
};

AircraftTypesProvider.defaultProps = {
  children: null,
};
