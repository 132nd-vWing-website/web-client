import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { mdc } from '../pdf/pdfBuilder';
// import axios from 'axios';
// import API_ROOT from './api-config';

/**
 * MissionData Context
 * @array missionData - an Array containing mission data
 * @function setMissionData - updates the current mission data array
 * @function setTaskingID - Sets a database-id for what will be used to populate the mission data array
 */
const MissionDataContext = React.createContext({
  missionData: null,
  setMissionData: () => null,
  setTaskingID: () => null,
});

export const MissionDataConsumer = MissionDataContext.Consumer;

export default function MissionDataProvider(props) {
  const { children } = props;

  const [missionData, setMissionData] = useState(null);
  useEffect(() => {
    // set a default mission object
    console.log('MissionDataProvider:[]');
    setMissionData(mdc.defaultData);
  }, []);

  const [taskingID, setTaskingID] = useState(null);
  useEffect(
    () => {
      // If a taskingID is set, we want to get data from the database, format it and run setMissionData()
      if (taskingID) console.log('...do something');
    },
    [taskingID],
  );

  return (
    <MissionDataContext.Provider value={{ missionData, setMissionData, setTaskingID }}>
      {children}
    </MissionDataContext.Provider>
  );
}

MissionDataProvider.propTypes = {
  children: PropTypes.object,
};

MissionDataProvider.defaultProps = {
  children: {},
};
