import Input from 'antd/lib/input';
import 'antd/lib/input/style/css';
import React from 'react';
import PropTypes from 'prop-types';

export default function PressureConverter(props) {
  const { onCalc, value, unit } = props;

  // const unitsFoo = [
  //   {
  //     name: 'mbar',
  //     convert: [
  //       {
  //         label: 'to hg/in',
  //         calculate(mbar) {
  //           return mbar / 33.8639;
  //         },
  //       },
  //       {
  //         label: 'to mmgh',
  //         calculate(mbar) {
  //           return mbar * 25.4;
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     name: 'hg/in',
  //     convert: [
  //       {
  //         label: 'to hg/in',
  //         calculate(hgin) {
  //           return hgin / 33.8639;
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     name: 'mmhg',
  //     convert: [
  //       {
  //         label: 'to hg/in',
  //         calculate(mmhg) {
  //           return mmhg / 33.8639;
  //         },
  //       },
  //     ],
  //   },
  // ];

  const units = {
    mbar: {
      toHgIn(mbar) {
        return (mbar / 33.86389).toFixed(2);
      },
      toMmHg(mbar) {
        return ((mbar / 33.86389) * 25.4).toFixed(2);
      },
    },
    hgin: {
      toMbar(hgin) {
        return Math.round(hgin * 33.86389);
      },
      toMmHg(hgin) {
        return (hgin * 25.4).toFixed(2);
      },
    },
    mmhg: {
      toMbar(mmhg) {
        return Math.round((mmhg / 25.4) * 33.8639);
      },
      toHgIn(mmhg) {
        return (mmhg / 25.4).toFixed(2);
      },
    },
  };

  // console.log('mbar', units.mbar.toHgIn(1040));
  // console.log('mbar', units.mbar.toMmHg(1040));
  // console.log('hgin', units.hgin.toMbar(30.71));
  // console.log('hgin', units.hgin.toMmHg(30.71));
  // console.log('mmhg', units.mmhg.toMbar(780.06));
  // console.log('mmhg', units.mmhg.toHgIn(780.06));

  //   const convertOptions = {
  //     const options = units.map((unit) => <Option value=".com">.com</Option>)
  //     return(
  //     <Select defaultValue = ".com" style = {{ width: 80 }} >
  //     <Option value=".com">.com</Option>
  //     <Option value=".jp">.jp</Option>
  //     <Option value=".cn">.cn</Option>
  //     <Option value=".org">.org</Option>
  //     </Select >
  //   )
  // };

  return <p>{`${value}${unit}`}</p>;
}

PressureConverter.propTypes = {
  onCalc: PropTypes.func,
  value: PropTypes.string,
  unit: PropTypes.string,
};

PressureConverter.defaultProps = {
  onCalc: () => null,
  value: '1013',
  unit: 'mbar',
};
