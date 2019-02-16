import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import API_ROOT from './api-config';

export const AirfieldsContext = React.createContext({
  airfields: [],
  setAirfields: () => null,
});

export const AirfieldsConsumer = AirfieldsContext.Consumer;

export default function AirfieldsProvider(props) {
  const { children } = props;

  const [airfields, setAirfields] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_ROOT}/airfields`)
      .then((res) => setAirfields(res.data))
      .catch(() => setAirfields([]));
  }, []);

  return (
    <AirfieldsContext.Provider value={{ airfields, setAirfields }}>
      {children}
    </AirfieldsContext.Provider>
  );
}

AirfieldsProvider.propTypes = {
  children: PropTypes.object,
};

AirfieldsProvider.defaultProps = {
  children: {},
};
