import React, { useContext } from 'react';
import { FlightplanContext } from './FlightplanContext';
import Collapsible, { CollapsibleGroup } from '../ui/Collapsible';
import Page from '../ui/Page'

export default function Flightplanner({ match }) {
  const { flightplan, setFlightplan, setTaskingId } = useContext(FlightplanContext);

  // if (match.params.id) setTaskingId(match.params.id);

  return (
    <Page title="Flightplanner">
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
    </Page>
  );
}
