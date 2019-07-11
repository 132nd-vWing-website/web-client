import React, { useContext } from 'react';
import { FlightplanContext } from './FlightplanContext';
import styled from 'styled-components';
import { Grid, GridItem } from 'styled-grid-component';
import Collapsible, { CollapsibleGroup } from '../ui/Collapsible';
import Input, { InputGroup } from '../ui/Input';
import Page from '../ui/Page';
import { FiEdit } from "react-icons/fi";
import { MdFlightLand, MdFlightTakeoff, MdHelpOutline, MdMyLocation, MdAirplanemodeActive, MdPeople, MdBuild, MdFlare, MdGraphicEq } from "react-icons/md";

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
            <Input label="Task #:" />
            <Input label="Tasking:" />
            <Input label="Package:" />
            <Input label="Callsign:" />
            <Input label="Mission Objective:" multiline />
          </InputGroup>
        </GridItem>
        <GridItem column="1 / 3" row="2">
          <InputGroup title="Departure" icon={<MdFlightTakeoff />}>
            <Input label="Airfield:" placeholder="UGKO" />
            <Input label="TCN:" />
            <Input label="GND:" />
            <Input label="TWR:" />
            <Input label="RWY:" />
            <Input label="ILS:" />
            <Input label="ELEV:" />
          </InputGroup>
        </GridItem>
        <GridItem column="3 / 5" row="2">
          <InputGroup title="Arrival" icon={<MdFlightLand />}>
            <Input label="Airfield:" placeholder="UGKO" />
            <Input label="TCN:" />
            <Input label="GND:" />
            <Input label="TWR:" />
            <Input label="RWY:" />
            <Input label="ILS:" />
            <Input label="ELEV:" />
          </InputGroup>
        </GridItem>
        <GridItem column="5 / 7" row="2">
          <InputGroup title="Alternate" icon={<MdHelpOutline />}>
            <Input label="Airfield:" placeholder="UGKO" />
            <Input label="TCN:" />
            <Input label="GND:" />
            <Input label="TWR:" />
            <Input label="RWY:" />
            <Input label="ILS:" />
            <Input label="ELEV:" />
          </InputGroup>
        </GridItem>
        <GridItem column="1 / 7" row="3">
          <InputGroup title="Enroute Intentions" icon={<FiEdit />}>
            <Input multiline />
          </InputGroup>
        </GridItem>
        <GridItem column="1 / 7" row="4">
          <InputGroup title="Flight Data" icon={<MdAirplanemodeActive />}>
            <Input multiline />
          </InputGroup>
          <InputGroup title="Package" icon={<MdPeople />}>
            <Input multiline />
          </InputGroup>
          <InputGroup title="Support" icon={<MdGraphicEq />}>
            <Input multiline />
          </InputGroup>
          <InputGroup title="Configuration" icon={<MdBuild />}>
            <Input multiline />
          </InputGroup>
          <InputGroup title="Delivery" icon={<MdFlare />}>
            <Input multiline />
          </InputGroup>
          <InputGroup title="Navigation" icon={<MdMyLocation />}>
            <Input multiline />
          </InputGroup>
        </GridItem>
      </Grid>
    </Page>
  );
}
