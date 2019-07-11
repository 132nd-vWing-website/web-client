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
import Autocomplete from '../ui/Autocomplete';

import airports from './airfields.json';

const testData = [
  {
    name: 'Paris'
  },
  {
    name: 'Prague'
  },
  {
    name: 'London'
  },
  {
    name: 'Oslo'
  },
]

const PageIngress = styled.div`
  margin-bottom: 1em;
`;

export default function Flightplanner({ match }) {
  const { flightplan, setFlightplan, setTaskingId } = useContext(FlightplanContext);

  // if (match.params.id) setTaskingId(match.params.id);

  const handleChange = (e) => {
    // console.log(e);
    const change = { [e.target.name]: e.target.value };
    setFlightplan((prev) => ({ ...prev, ...change }));
  };

  const handleAutocompleteChange = (e) => {
    console.log({ [e.target.name]: e.target.value })
  }

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
          <InputGroup title="Autocomplete Test" icon={<FiEdit />}>
            <Autocomplete onChange={handleAutocompleteChange} name="depAirfield" label="Airfield:" data={testData} placeholder="Type to search..." />
            <AirfieldSelector onChange={handleAutocompleteChange} name="depAirfield" label="Airfield:" data={airports} placeholder="Type to search..." />
          </InputGroup>
          <InputGroup title="Mission Data" icon={<FiEdit />}>
            <Input onChange={handleChange} name="flightDate" label="Flight Date:" />
            <Input onChange={handleChange} name="taskNumber" label="Task #:" placeholder="TR2222" />
            <Input onChange={handleChange} name="tasking" label="Tasking:" />
            <Input onChange={handleChange} name="packageName" label="Package:" />
            <Input onChange={handleChange} name="callsign" label="Callsign:" />
            <Input onChange={handleChange} name="missionObjective" label="Mission Objective:" multiline />
          </InputGroup>
        </GridItem>
        <GridItem column="1 / 3" row="2">
          <InputGroup title="Departure" icon={<MdFlightTakeoff />}>
            <Input onChange={handleChange} name="depAirfield" label="Airfield:" placeholder="UGKO" />
            <Input onChange={handleChange} name="depTcn" label="TCN:" />
            <Input onChange={handleChange} name="depGnd" label="GND:" />
            <Input onChange={handleChange} name="depTwr" label="TWR:" />
            <Input onChange={handleChange} name="depRwy" label="RWY:" />
            <Input onChange={handleChange} name="depIls" label="ILS:" />
            <Input onChange={handleChange} name="depElev" label="ELEV:" />
          </InputGroup>
        </GridItem>
        <GridItem column="3 / 5" row="2">
          <InputGroup title="Arrival" icon={<MdFlightLand />}>
            <Input onChange={handleChange} name="arrAirfield" label="Airfield:" placeholder="UGKO" />
            <Input onChange={handleChange} name="arrTcn" label="TCN:" />
            <Input onChange={handleChange} name="arrGnd" label="GND:" />
            <Input onChange={handleChange} name="arrTwr" label="TWR:" />
            <Input onChange={handleChange} name="arrRwy" label="RWY:" />
            <Input onChange={handleChange} name="arrIls" label="ILS:" />
            <Input onChange={handleChange} name="arrElev" label="ELEV:" />
          </InputGroup>
        </GridItem>
        <GridItem column="5 / 7" row="2">
          <InputGroup title="Alternate" icon={<MdHelpOutline />}>
            <Input onChange={handleChange} name="altAirfield" label="Airfield:" placeholder="UGKO" />
            <Input onChange={handleChange} name="altTcn" label="TCN:" />
            <Input onChange={handleChange} name="altGnd" label="GND:" />
            <Input onChange={handleChange} name="altTwr" label="TWR:" />
            <Input onChange={handleChange} name="altRwy" label="RWY:" />
            <Input onChange={handleChange} name="altIls" label="ILS:" />
            <Input onChange={handleChange} name="altElev" label="ELEV:" />
          </InputGroup>
        </GridItem>
        <GridItem column="1 / 7" row="3">
          <InputGroup title="Enroute Intentions" icon={<FiEdit />}>
            <Input multiline onChange={handleChange} name="enr" />
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
