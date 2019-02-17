import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { mdc } from '../pdf/pdfBuilder';
import { findBearing, findCoordDistance } from '../utils/utility';

// import axios from 'axios';
// import API_ROOT from './api-config';

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

export const calculateNavplan = (plan) => {
  const newPlan = [];

  plan.forEach((point, index) => {
    const newPoint = {};
    const lastPoint = newPlan[index - 1];

    // Calculate distance and bearing to point from last
    if (index === 0 || point.lat === 0 || point.lon === 0) {
      newPoint.dist = 0;
      newPoint.hdg = 0;
    } else {
      newPoint.dist = findCoordDistance([lastPoint.lat, lastPoint.lon], [point.lat, point.lon]);
      newPoint.hdg = findBearing([lastPoint.lat, lastPoint.lon], [point.lat, point.lon]);
    }

    // Calculate time of travel (in milliseconds)
    if (index === 0) {
      newPoint.tos = point.tos;
    } else if (newPoint.dist === 0) {
      newPoint.tos = lastPoint.tos;
    } else {
      const startTime = moment(lastPoint.tos); // in UTC milliseconds
      const travelTime = 1000 * (newPoint.dist / point.gs);
      newPoint.tos = startTime + travelTime;
    }

    // Push the new point back to the collection
    newPlan.push(Object.assign({}, point, newPoint));
  });

  return newPlan;
};

export default function MissionDataProvider(props) {
  const { children } = props;

  const [missionData, setMissionData] = useState(null);
  useEffect(() => {
    // set a default mission object
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

  /**
   * Append a GeoJSON point to the nav-plan
   * @param {object} feature - A GeoJSON Feature
   */
  const addGeoPoint = (feature) => {
    const points = Object.assign(missionData.navPoints);
    points.push({
      // make data for new point here!
      id: points.length,
      name: feature.properties.name,
      lat: feature.geometry.coordinates[1],
      lon: feature.geometry.coordinates[0],
      tos: 0,
      hdg: 0,
      dist: 0,
      gs: 180.05556,
      alt: 0,
      action: 'FLY OVER',
    });

    const newPlan = calculateNavplan(points);

    // console.log('addGeoPoint', newPlan);
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
