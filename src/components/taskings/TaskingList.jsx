import Card from 'antd/lib/card';
import 'antd/lib/card/style/css';
import Col from 'antd/lib/col';
import 'antd/lib/col/style/css';
import 'antd/lib/collapse/style/css';
import Row from 'antd/lib/row';
import 'antd/lib/row/style/css';
import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { AircraftTypesContext } from '../../contexts/AircraftTypes';
import { AirfieldsContext } from '../../contexts/Airfields';
import defaultData from '../../pdf/mdc/default.data';
import { Table, Tbody, Td, Th, Tr } from '../styled/Table';
import TaskingCard from './TaskingCard';
import { TaskingsContext } from './TaskingsContext';

export default function TaskingList(props) {
  const { taskings, addTasking } = useContext(TaskingsContext);
  const aircraftTypes = useContext(AircraftTypesContext).types;
  const { airfields } = useContext(AirfieldsContext);

  const [redirect, setRedirect] = useState(null);

  const { match } = props;

  if (redirect) {
    return <Redirect push to={`${match.path}/${redirect}`} />;
  }
  const handleAdd = () => {
    const add = addTasking({
      event_id: 0,
      mission_data: defaultData,
      msnacft_callsign: defaultData.callsign,
      amsndat_msnno: defaultData.missionNumber,
    });

    add.then((res) => setRedirect(res.insertId));
  };

  const taskingCards = taskings.map((task) => {
    const taskId = task.task_id;
    return <TaskingCard key={taskId} data={task} onClick={() => setRedirect(taskId)} />;
  });

  return (
    <Card title='Taskings'>
      <Row>
        <Col className='gutter-row' span={24} md={24}>
          <button type='button' onClick={handleAdd}>
            Add New
          </button>
          <hr />
          {taskingCards}
        </Col>
      </Row>
    </Card>
  );
}

TaskingList.propTypes = {
  match: PropTypes.object.isRequired,
};
