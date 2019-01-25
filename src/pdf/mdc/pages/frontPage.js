import pdfMake from 'pdfmake/build/pdfmake';
import Bahnschrift from '../../fonts/bahnschrift';

/** MDC FRONTPAGE */
const frontPage = {
  title: 'MDC Frontpage',
};

/** Input form definition (parsed by React) */
frontPage.form = [
  {
    label: 'Mission Number',
    type: 'input',
    name: 'missionNumber',
  },
  {
    label: 'Callsign',
    type: 'input',
    name: 'callsign',
  },
];

/** DEFAULTS */
pdfMake.vfs = { ...Bahnschrift };

const colors = {
  white: '#ffffff',
  black: '#000000',
  darkBlue: '#44546a',
};

const styles = {
  pageHeader: {
    alignment: 'center',
    fillColor: colors.darkBlue,
    color: colors.white,
  },
  tableHeader: {
    alignment: 'center',
    fillColor: colors.black,
    color: colors.white,
  },
  default: {
    alignment: 'center',
  },
};

frontPage.colors = colors;
frontPage.styles = styles;

/**
 * Page Header
 * @param {string} missionNumber - Mission Number
 * @example
 * frontPage.pageHeader({ pageNumber: 1, missionNumber: 'TR1234' });
 * @retuns {object} Returns a makePDF table definition
 */
frontPage.pageHeader = ({ pageNumber, missionNumber }) => ({
  table: {
    widths: [60, '*', 50, 60],
    body: [
      [
        { text: `PAGE #${pageNumber}`, style: styles.pageHeader },
        { text: 'GENERAL INFORMATION', style: styles.pageHeader },
        { text: 'MSN NR:', style: styles.pageHeader },
        { text: missionNumber, style: styles.pageHeader },
      ],
    ],
  },
});

/**
 * Generates a sub-header for the 494th MDC
 * @param {string} callsign - flight callsign, i.e. 'FALCON-2'
 * @param {string} packageName - package name, i.e. 'ALHPA'
 * @param {string} atis - ATIS Weather information
 * @example
 * frontPage.flightinfoShort({ callsign: 'Mavrick', packageName: 'Alpha', atis: 'UNKN'})
 */
frontPage.flightinfoShort = ({ callsign, packageName, atis }) => ({
  table: {
    widths: [60, '*', 60, '*'],
    body: [
      [
        { text: 'CALLSIGN:', style: styles.tableHeader },
        { text: callsign.toUpperCase(), style: styles.default },
        { text: 'PACKAGE:', style: styles.tableHeader },
        { text: packageName.toUpperCase(), style: styles.default },
      ],
      [
        { text: 'ATIS:', style: styles.tableHeader },
        {
          text: atis.toUpperCase(),
          style: styles.default,
          colSpan: 3,
        },
      ],
    ],
  },
});

/**
 * Airfield information
 * @param {array} airfields - Data for each airfield
 * @example
 * mutirole.airfieldInfo({label, icao, tcn, gnd, twr, elev, rwy, ils})
 */
frontPage.airfieldInfo = (airfields) => {
  const td = {
    table: {
      widths: ['*', '*', '*', '*', '*', '*', '*', '*'],
      body: [
        [
          {
            text: '',
            style: styles.tableHeader,
          },
          { text: 'AIRBASE', style: styles.tableHeader },
          { text: 'TCN', style: styles.tableHeader },
          { text: 'GND', style: styles.tableHeader },
          { text: 'TWR', style: styles.tableHeader },
          { text: 'ELEV', style: styles.tableHeader },
          { text: 'RWY', style: styles.tableHeader },
          { text: 'ILS', style: styles.tableHeader },
        ],
      ],
    },
  };

  airfields.forEach((field) => {
    td.table.body.push([
      { text: field.label.toUpperCase(), style: styles.tableHeader },
      { text: field.icao.toUpperCase(), style: styles.default },
      { text: field.tcn, style: styles.default },
      { text: field.gnd, style: styles.default },
      { text: field.twr, style: styles.default },
      { text: field.elev, style: styles.default },
      { text: field.rwy, style: styles.default },
      { text: field.ils, style: styles.default },
    ]);
  });
  return td;
};

/** Flight Information
 * @param {array} flights - Data for each flight
 */
frontPage.flightInfo = (flights) => {
  const td = {
    table: {
      widths: ['*', '*', '*', '*', '*', '*', '*', '*'],
      body: [
        [
          {
            text: '',
            style: styles.tableHeader,
          },
          { text: 'PILOTS', colSpan: 2, style: styles.tableHeader },
          {},
          { text: 'TCN', style: styles.tableHeader },
          { text: 'LASER', style: styles.tableHeader },
          { text: 'MODE 2/3', style: styles.tableHeader },
          { text: '', colSpan: 2, style: styles.tableHeader },
        ],
      ],
    },
  };

  flights.forEach((flight, index) => {
    td.table.body.push([
      { text: `#${index}`, style: styles.tableHeader },
      { text: flight.pilot.toUpperCase(), colSpan: 2, style: styles.default },
      {},
      { text: flight.tcn, style: styles.default },
      { text: flight.laser, style: styles.default },
      { text: flight.mode, style: styles.default },
      { text: '', colSpan: 2, style: styles.tableHeader },
    ]);
  });
  return td;
};

