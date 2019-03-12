// Color Definitions
const black = '#000000';
const white = '#ffffff';

// Color Object
const colors = {
  black,
  white,
  primary: {
    color: white,
    background: '#1890ff',
    border: '#1890ff',
    highlight: {
      color: white,
      background: '#40a9ff',
      border: '#1890ff',
    },
  },
  danger: {
    color: '#f5222d',
    background: '#f5f5f5',
    border: '#d9d9d9',
    highlight: {
      color: white,
      background: '#f5222d',
      border: '#f5222d',
    },
  },
  global: {
    dark: {
      100: '#13171a',
      90: '#242a2e',
      80: '#373d42',
      70: '#50565b',
      60: '#697077',
      50: '#868d95',
      40: '#9fa5ad',
      30: '#b9bfc7',
      20: '#d5d9e0',
      10: '#f2f4f8',
    },
    border: '#dadada',
    readOnly: '#fafafa',
    input: '#ffffc9',
  },
};

export default colors;
