import React, { useContext } from 'react';
import { MissionDataContext } from '../../../contexts/MissionData';
import { Table, Tbody, Td, Th, Tr } from '../../styled/Table';

export default function WeatherData() {
  const { missionData, setMissionData } = useContext(MissionDataContext);
  const { element } = missionData;

  const handleElementChange = (e) => {
    const { key } = e.target.dataset;
    element[key] = { ...element[key], ...{ [e.target.name]: e.target.value } };
    setMissionData((prev) => ({ ...prev, element }));
  };

  // Updates all wingmen if FL's tacan gets updated
  // const updateTacan = (e) => {
  //   const { key } = e.target.dataset;
  //   const { element } = missionData;
  //   element[key] = { ...element[key], ...{ [e.target.name]: e.target.value } };
  //   setMissionData((prev) => ({ ...prev, ...element }));
  // };

  const elements = missionData.element.map((el, index) => (
    <Tr key={index}>
      <Td
        input
        name='pilot'
        value={el.pilot}
        placeholder='Callsign...'
        onChange={handleElementChange}
        data-key={index}
      />
      <Td
        input
        name='tcn'
        value={el.tcn}
        placeholder='Callsign...'
        onChange={handleElementChange}
        data-key={index}
      />
      <Td
        input
        name='laser'
        value={el.laser}
        placeholder='Callsign...'
        onChange={handleElementChange}
        data-key={index}
      />
      <Td
        input
        name='mode'
        value={el.mode}
        placeholder='Callsign...'
        onChange={handleElementChange}
        data-key={index}
      />
    </Tr>
  ));

  return (
    <React.Fragment>
      <Table>
        <thead>
          <Tr>
            <Th>Pilot</Th>
            <Th>TCN</Th>
            <Th>LASER</Th>
            <Th>MODE-C</Th>
          </Tr>
        </thead>
        <Tbody>{elements}</Tbody>
      </Table>
    </React.Fragment>
  );
}
