import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import API_ROOT from '../../contexts/api-config';
// import defaultData from '../../pdf/mdc/default.data';

export const TaskingsContext = React.createContext({
  taskings: null,
  setTasking: () => null,
  addTasking: () => null,
});

export const TaskingsConsumer = TaskingsContext.Consumer;

export default function TaskingsProvider(props) {
  const { children } = props;

  const [taskings, setTaskings] = useState([]);

  const refreshTaskings = () => {
    axios
      .get(`${API_ROOT}/taskings`)
      .then((res) => setTaskings(res.data))
      .catch(() => setTaskings([]));
  };

  useEffect(() => {
    refreshTaskings();
  }, []);

  const addTasking = (tasking) =>
    axios
      .post(`${API_ROOT}/taskings`, tasking)
      .then((res) => res.data)
      .catch((err) => console.log(err.response.data));

  // TODO: ADD updateTasking(id, data) for updating a record

  return (
    <TaskingsContext.Provider value={{ taskings, refreshTaskings, addTasking }}>
      {children}
    </TaskingsContext.Provider>
  );
}

TaskingsProvider.propTypes = {
  children: PropTypes.object,
};

TaskingsProvider.defaultProps = {
  children: {},
};
