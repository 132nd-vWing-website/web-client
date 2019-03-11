import React, { useContext } from 'react';
import { Table, TableActions, Th, Tr, Td, Tbody } from '../../styled/Table';
import { MissionDataContext } from '../../../contexts/MissionData';

export default function PackageConfig() {
  const { missionData, setMissionData } = useContext(MissionDataContext);
  const { packageMembers } = missionData;

  const handleChange = (e) => {
    const { key } = e.target.dataset;
    packageMembers[key] = { ...packageMembers[key], ...{ [e.target.name]: e.target.value } };
    setMissionData((prev) => ({ ...prev, packageMembers }));
  };

  const addRow = () => {
    const newPackage = [...packageMembers];

    newPackage.push({
      callsign: '',
      numberOfAC: 0,
      ACtype: 'N/A',
      uhf: '000.000',
      vhf: '000.000',
      tcn: '',
      tasking: '',
    });

    setMissionData((prev) => ({ ...prev, packageMembers: newPackage }));
  };

  const removeRow = () => {
    const newPackage = [...packageMembers];

    // Prevent deleting the last line
    if (newPackage.length < 2) return null;

    newPackage.splice(-1, 1);
    setMissionData((prev) => ({ ...prev, packageMembers: newPackage }));
    return null;
  };

  const elements = packageMembers.map((member, index) => (
    <Tr key={index}>
      <Td
        input
        name='callsign'
        value={member.callsign}
        placeholder='Callsign...'
        onChange={handleChange}
        data-key={index}
      />
      <Td
        name='numberOfAC'
        input
        value={member.numberOfAC}
        placeholder=' - '
        onChange={handleChange}
        data-key={index}
      />
      <Td
        name='ACtype'
        input
        value={member.ACtype}
        placeholder=' - '
        onChange={handleChange}
        data-key={index}
      />
      <Td
        name='uhf'
        input
        value={member.uhf}
        placeholder=' - '
        onChange={handleChange}
        data-key={index}
      />
      <Td
        name='vhf'
        input
        value={member.vhf}
        placeholder=' - '
        onChange={handleChange}
        data-key={index}
      />
      <Td
        name='tcn'
        input
        value={member.tcn}
        placeholder=' -/-Y'
        onChange={handleChange}
        data-key={index}
      />
      <Td
        name='tasking'
        input
        value={member.tasking}
        placeholder=' - '
        onChange={handleChange}
        data-key={index}
      />
    </Tr>
  ));

  return (
    <React.Fragment>
      <Table>
        <thead>
          <Tr>
            <Th>Element</Th>
            <Th>No.</Th>
            <Th>Aircraft</Th>
            <Th>UHF</Th>
            <Th>VHF/DL</Th>
            <Th>TCN</Th>
            <Th>TASKING</Th>
          </Tr>
        </thead>
        <Tbody>{elements}</Tbody>
      </Table>
      <TableActions onAdd={addRow} onRemove={removeRow} />
    </React.Fragment>
  );
}
