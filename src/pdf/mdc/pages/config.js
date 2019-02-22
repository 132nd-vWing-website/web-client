import Bahnschrift from '../../fonts/bahnschrift';

/** DEFAULTS */
export const font = Bahnschrift;

export const colors = {
  white: '#ffffff',
  black: '#000000',
  darkBlue: '#44546a',
};

export const styles = {
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

/**
 * Page Header
 * @param {string} missionNumber - Mission Number
 * @example
 * config.pageHeader({ pageNumber: 1, missionNumber: 'TR1234', title: 'GENERAL INFORMATION' });
 * @retuns {object} Returns a makePDF table definition
 */
export const pageHeader = ({ pageNumber, missionNumber, title }) => ({
  table: {
    widths: [60, '*', 50, 60],
    body: [
      [
        { text: `PAGE #${pageNumber}`, style: styles.pageHeader },
        { text: title, style: styles.pageHeader },
        { text: 'MSN NR:', style: styles.pageHeader },
        { text: missionNumber, style: styles.pageHeader },
      ],
    ],
  },
});

// export default config;
