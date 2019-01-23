import pdfMake from 'pdfmake/build/pdfmake';

// Fonts
import fontsBahn from './fonts-bahnschrift';

// Assign fornts
pdfMake.vfs = { ...fontsBahn };

/** PDF templates object  */
const templates = {};

/** MDC Templates object */
export const mdc = {};

/** MDC - 494th Panthers */
mdc.panthers = {};
mdc.panthers.colors = {
  white: '#ffffff',
  black: '#000000',
  darkBlue: '#44546a',
};

mdc.panthers.styles = {
  pageHeader: {
    alignment: 'center',
    fillColor: mdc.panthers.colors.darkBlue,
    color: mdc.panthers.colors.white,
  },
  tableHeader: {
    alignment: 'center',
    fillColor: mdc.panthers.colors.black,
    color: mdc.panthers.colors.white,
  },
  default: {
    alignment: 'center',
  },
};

/**
 * Generates a Page Header for the 494th MDC
 * @param {string} msnNumber - Mission Number
 */
mdc.panthers.pageHeader = ({ msnNumber }) => ({
  table: {
    widths: [60, '*', 50, 60],
    body: [
      [
        { text: 'PAGE #1:', style: mdc.panthers.styles.pageHeader },
        { text: 'GENERAL INFORMATION', style: mdc.panthers.styles.pageHeader },
        { text: 'MSN NR:', style: mdc.panthers.styles.pageHeader },
        { text: msnNumber, style: mdc.panthers.styles.pageHeader },
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
mdc.panthers.flightinfoShort = ({ callsign, packageName, atis }) => ({
  table: {
    widths: [60, '*', 60, '*'],
    body: [
      [
        { text: 'CALLSIGN:', style: mdc.panthers.styles.tableHeader },
        { text: callsign.toUpperCase(), style: mdc.panthers.styles.default },
        { text: 'PACKAGE:', style: mdc.panthers.styles.tableHeader },
        { text: packageName.toUpperCase(), style: mdc.panthers.styles.default },
      ],
      [
        { text: 'ATIS:', style: mdc.panthers.styles.tableHeader },
        {
          text: atis.toUpperCase(),
          style: mdc.panthers.styles.default,
          colSpan: 3,
        },
      ],
    ],
  },
});

/**
 * Generates and returns a pdfMake Object (PDF)
 */
mdc.panthers.makePdf = () => {
  // Document colors & styles
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

  // Document Components
  const pageHeader = mdc.panthers.pageHeader({ msnNumber: 'TR6666' });

  const flightinfoShort = mdc.panthers.flightinfoShort({
    callsign: 'Falcon-2',
    packageName: 'Alpha',
    atis: 'LLRD INFO: E 0655LT RWY30 TL110 360/5KT BLU 30/25 Q1040 NOSIG',
  });

  const airfieldInfo = {
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
        [
          { text: 'DEP', style: styles.tableHeader },
          { text: 'UGKO', style: styles.default },
          { text: '44X', style: styles.default },
          { text: '134.100', style: styles.default },
          { text: '134.200', style: styles.default },
          { text: '68 ft', style: styles.default },
          { text: '08', style: styles.default },
          { text: '109.750', style: styles.default },
        ],
        [
          { text: 'ARR', style: styles.tableHeader },
          { text: 'UGTB', style: styles.default },
          { text: '25X', style: styles.default },
          { text: '138.100', style: styles.default },
          { text: '138.200', style: styles.default },
          { text: '121 ft', style: styles.default },
          { text: '13R', style: styles.default },
          { text: '110.300', style: styles.default },
        ],
        [
          { text: 'ALTN', style: styles.tableHeader },
          { text: 'UGKS', style: styles.default },
          { text: '31X', style: styles.default },
          { text: '132.100', style: styles.default },
          { text: '132.200', style: styles.default },
          { text: '88 ft', style: styles.default },
          { text: '09', style: styles.default },
          { text: '108.900', style: styles.default },
        ],
      ],
    },
  };

  const flightInfo = {
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
        [
          { text: '#1', style: styles.tableHeader },
          { text: 'DEX', colSpan: 2, style: styles.default },
          {},
          { text: '33X', style: styles.default },
          { text: '1680', style: styles.default },
          { text: '4401', style: styles.default },
          { text: '', colSpan: 2, style: styles.tableHeader },
        ],
        [
          { text: '#2', style: styles.tableHeader },
          { text: 'BULLDOG', colSpan: 2, style: styles.default },
          {},
          { text: '96X', style: styles.default },
          { text: '1681', style: styles.default },
          { text: '4402', style: styles.default },
          { text: '', colSpan: 2, style: styles.tableHeader },
        ],
        [
          { text: '#3', style: styles.tableHeader },
          { text: 'NECK', colSpan: 2, style: styles.default },
          {},
          { text: '96X', style: styles.default },
          { text: '1682', style: styles.default },
          { text: '4403', style: styles.default },
          { text: '', colSpan: 2, style: styles.tableHeader },
        ],
        [
          { text: '#4', style: styles.tableHeader },
          { text: 'HAMSTER', colSpan: 2, style: styles.default },
          {},
          { text: '96X', style: styles.default },
          { text: '1683', style: styles.default },
          { text: '4404', style: styles.default },
          { text: '', colSpan: 2, style: styles.tableHeader },
        ],
      ],
    },
  };

  const packageInfo = {
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
        [
          { text: 'FALCON-2', colSpan: 2, style: styles.default },
          {},
          { text: '4 x F/A-18C', style: styles.default },
          { text: '000.000', style: styles.default },
          { text: '000.000', style: styles.default },
          { text: '33X/96X', style: styles.default },
          { text: 'TRAINING', colSpan: 2, style: styles.default },
        ],
        [
          { text: '', colSpan: 2, style: styles.default },
          {},
          { text: '', style: styles.default },
          { text: '', style: styles.default },
          { text: '', style: styles.default },
          { text: '', style: styles.default },
          { text: '-', colSpan: 2, style: styles.default },
        ],
        [
          { text: '', colSpan: 2, style: styles.default },
          {},
          { text: '', style: styles.default },
          { text: '', style: styles.default },
          { text: '', style: styles.default },
          { text: '', style: styles.default },
          { text: '-', colSpan: 2, style: styles.default },
        ],
        [
          { text: '', colSpan: 2, style: styles.default },
          {},
          { text: '', style: styles.default },
          { text: '', style: styles.default },
          { text: '', style: styles.default },
          { text: '', style: styles.default },
          { text: '-', colSpan: 2, style: styles.default },
        ],
        [
          { text: '', colSpan: 2, style: styles.default },
          {},
          { text: '', style: styles.default },
          { text: '', style: styles.default },
          { text: '', style: styles.default },
          { text: '', style: styles.default },
          { text: '-', colSpan: 2, style: styles.default },
        ],
      ],
    },
  };

  const flightplanShort = {
    layout: {
      fillColor: function zebraCells(rowIndex) {
        return rowIndex % 2 === 0 ? '#CCCCCC' : null;
      },
    },
    table: {
      widths: [30, '*', '*', '*', '*', '*', '*', '*'],
      body: [
        [
          {
            text: 'FLIGHTPLAN',
            colSpan: 8,
            style: styles.tableHeader,
          },
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
          { text: 'TOS', style: styles.tableHeader },
          { text: 'HDG', style: styles.tableHeader },
          { text: 'DIST', style: styles.tableHeader },
          { text: 'M/GS', style: styles.tableHeader },
          { text: 'ALT', style: styles.tableHeader },
          { text: 'ACTION', style: styles.tableHeader },
        ],
        [{ text: '1', style: styles.default }, { text: '', colSpan: 2 }, {}, {}, {}, {}, {}, {}],
        [{ text: '2', style: styles.default }, { text: '', colSpan: 2 }, {}, {}, {}, {}, {}, {}],
        [{ text: '3', style: styles.default }, { text: '', colSpan: 2 }, {}, {}, {}, {}, {}, {}],
        [{ text: '4', style: styles.default }, { text: '', colSpan: 2 }, {}, {}, {}, {}, {}, {}],
        [{ text: '5', style: styles.default }, { text: '', colSpan: 2 }, {}, {}, {}, {}, {}, {}],
        [{ text: '6', style: styles.default }, { text: '', colSpan: 2 }, {}, {}, {}, {}, {}, {}],
        [{ text: '7', style: styles.default }, { text: '', colSpan: 2 }, {}, {}, {}, {}, {}, {}],
        [{ text: '8', style: styles.default }, { text: '', colSpan: 2 }, {}, {}, {}, {}, {}, {}],
        [{ text: '9', style: styles.default }, { text: '', colSpan: 2 }, {}, {}, {}, {}, {}, {}],
        [{ text: '10', style: styles.default }, { text: '', colSpan: 2 }, {}, {}, {}, {}, {}, {}],
        [{ text: '11', style: styles.default }, { text: '', colSpan: 2 }, {}, {}, {}, {}, {}, {}],
        [{ text: '12', style: styles.default }, { text: '', colSpan: 2 }, {}, {}, {}, {}, {}, {}],
        [{ text: '13', style: styles.default }, { text: '', colSpan: 2 }, {}, {}, {}, {}, {}, {}],
        [{ text: '14', style: styles.default }, { text: '', colSpan: 2 }, {}, {}, {}, {}, {}, {}],
        [{ text: '15', style: styles.default }, { text: '', colSpan: 2 }, {}, {}, {}, {}, {}, {}],
        [{ text: '16', style: styles.default }, { text: '', colSpan: 2 }, {}, {}, {}, {}, {}, {}],
        [{ text: '17', style: styles.default }, { text: '', colSpan: 2 }, {}, {}, {}, {}, {}, {}],
        [{ text: '18', style: styles.default }, { text: '', colSpan: 2 }, {}, {}, {}, {}, {}, {}],
        [{ text: '19', style: styles.default }, { text: '', colSpan: 2 }, {}, {}, {}, {}, {}, {}],
        [{ text: '20', style: styles.default }, { text: '', colSpan: 2 }, {}, {}, {}, {}, {}, {}],
      ],
    },
  };

  const sequenceShort = {
    table: {
      widths: [30, '*', '*', '*', '*', '*', '*', '*', '*'],
      body: [
        [
          { text: 'SEQ1:', style: styles.tableHeader },
          { text: '0-1-2-3-4-5-6-7-8-9-10', colSpan: 2, style: styles.default },
          {},
          { text: 'SEQ2:', style: styles.tableHeader },
          { text: '0-1-2-3-4-5-6-7-8-9-10', colSpan: 2, style: styles.default },
          {},
          { text: 'SEQ3:', style: styles.tableHeader },
          { text: '0-1-2-3-4-5-6-7-8-9-10', colSpan: 2, style: styles.default },
          {},
        ],
      ],
    },
  };

  const presetsShort = {
    table: {
      widths: ['*', '*', '*', '*', '*', '*', '*', '*'],
      body: [
        [
          { text: 'INT PRI', style: styles.tableHeader },
          { text: 'PRI2', style: styles.default },
          { text: 'APP:', style: styles.tableHeader },
          { text: '126.900', style: styles.default },
          { text: 'AWACS', style: styles.tableHeader },
          { text: 'AUX4', style: styles.default },
          { text: 'JTAC 1', style: styles.tableHeader },
          { text: '031.000', style: styles.default },
        ],
        [
          { text: 'INT AUX', style: styles.tableHeader },
          { text: '133.500', style: styles.default },
          { text: 'PACKG', style: styles.tableHeader },
          { text: '229.250', style: styles.default },
          { text: 'MAGIC', style: styles.tableHeader },
          { text: 'AUX5', style: styles.default },
          { text: 'JTAC 2', style: styles.tableHeader },
          { text: '666.000', style: styles.default },
        ],
        [
          { text: 'GND', style: styles.tableHeader },
          { text: 'AUX1', style: styles.default },
          { text: 'TANK 1', style: styles.tableHeader },
          { text: 'PRI7', style: styles.default },
          { text: 'OVRLRD', style: styles.tableHeader },
          { text: 'AUX6', style: styles.default },
          { text: 'REPORT', style: styles.tableHeader },
          { text: '--', style: styles.default },
        ],
        [
          { text: 'TWR:', style: styles.tableHeader },
          { text: 'AUX2', style: styles.default },
          { text: 'TANK 2', style: styles.tableHeader },
          { text: 'PRI8', style: styles.default },
          { text: 'CSAR', style: styles.tableHeader },
          { text: '140.250', style: styles.default },
          { text: 'SPARE', style: styles.tableHeader },
          { text: '--', style: styles.default },
        ],
      ],
    },
  };

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

templates.mdc = mdc;
export default templates;
