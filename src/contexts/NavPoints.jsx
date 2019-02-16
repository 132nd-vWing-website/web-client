import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const defaultPoints = [
  {
    action: 'DEPARTURE',
    alt: 0,
    dist: 0,
    gs: 180.05556,
    hdg: 0,
    id: 0,
    lat: 42.177616666,
    lon: 42.48123,
    name: 'UGKO',
    tos: 1549562400000,
  },
];

export const NavPointsContext = React.createContext({
  navPoints: [],
  setNavPoints: () => null,
});

export default function NavPointsProvider(props) {
  const { children } = props;

  const [navPoints, setNavPoints] = useState(defaultPoints);

  return (
    <NavPointsContext.Provider value={{ navPoints, setNavPoints }}>
      {children}
    </NavPointsContext.Provider>
  );
}

NavPointsProvider.propTypes = {
  children: PropTypes.object,
};

NavPointsProvider.defaultProps = {
  children: {},
};
