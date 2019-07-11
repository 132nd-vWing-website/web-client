import React, { useContext } from 'react';
import { FlightplanContext } from './FlightplanContext';
import styled from 'styled-components';
import { Grid, GridItem } from 'styled-grid-component';
import Collapsible, { CollapsibleGroup } from '../ui/Collapsible';
import Input, { InputGroup } from '../ui/Input';
import Page from '../ui/Page';
import { FiEdit } from "react-icons/fi";

const PageIngress = styled.div`
  margin-bottom: 1em;
`;

export default function Flightplanner({ match }) {
  const { flightplan, setFlightplan, setTaskingId } = useContext(FlightplanContext);

  // if (match.params.id) setTaskingId(match.params.id);

  return (
    <Page title="Flightplan - TR2222">
      <PageIngress>
        <p>
          Flight plan mandatory for all missions with a departure, area of operations or recovery
          within 132vWing 176th vACS controlled space.
          </p>
        <ul>
          <li>Fields ETA and ENR Intentions are mandatory</li>
          <li>
            ETA may be given approximately, e.g. <i>+2hrs.</i>
          </li>
        </ul>
        <b>
          Flight plan is to be submitted for approval a minimum of 2 hours prior to tasking
          takeoff time!
        </b>
        <hr />
      </PageIngress>
      <Grid
        width="100%"
        templateColumns="repeat(6, 1fr)"
        gap="10px"
        autoRows="minmax(100px, auto)"
      >
        <GridItem column="1 / 7" row="1">
          <InputGroup title="Mission Data" icon={<FiEdit />}>
            <Input label="Flight Date:" placeholder="TR2222" />
            <Input label="Task Number:" />
            <Input label="Tasking:" />
            <Input label="Package:" />
            <Input label="Callsign:" />
            <Input label="Mission Objective:" multiline />
          </InputGroup>

          <CollapsibleGroup>
            <Collapsible title='Mission'>
              <p>Some Content Here!</p>
            </Collapsible>
            <Collapsible title='Weather'>
              <p>Some Content Here!</p>
            </Collapsible>
            <Collapsible title='Element'>
              <p>Some Content Here!</p>
            </Collapsible>
          </CollapsibleGroup>
        </GridItem>
        <GridItem column="1 / 4" row="2">
          <Collapsible title='Package'>
            <p>Some Content Here!</p>
          </Collapsible>
          <Collapsible title='Navigation'>
            <p>Some Content Here!</p>
          </Collapsible>
          <Collapsible title='Fuel'>
            <p>Some Content Here!</p>
          </Collapsible>
          <Collapsible title='Signals'>
            <p>Some Content Here!</p>
          </Collapsible>
        </GridItem>
        <GridItem column="4 / 7" row="2">
          <Collapsible title='Package'>
            <p>Some Content Here!</p>
          </Collapsible>
          <Collapsible title='Navigation'>
            <p>Some Content Here!</p>
          </Collapsible>
          <Collapsible title='Fuel'>
            <p>Some Content Here!</p>
          </Collapsible>
          <Collapsible title='Signals'>
            <p>Some Content Here!</p>
          </Collapsible>
        </GridItem>
      </Grid>
    </Page>
  );
}
