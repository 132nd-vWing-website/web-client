import {
  MdFlightLand,
  MdFlightTakeoff,
  MdHelpOutline,
  MdMyLocation,
  MdAirplanemodeActive,
  MdPeople,
  MdBuild,
  MdFlare,
  MdGraphicEq,
} from 'react-icons/md';
import { Grid, GridItem } from 'styled-grid-component';
import React, { useContext } from 'react';
import { FiEdit } from 'react-icons/fi';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input, { InputGroup } from '../ui/Input';
import { FlightplanContext } from './FlightplanContext';
import AirfieldSelector from '../ui/Autocomplete/AirfieldSelector';
import Page from '../ui/Page';
import Form from '../ui/Form';
import FlightData from '../ui/Table/FlightData';
import PackageData from '../ui/datagrid/PackageData';

import connectHtmlElementValueToObject from '../helpers/connectHtmlElementValueToObject';

// Dummy data - Should be provided from API via hooks
import airports from './airfields.json';

const PageIngress = styled.div`
  margin-bottom: 1em;
`;

export default function Flightplanner({ match }) {
  const { flightplan, setFlightplan, setTaskingId } = useContext(FlightplanContext);

  // if (match.params.id) setTaskingId(match.params.id);

  const handleChange = (e) => {
    const change = connectHtmlElementValueToObject(e.target.name, e.target.value, flightplan);
    setFlightplan((prev) => ({ ...prev, ...change }));
  };

  return (
    <Page title='Flightplan'>
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
          Flight plan is to be submitted for approval a minimum of 2 hours prior to tasking takeoff
          time!
        </b>
        <hr />
      </PageIngress>
      <Grid width='100%' templateColumns='repeat(6, 1fr)' gap='10px' autoRows='minmax(100px, auto)'>
        <GridItem column='1 / 7' row='1'>
          <Form title='Package' icon={<MdPeople />}>
            <PackageData name='package' onChange={handleChange} value={flightplan.package} />
          </Form>
          <Form title='Mission Data' icon={<FiEdit />}>
            <Input onChange={handleChange} name='flightDate' label='Flight Date:' />
            <Input onChange={handleChange} name='taskNumber' label='Task #:' placeholder='TR2222' />
            <Input onChange={handleChange} name='tasking' label='Tasking:' />
            <Input onChange={handleChange} name='packageName' label='Package:' />
            <Input onChange={handleChange} name='callsign' label='Callsign:' />
            <Input onChange={handleChange} name='aircraft' label='Aircraft:' />
            <Input
              onChange={handleChange}
              name='missionObjective'
              label='Mission Objective:'
              multiline
            />
          </Form>
        </GridItem>
        <GridItem column='1 / 3' row='2'>
          <Form title='Departure' icon={<MdFlightTakeoff />}>
            <AirfieldSelector
              onChange={handleChange}
              name='depAirfield'
              label='Airfield:'
              data={airports}
              placeholder='Type to search...'
            />
            <Input
              onChange={handleChange}
              name='depAirfield.af_tcn'
              label='TCN:'
              value={flightplan.hasOwnProperty('depAirfield') ? flightplan.depAirfield.af_tcn : ''}
            />
            <Input
              onChange={handleChange}
              name='depAirfield.af_gnd'
              label='GND:'
              value={flightplan.hasOwnProperty('depAirfield') ? flightplan.depAirfield.af_gnd : ''}
            />
            <Input
              onChange={handleChange}
              name='depAirfield.af_twr'
              label='TWR:'
              value={flightplan.hasOwnProperty('depAirfield') ? flightplan.depAirfield.af_twr : ''}
            />
            <Input
              onChange={handleChange}
              name='depAirfield.af_rwy'
              label='RWY:'
              value={flightplan.hasOwnProperty('depAirfield') ? flightplan.depAirfield.af_rwy : ''}
            />
            <Input
              onChange={handleChange}
              name='depAirfield.af_ils'
              label='ILS:'
              value={flightplan.hasOwnProperty('depAirfield') ? flightplan.depAirfield.af_ils : ''}
            />
            <Input
              onChange={handleChange}
              name='depAirfield.af_elev'
              label='ELEV:'
              value={flightplan.hasOwnProperty('depAirfield') ? flightplan.depAirfield.af_elev : ''}
            />
          </Form>
        </GridItem>
        <GridItem column='3 / 5' row='2'>
          <Form title='Arrival' icon={<MdFlightLand />}>
            <AirfieldSelector
              onChange={handleChange}
              name='arrAirfield'
              label='Airfield:'
              data={airports}
              placeholder='Type to search...'
            />
            <Input
              onChange={handleChange}
              name='arrAirfield.af_tcn'
              label='TCN:'
              value={flightplan.hasOwnProperty('arrAirfield') ? flightplan.arrAirfield.af_tcn : ''}
            />
            <Input
              onChange={handleChange}
              name='arrAirfield.af_gnd'
              label='GND:'
              value={flightplan.hasOwnProperty('arrAirfield') ? flightplan.arrAirfield.af_gnd : ''}
            />
            <Input
              onChange={handleChange}
              name='arrAirfield.af_twr'
              label='TWR:'
              value={flightplan.hasOwnProperty('arrAirfield') ? flightplan.arrAirfield.af_twr : ''}
            />
            <Input
              onChange={handleChange}
              name='arrAirfield.af_rwy'
              label='RWY:'
              value={flightplan.hasOwnProperty('arrAirfield') ? flightplan.arrAirfield.af_rwy : ''}
            />
            <Input
              onChange={handleChange}
              name='arrAirfield.af_ils'
              label='ILS:'
              value={flightplan.hasOwnProperty('arrAirfield') ? flightplan.arrAirfield.af_ils : ''}
            />
            <Input
              onChange={handleChange}
              name='arrAirfield.af_elev'
              label='ELEV:'
              value={flightplan.hasOwnProperty('arrAirfield') ? flightplan.arrAirfield.af_elev : ''}
            />
          </Form>
        </GridItem>
        <GridItem column='5 / 7' row='2'>
          <Form title='Alternate' icon={<MdHelpOutline />}>
            <AirfieldSelector
              onChange={handleChange}
              name='altAirfield'
              label='Airfield:'
              data={airports}
              placeholder='Type to search...'
            />
            <Input
              onChange={handleChange}
              name='altAirfield.af_tcn'
              label='TCN:'
              value={flightplan.hasOwnProperty('altAirfield') ? flightplan.altAirfield.af_tcn : ''}
            />
            <Input
              onChange={handleChange}
              name='altAirfield.af_gnd'
              label='GND:'
              value={flightplan.hasOwnProperty('altAirfield') ? flightplan.altAirfield.af_gnd : ''}
            />
            <Input
              onChange={handleChange}
              name='altAirfield.af_twr'
              label='TWR:'
              value={flightplan.hasOwnProperty('altAirfield') ? flightplan.altAirfield.af_twr : ''}
            />
            <Input
              onChange={handleChange}
              name='altAirfield.af_rwy'
              label='RWY:'
              value={flightplan.hasOwnProperty('altAirfield') ? flightplan.altAirfield.af_rwy : ''}
            />
            <Input
              onChange={handleChange}
              name='altAirfield.af_ils'
              label='ILS:'
              value={flightplan.hasOwnProperty('altAirfield') ? flightplan.altAirfield.af_ils : ''}
            />
            <Input
              onChange={handleChange}
              name='altAirfield.af_elev'
              label='ELEV:'
              value={flightplan.hasOwnProperty('altAirfield') ? flightplan.altAirfield.af_elev : ''}
            />
          </Form>
        </GridItem>
        <GridItem column='1 / 7' row='3'>
          <Form title='Enroute Intentions' icon={<FiEdit />}>
            <Input multiline onChange={handleChange} name='enr' />
          </Form>
        </GridItem>
        <GridItem column='1 / 7' row='4'>
          <Form title='Flight Data' icon={<MdAirplanemodeActive />}>
            <FlightData onChange={handleChange} name='flight' value={flightplan.flight} />
          </Form>
          <Form title='Package' icon={<MdPeople />}>
            <Input multiline />
          </Form>
          <Form title='Support' icon={<MdGraphicEq />}>
            <Input multiline />
          </Form>
          <Form title='Configuration' icon={<MdBuild />}>
            <Input multiline />
          </Form>
          <Form title='Delivery' icon={<MdFlare />}>
            <Input multiline />
          </Form>
          <Form title='Navigation' icon={<MdMyLocation />}>
            <Input multiline />
          </Form>
        </GridItem>
      </Grid>
    </Page>
  );
}

Flightplanner.propTypes = {
  flightplan: PropTypes.array,
};

Flightplanner.defaultProps = {
  flightplan: [],
};