/** Package Information
 * @param {array} packageInfo - Data for the package
 */
frontPage.packageInfo = (packageInfo) => {
  const td = {
    table: {
      widths: ['*', '*', '*', '*', '*', '*', '*', '*'],
      body: [
        [
          {
            text: 'PACKAGE',
            colSpan: 2,
            style: styles.tableHeader,
          },
          {},
          { text: 'A/C', style: styles.tableHeader },
          { text: 'UHF', style: styles.tableHeader },
          { text: 'VHF/DL', style: styles.tableHeader },
          { text: 'TCN', style: styles.tableHeader },
          { text: 'TASKING', colSpan: 2, style: styles.tableHeader },
        ],
      ],
    },
  };

  packageInfo.forEach((flight) => {
    td.table.body.push([
      { text: flight.callsign.toUpperCase(), colSpan: 2, style: styles.default },
      {},
      { text: `${flight.numberOfAC} x ${flight.ACtype}`.toUpperCase(), style: styles.default },
      { text: flight.uhf, style: styles.default },
      { text: flight.vhf, style: styles.default },
      { text: flight.tcn, style: styles.default },
      { text: flight.tasking.toUpperCase(), colSpan: 2, style: styles.default },
    ]);
  });

  return td;
};

/** Short version of the Flight Plan
 * @param {array} flightplan - Data for the flightplan
 */
frontPage.flightplanShort = (flightplan) => {
  const td = {
    layout: {
      fillColor: function zebraCells(rowIndex) {
        return rowIndex % 2 === 0 ? '#CCCCCC' : null;
      },
    },
    table: {
      widths: [30, '*', '*', '*', '*', '*', '*', '*', '*'],
      body: [
        [
          {
            text: 'FLIGHTPLAN',
            colSpan: 9,
            style: styles.tableHeader,
          },
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
        ],
        [
          { text: 'STPT', style: styles.tableHeader },
          { text: 'NAME', colSpan: 2, style: styles.tableHeader },
          {},
          { text: 'TOS', style: styles.tableHeader },
          { text: 'HDG', style: styles.tableHeader },
          { text: 'DIST', style: styles.tableHeader },
          { text: 'M/GS', style: styles.tableHeader },
          { text: 'ALT', style: styles.tableHeader },
          { text: 'ACTION', style: styles.tableHeader },
        ],
      ],
    },
  };

  flightplan.forEach((steerpt, index) => {
    td.table.body.push([
      { text: index, style: styles.default },
      { text: steerpt.name, colSpan: 2, style: styles.default },
      {},
      { text: steerpt.tos, style: styles.default },
      { text: steerpt.hdg, style: styles.default },
      { text: steerpt.dist, style: styles.default },
      { text: steerpt.gs, style: styles.default },
      { text: steerpt.alt, style: styles.default },
      { text: steerpt.action, style: styles.default },
    ]);
  });

  return td;
};

/** Sequences Information
 * @param {array} sequences - Steerpoint sequences
 */
frontPage.sequenceShort = (sequences) => {
  const collection = [];
  const td = {
    table: {
      widths: [30, '*', '*', '*', '*', '*', '*', '*', '*'],
      body: [],
    },
  };

  sequences.forEach((seq, index) => {
    collection.push(
      { text: `SEQ${index + 1}`, style: styles.tableHeader },
      { text: seq.sequence, colSpan: 2, style: styles.default },
      {},
    );
  });

  td.table.body.push(collection);
  return td;
};

/** Presets Information
 * @param {array} presets - Radio presets
 */
frontPage.presetsShort = (presets) => {
  const td = {
    table: {
      widths: ['*', '*', '*', '*', '*', '*', '*', '*'],
      body: [[], [], [], []],
    },
  };

  let n = 0;
  presets.forEach((preset) => {
    td.table.body[n].push(
      { text: preset.label, style: styles.tableHeader },
      { text: preset.preset, style: styles.default },
    );
    if (n === 3) {
      n = 0;
    } else {
      n += 1;
    }
  });
  return td;
};

/**
 * MDC frontPage for the Multirole Template
 * @param {object} missionData - Mission data structure, see multirole.demo.js
 */
frontPage.create = ({
  missionNumber,
  callsign,
  element,
  atis,
  airfieldInfo,
  navSequences,
  navPoints,
  radioPresets,
  packageName,
  packageMembers,
}) => {
  const pageNumber = 1;

  const pageHeader = frontPage.pageHeader({ pageNumber, missionNumber });
  const flightinfoShort = frontPage.flightinfoShort({ callsign, packageName, atis });
  const airfieldList = frontPage.airfieldInfo(airfieldInfo);
  const flightInfo = frontPage.flightInfo(element);
  const packageInfo = frontPage.packageInfo(packageMembers);
  const flightplanShort = frontPage.flightplanShort(navPoints);
  const sequenceShort = frontPage.sequenceShort(navSequences);
  const presetsShort = frontPage.presetsShort(radioPresets);

  const content = [
    pageHeader,
    flightinfoShort,
    airfieldList,
    flightInfo,
    packageInfo,
    flightplanShort,
    sequenceShort,
    presetsShort,
  ];

  return content;
};

export default frontPage;