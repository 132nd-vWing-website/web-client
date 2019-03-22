import Card from 'antd/lib/card';
import 'antd/lib/card/style/css';
import Col from 'antd/lib/col';
import 'antd/lib/col/style/css';
import 'antd/lib/collapse/style/css';
import Row from 'antd/lib/row';
import 'antd/lib/row/style/css';
import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Table, Tbody, Td, Th, Tr } from '../styled/Table';
import { TaskingsContext } from './TaskingsContext';
import { AircraftTypesContext } from '../../contexts/AircraftTypes';
import { AirfieldsContext } from '../../contexts/Airfields';

export default function TaskingList(props) {
  const { taskings } = useContext(TaskingsContext);
  const aircraftTypes = useContext(AircraftTypesContext).types;
  const { airfields } = useContext(AirfieldsContext);

  const [redirect, setRedirect] = useState(null);

  const { match } = props;

  if (redirect) {
    return <Redirect push to={`${match.path}/${redirect}`} />;
  }

  const content = taskings.map((task) => {
    const taskId = task.task_id;
    const msnNo = task.amsndat_msnno;
    const eventId = task.event_id;
    const callsign = task.msnacft_callsign;
    const flightNo = task.msnacft_flightno;
    const type = aircraftTypes.find((el) => el.ac_id.toString() === task.msnacft_type);
    const acNo = task.msnacft_acno;

    const missionData = JSON.parse(task.mission_data);
    const dep = airfields.find((el) => el.airfield_id === missionData.airfields[0].id);
    const arr = airfields.find((el) => el.airfield_id === missionData.airfields[1].id);

    return (
      <Tr key={taskId} onClick={() => setRedirect(taskId)} style={{ cursor: 'pointer' }}>
        <Td center>{taskId}</Td>
        <Td center>{eventId}</Td>
        <Td center>{msnNo}</Td>
        <Td center>{`${callsign}-${flightNo}`}</Td>
        <Td center>{`${acNo} x ${type.ac_type}`}</Td>
        <Td center>{dep ? dep.af_icao : ' - '}</Td>
        <Td center>{arr ? arr.af_icao : ' - '}</Td>
      </Tr>
    );
  });

  return (
    <Card title='Taskings'>
      <Row>
        <Col className='gutter-row' span={24} md={24}>
          <Table>
            <thead>
              <Tr>
                <Th center>#</Th>
                <Th center>EVENT</Th>
                <Th center>MSN NO.</Th>
                <Th center>CALLSIGN</Th>
                <Th center>A/C TYPE</Th>
                <Th center>DEP</Th>
                <Th center>ARR</Th>
              </Tr>
            </thead>
            <Tbody>{content}</Tbody>
          </Table>
        </Col>
      </Row>
    </Card>
  );
}

TaskingList.propTypes = {
  match: PropTypes.object.isRequired,
};
