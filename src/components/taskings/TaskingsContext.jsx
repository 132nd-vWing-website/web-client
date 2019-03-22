import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import API_ROOT from '../../contexts/api-config';
// import defaultData from '../../pdf/mdc/default.data';

export const TaskingsContext = React.createContext({
  taskings: null,
  setTasking: () => null,
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

  return (
    <TaskingsContext.Provider value={{ taskings, refreshTaskings }}>
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
