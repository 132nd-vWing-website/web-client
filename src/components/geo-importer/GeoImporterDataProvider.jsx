import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const GeoImporterDataContext = React.createContext({
  data: null,
  setData: () => null,
});

export default function GeoImporterDataProvider(props) {
  const { children } = props;

  const [data, setData] = useState(null);

  return (
    <GeoImporterDataContext.Provider value={{ data, setData }}>
      {children}
    </GeoImporterDataContext.Provider>
  );
}

GeoImporterDataProvider.propTypes = {
  children: PropTypes.object,
};

GeoImporterDataProvider.defaultProps = {
  children: {},
};
