import React from 'react';
import PropTypes from 'prop-types';
import Flightplaner from './Flightplanner';

/**
 * FlightplanContext
 * @array flightplan - An array containing a set of key:value pairs that make up the flightplan
 * @function setFlightplan - Updates the current Flightplan (Replaces it!)
 * @function setTaskingID - Sets a database-id for what will be used to populate the initial Flightplan
 */

export const FlightplanContext = React.createContext({
  flightplan: null,
  setFlightplan: () => null,
  setTaskingId: () => null,
});

export const FlightplanConsumer = FlightplanContext.Consumer;

export function FlightplanProvider({ children }) {
  const [flightplan, setFlightplan] = React.useState(null); // Should probably define a default object here

  const [taskingId, setTaskingId] = React.useState(null);

  return (
    <FlightplanContext.Provider value={{ flightplan, setFlightplan, setTaskingId }}>
      <Flightplaner />
    </FlightplanContext.Provider>
  );
}

FlightplanProvider.propTypes = {
  children: PropTypes.object,
};

FlightplanProvider.defaultProps = {
  children: {},
};
