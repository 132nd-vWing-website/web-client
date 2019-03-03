// import moment from 'moment';
import pdfMake from 'pdfmake/build/pdfmake';
// import { metersToNautical, msToKnots, metersToAltitude } from '../../../utils/utility';
import { DDtoDMS } from '../../../utils/utility';

import { font, colors, styles, pageHeader } from './config';

/**
 * Standard 132nd MDC Navlist
 * @namespace navList - MDC Frontpage Definition
 * @property {string} navList.title - Human-readable page name
 * @property {bool} navList.allowMultiple - Will allow multiple instances of the
 */
const navList = {
  title: 'Standard - Navpoints',
};

/** DEFAULTS */
pdfMake.vfs = { ...font };

navList.colors = colors;
navList.styles = styles;

navList.pageHeader = pageHeader;

/** Short version of the Flight Plan
 * @param {array} flightplan - Data for the flightplan
 */
navList.flightPlan = (flightplan) => {
  const plan = flightplan.slice(0);
  const minRows = 33;

  const rowStyle = Object.assign({}, styles.default);
  rowStyle.fontSize = 15;

  const td = {
    layout: {
      fillColor: function zebraCells(rowIndex) {
        return rowIndex % 2 === 0 ? '#fffacd' : null;
      },
    },
    table: {
      widths: [30, '*', '*', 70, 70, 55, '*'],
      body: [
        [
          {
            text: 'FLIGHTPLAN',
            colSpan: 7,
            style: styles.tableHeader,
          },
          {},
          {},
          {},
          {},
          {},
          {},
        ],
        [
          { text: 'STPT', style: styles.tableHeader },
          { text: 'ACTION', style: styles.tableHeader },
          { text: 'NAME', style: styles.tableHeader },
          { text: 'LAT', style: styles.tableHeader },
          { text: 'LON', style: styles.tableHeader },
          { text: 'MIN.FUEL', style: styles.tableHeader },
          { text: 'FORM', style: styles.tableHeader },
        ],
      ],
    },
  };

  // Pad with empty rows until we have 20 rows
  do {
    plan.push({
      type: 'feature',
      geometry: {
        coordinates: [0, 0, 0],
        type: 'Point',
      },
      properties: {
        name: '-',
        tos: 0,
        hdg: 0,
        dist: 0, // meters
        gs: 0, // meters pr. second
        alt: 0,
        action: '-',
      },
    });
  } while (plan.length < minRows);

  // Add rows for all waypoints, limited to minRows value
  plan.slice(0, minRows).forEach((feature, index) => {
    const lat = DDtoDMS(feature.geometry.coordinates[1]);
    const lon = DDtoDMS(feature.geometry.coordinates[0]);

    const limit = 12;
    const name = feature.properties.name.substring(0, limit);

    const action = feature.properties.action || '-';

    td.table.body.push([
      { text: index, style: rowStyle },
      { text: action, style: rowStyle },
      { text: name, style: rowStyle },
      { text: lat, style: rowStyle },
      { text: lon, style: rowStyle },
      { text: '-', style: rowStyle },
      { text: '-', style: rowStyle },
    ]);
  });

  return td;
};

/**
 * MDC frontPage for the Multirole Template
 * @param {object} missionData - Mission data structure, see default.data.js
 */
navList.create = ({ missionNumber, navPoints }) => {
  const pageNumber = 999;

  const header = navList.pageHeader({ pageNumber, missionNumber, title: 'NAVIGATION' });
  const flightPlan = navList.flightPlan(navPoints);

  const content = [header, flightPlan];

  return content;
};

export default navList;
