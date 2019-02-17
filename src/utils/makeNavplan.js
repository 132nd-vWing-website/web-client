import moment from 'moment';
import { findBearing, findCoordDistance } from './utility';

/**
 * Takes an array of GeoJSON features and calculates the distance, bearing and time-on-target between
 * all features by index (i.e. first feature is waypoint 1, second is waypoint 2 etc.)
 * @param {array} features Array of GeoJSON features
 */
const makeNavplan = (features) => {
  const newCollection = [];

  features.forEach((f, index) => {
    const feature = Object.assign(f);
    const prevFeature = newCollection[index - 1];

    const lat = feature.geometry.coordinates[1];
    const lon = feature.geometry.coordinates[0];

    let prevLat;
    let prevLon;

    if (prevFeature) {
      /* eslint prefer-destructuring: 0 */
      prevLat = prevFeature.geometry.coordinates[1];
      prevLon = prevFeature.geometry.coordinates[0];
    }

    // OVERRIDE!! REMOVE LATER!
    if (!feature.properties.gs) feature.properties.gs = 180;

    // Calculate distance and bearing to point from last
    if (index === 0 || lat === 0 || lon === 0) {
      feature.properties.dist = 0;
      feature.properties.hdg = 0;
    } else {
      feature.properties.dist = findCoordDistance([prevLat, prevLon], [lat, lon]);
      feature.properties.hdg = findBearing([prevLat, prevLon], [lat, lon]);
    }

    // Calculate time of travel (in milliseconds)
    if (index === 0) {
      // feature.properties.tos = f.properties.tos;
      feature.properties.tos = 0;
    } else if (feature.properties.dist === 0) {
      feature.properties.tos = prevFeature.properties.tos;
    } else if (feature.properties.gs) {
      // if a GS is provided, we should use that to calcualte our TOS
      const startTime = moment(prevFeature.properties.tos); // in UTC milliseconds
      const travelTime = 1000 * (feature.properties.dist / feature.properties.gs);
      feature.properties.tos = startTime + travelTime;
    } else if (!feature.properties.gs) {
      // TO-DO: We would check if a desired TOS is provided, and then calulate required GS
    }

    // Push the new point back to the collection
    newCollection.push(Object.assign({}, feature));
  });

  return newCollection;
};

export default makeNavplan;
