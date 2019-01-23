import pdfMake from 'pdfmake/build/pdfmake';
import Bahnschrift from '../fonts/bahnschrift';

/** MDC TEMPLATE FOR MULTIROLE AIRCRAFT (F/A-18C) */
const multirole = {};

// DUMMY DATA
const airfieldData = [
  {
    label: 'DEP',
    icao: 'UGKO',
    tcn: '44X',
    gnd: '134.100',
    twr: '134.200',
    elev: '68 ft',
    rwy: '08',
    ils: '109.750',
  },
  {
    label: 'ARR',
    icao: 'UGTB',
    tcn: '25X',
    gnd: '138.100',
    twr: '138.200',
    elev: '121 ft',
    rwy: '13R',
    ils: '110.300',
  },
  {
    label: 'ALTN',
    icao: 'UGKO',
    tcn: '44X',
    gnd: '132.100',
    twr: '132.200',
    elev: '88 ft',
    rwy: '09',
    ils: '108.900',
  },
];

const flightData = [
  {
    pilot: 'DEX',
    tcn: '33X',
    laser: '1680',
    mode: '4401',
  },
  {
    pilot: 'BULLDOG',
    tcn: '96X',
    laser: '1681',
    mode: '4402',
  },
  {
    pilot: 'NECK',
    tcn: '96X',
    laser: '1682',
    mode: '4403',
  },
  {
    pilot: 'HAMSTER',
    tcn: '96X',
    laser: '1683',
    mode: '4404',
  },
];

const packageData = [
  {
    callsign: 'Falcon-2',
    numberOfAC: 4,
    ACtype: 'F/A-18C',
    uhf: '000.000',
    vhf: '000.000',
    tcn: '33X/96X',
    tasking: 'TRAINING',
  },
  {
    callsign: '',
    numberOfAC: 0,
    ACtype: 'N/A',
    uhf: '000.000',
    vhf: '000.000',
    tcn: '',
    tasking: '',
  },
  {
    callsign: '',
    numberOfAC: 0,
    ACtype: 'N/A',
    uhf: '000.000',
    vhf: '000.000',
    tcn: '',
    tasking: '',
  },
  {
    callsign: '',
    numberOfAC: 0,
    ACtype: 'N/A',
    uhf: '000.000',
    vhf: '000.000',
    tcn: '',
    tasking: '',
  },
  {
    callsign: '',
    numberOfAC: 0,
    ACtype: 'N/A',
    uhf: '000.000',
    vhf: '000.000',
    tcn: '',
    tasking: '',
  },
];

const makePlan = () => {
  const lines = 20;
  const collection = [];

  let n = 0;
  while (n !== lines) {
    collection.push({
      name: '',
      tos: '00:00:00Z',
      hdg: '000°',
      dist: '000NM',
      gs: '000KTS',
      alt: 'FL000',
      action: '-',
    });
    n += 1;
  }

  return collection;
};

const sequenceData = [
  { sequence: '1-2-3-4-5-6-7-8-9-10' },
  { sequence: '1-2-3-4-5-6-7-8-9-10' },
  { sequence: '1-2-3-4-5-6-7-8-9-10' },
];

const presetsData = [
  { label: 'INT PRI', preset: 'PRI2' },
  { label: 'INT AUX', preset: '133.500' },
  { label: 'GND', preset: 'AUX1' },
  { label: 'TWR:', preset: 'AUX2' },
  { label: 'APP', preset: '126.900' },
  { label: 'PACKG', preset: '229.250' },
  { label: 'TANK 1', preset: 'PRI7' },
  { label: 'TANK 2', preset: 'PRI8' },
  { label: 'AWACS', preset: 'AUX4' },
  { label: 'MAGIC', preset: 'AUX5' },
  { label: 'OVRLRD', preset: 'AUX6' },
  { label: 'CSAR', preset: '140.250' },
  { label: 'JTAC 1', preset: '031.000' },
  { label: 'JTAC 2', preset: '666.000' },
  { label: 'REPORT', preset: '--' },
  { label: 'SPARE', preset: '--' },
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

multirole.colors = colors;
multirole.styles = styles;

/**
 * COMPONENT: Page Header
 * @param {string} msnNumber - Mission Number
 */
multirole.pageHeader = ({ msnNumber }) => ({
  table: {
    widths: [60, '*', 50, 60],
    body: [
      [
        { text: 'PAGE #1', style: styles.pageHeader },
        { text: 'GENERAL INFORMATION', style: styles.pageHeader },
        { text: 'MSN NR:', style: styles.pageHeader },
        { text: msnNumber, style: styles.pageHeader },
      ],
    ],
  },
});

/**
 * Generates a sub-header for the 494th MDC
 * @param {string} callsign - flight callsign, i.e. 'FALCON-2'
 * @param {string} packageName - package name, i.e. 'ALHPA'
 * @param {string} atis - ATIS Weather information
 */
multirole.flightinfoShort = ({ callsign, packageName, atis }) => ({
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
 */
multirole.airfieldInfo = (airfields) => {
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
multirole.flightInfo = (flights) => {
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

multirole.packageInfo = (packageInfo) => {
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

multirole.flightplanShort = (flightplan) => {
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

multirole.sequenceShort = (sequences) => {
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

multirole.presetsShort = (presets) => {
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
 * Generates and returns a pdfMake Object (PDF)
 */
multirole.makePdf = () => {
  // Page Header
  const pageHeader = multirole.pageHeader({ msnNumber: 'TR6666' });

  // Short flight info
  const flightinfoShort = multirole.flightinfoShort({
    callsign: 'Falcon-2',
    packageName: 'Alpha',
    atis: 'LLRD INFO: E 0655LT RWY30 TL110 360/5KT BLU 30/25 Q1040 NOSIG',
  });

  // Airfields Information
  const airfieldInfo = multirole.airfieldInfo(airfieldData);

  // Flight Information
  const flightInfo = multirole.flightInfo(flightData);

  // Package Information
  const packageInfo = multirole.packageInfo(packageData);

  // Flightplan Short
  const plan = makePlan();
  const flightplanShort = multirole.flightplanShort(plan);

  // Steerpoint Sequence
  const sequenceShort = multirole.sequenceShort(sequenceData);

  const presetsShort = multirole.presetsShort(presetsData);

  // Document Definition
  const template = {
    info: {
      title: 'MDC-494TH-TR9999',
      author: '132nd vWing',
      subject: 'Flight Planning',
    },
    pageSize: 'A4',
    pageMargins: 5,
    defaultStyle: {
      font: 'Bahnschrift',
      fontSize: 11,
    },
    content: [
      pageHeader,
      flightinfoShort,
      airfieldInfo,
      flightInfo,
      packageInfo,
      flightplanShort,
      sequenceShort,
      presetsShort,
    ],
  };

  // Set fonts
  pdfMake.fonts = {
    Bahnschrift: {
      normal: 'Bahnschrift.ttf',
      bold: 'Bahnschrift.ttf',
      italics: 'Bahnschrift.ttf',
      bolditalics: 'Bahnschrift.ttf',
    },
  };

  // Compile and return PDF
  const pdf = pdfMake.createPdf(template);
  return pdf;
};

export default multirole;
