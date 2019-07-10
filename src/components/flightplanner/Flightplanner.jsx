import React, { useContext } from 'react';
import { FlightplanContext } from './FlightplanContext';
import Collapsible, { CollapsibleGroup } from '../ui/Collapsible';

export default function Flightplanner({ match }) {
  const { flightplan, setFlightplan, setTaskingId } = useContext(FlightplanContext);

  // if (match.params.id) setTaskingId(match.params.id);

  return (
    <CollapsibleGroup>
      <Collapsible title='Some meaningfull title'>
        <p>Some Content Here!</p>
      </Collapsible>
      <Collapsible title='Some meaningfull title'>
        <p>Some Content Here!</p>
      </Collapsible>
      <Collapsible title='Some meaningfull title'>
        <p>Some Content Here!</p>
      </Collapsible>
    </CollapsibleGroup>
  );
}
