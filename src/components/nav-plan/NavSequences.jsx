import React, { useContext } from 'react';
import { MissionDataContext } from '../../contexts/MissionData';
import { Table, Tbody, Th, Tr, Td } from '../styled/Table';

export default function NavPlan() {
  const { missionData, setMissionData } = useContext(MissionDataContext);
  const { navSequences } = missionData;

  const handleChange = (e) => {
    const { key } = e.target.dataset;
    navSequences[key] = { ...navSequences[key], ...{ [e.target.name]: e.target.value } };
    setMissionData((prev) => ({ ...prev, navSequences }));
  };

  let sequences;
  if (missionData || navSequences.length > 0) {
    sequences = navSequences.map((seq, index) => (
      <Td
        center
        input
        key={index}
        value={seq.sequence || '---'}
        onChange={handleChange}
        data-key={index}
        name='sequence'
      />
    ));
  }

  return (
    <Table>
      <thead>
        <Tr>
          <Th center>SEQUENCE 1</Th>
          <Th center>SEQUENCE 2</Th>
          <Th center>SEQUENCE 3</Th>
        </Tr>
      </thead>
      <Tbody>
        <Tr>{sequences}</Tr>
      </Tbody>
    </Table>
  );
}
