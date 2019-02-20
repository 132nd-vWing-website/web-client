import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import defaultData from '../pdf/mdc/default.data';
import makeNavPlan from '../utils/makeNavplan';

/**
 * MissionData Context
 * @array missionData - an Array containing mission data
 * @function setMissionData - updates the current mission data array
 * @function setTaskingID - Sets a database-id for what will be used to populate the mission data array
 */
export const MissionDataContext = React.createContext({
  missionData: null,
  setMissionData: () => null,
  setTaskingID: () => null,
});

export const MissionDataConsumer = MissionDataContext.Consumer;

export default function MissionDataProvider(props) {
  const { children } = props;

  const [missionData, setMissionData] = useState(null);
  useEffect(() => {
    setMissionData(defaultData);
  }, []);

  const [taskingID, setTaskingID] = useState(null);
  useEffect(() => {
    // If a taskingID is set, we want to get data from the database, format it and run setMissionData()
    if (taskingID) console.log('...do something');
  }, [taskingID]);

  /**
   * Append a GeoJSON point to the nav-plan
   * @param {object} feature - A GeoJSON Feature
   */
  const addGeoPoint = (feature) => {
    const features = Object.assign(missionData.navPoints);
    features.push(feature);

    const newPlan = makeNavPlan(features);
    setMissionData((prev) => ({ ...prev, ...{ navPoints: newPlan } }));
  };

  return (
    <MissionDataContext.Provider value={{ missionData, setMissionData, setTaskingID, addGeoPoint }}>
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
