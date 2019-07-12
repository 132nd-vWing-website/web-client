import React, { useContext } from 'react';
import { FlightplanContext } from './FlightplanContext';
import styled from 'styled-components';
import { Grid, GridItem } from 'styled-grid-component';
import Collapsible, { CollapsibleGroup } from '../ui/Collapsible';
import Input, { InputGroup } from '../ui/Input';
import Page from '../ui/Page';
import { FiEdit } from "react-icons/fi";
import { MdFlightLand, MdFlightTakeoff, MdHelpOutline, MdMyLocation, MdAirplanemodeActive, MdPeople, MdBuild, MdFlare, MdGraphicEq } from "react-icons/md";
import AirfieldSelector from '../ui/Autocomplete/AirfieldSelector';
import Form from '../ui/Form';

import airports from './airfields.json';

const PageIngress = styled.div`
  margin-bottom: 1em;
`;

export default function Flightplanner({ match }) {
  const { flightplan, setFlightplan, setTaskingId } = useContext(FlightplanContext);

  // if (match.params.id) setTaskingId(match.params.id);

  const handleChange = (e) => {
    const change = { [e.target.name]: e.target.value };
    setFlightplan((prev) => ({ ...prev, ...change }));
  };

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
          <Form title="Autocomplete Test" icon={<FiEdit />}>
            <AirfieldSelector onChange={handleChange} name="depAirfield" label="Airfield:" data={airports} placeholder="Label..." />
            <AirfieldSelector onChange={handleChange} name="depAirfield" data={airports} placeholder="No label..." />
          </Form>
          <Form title="Mission Data" icon={<FiEdit />}>
            <Input onChange={handleChange} name="flightDate" label="Flight Date:" />
            <Input onChange={handleChange} name="taskNumber" label="Task #:" placeholder="TR2222" />
            <Input onChange={handleChange} name="tasking" label="Tasking:" />
            <Input onChange={handleChange} name="packageName" label="Package:" />
            <Input onChange={handleChange} name="callsign" label="Callsign:" />
            <Input onChange={handleChange} name="missionObjective" label="Mission Objective:" multiline />
          </Form>
        </GridItem>
        <GridItem column="1 / 3" row="2">
          <Form title="Departure" icon={<MdFlightTakeoff />}>
            <Input onChange={handleChange} name="depAirfield" label="Airfield:" placeholder="UGKO" />
            <Input onChange={handleChange} name="depTcn" label="TCN:" />
            <Input onChange={handleChange} name="depGnd" label="GND:" />
            <Input onChange={handleChange} name="depTwr" label="TWR:" />
            <Input onChange={handleChange} name="depRwy" label="RWY:" />
            <Input onChange={handleChange} name="depIls" label="ILS:" />
            <Input onChange={handleChange} name="depElev" label="ELEV:" />
          </Form>
        </GridItem>
        <GridItem column="3 / 5" row="2">
          <Form title="Arrival" icon={<MdFlightLand />}>
            <Input onChange={handleChange} name="arrAirfield" label="Airfield:" placeholder="UGKO" />
            <Input onChange={handleChange} name="arrTcn" label="TCN:" />
            <Input onChange={handleChange} name="arrGnd" label="GND:" />
            <Input onChange={handleChange} name="arrTwr" label="TWR:" />
            <Input onChange={handleChange} name="arrRwy" label="RWY:" />
            <Input onChange={handleChange} name="arrIls" label="ILS:" />
            <Input onChange={handleChange} name="arrElev" label="ELEV:" />
          </Form>
        </GridItem>
        <GridItem column="5 / 7" row="2">
          <Form title="Alternate" icon={<MdHelpOutline />}>
            <Input onChange={handleChange} name="altAirfield" label="Airfield:" placeholder="UGKO" />
            <Input onChange={handleChange} name="altTcn" label="TCN:" />
            <Input onChange={handleChange} name="altGnd" label="GND:" />
            <Input onChange={handleChange} name="altTwr" label="TWR:" />
            <Input onChange={handleChange} name="altRwy" label="RWY:" />
            <Input onChange={handleChange} name="altIls" label="ILS:" />
            <Input onChange={handleChange} name="altElev" label="ELEV:" />
          </Form>
        </GridItem>
        <GridItem column="1 / 7" row="3">
          <Form title="Enroute Intentions" icon={<FiEdit />}>
            <Input multiline onChange={handleChange} name="enr" />
          </Form>
        </GridItem>
        <GridItem column="1 / 7" row="4">
          <Form title="Flight Data" icon={<MdAirplanemodeActive />}>
            <Input multiline />
          </Form>
          <Form title="Package" icon={<MdPeople />}>
            <Input multiline />
          </Form>
          <Form title="Support" icon={<MdGraphicEq />}>
            <Input multiline />
          </Form>
          <Form title="Configuration" icon={<MdBuild />}>
            <Input multiline />
          </Form>
          <Form title="Delivery" icon={<MdFlare />}>
            <Input multiline />
          </Form>
          <Form title="Navigation" icon={<MdMyLocation />}>
            <Input multiline />
          </Form>
        </GridItem>
      </Grid>
    </Page>
  );
}
