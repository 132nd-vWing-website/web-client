import Input from 'antd/lib/input';
import 'antd/lib/input/style/css';
import Select from 'antd/lib/select';
import 'antd/lib/select/style/css';
import React from 'react';
import PropTypes from 'prop-types';

const { Option } = Select;

export default function PressureConverter(props) {
  const { onCalc, value, unit } = props;

  const units = {
    mbar: {
      label: 'mBar',
      toHgIn(mbar) {
        return (mbar / 33.86389).toFixed(2);
      },
      toMmHg(mbar) {
        return ((mbar / 33.86389) * 25.4).toFixed(2);
      },
    },
    hgin: {
      label: 'hg/in',
      toMbar(hgin) {
        return Math.round(hgin * 33.86389);
      },
      toMmHg(hgin) {
        return (hgin * 25.4).toFixed(2);
      },
    },
    mmhg: {
      label: 'mmHg',
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

  const availableUnits = Object.keys(units).map((u) => (
    <Option key={u} value={u}>
      {units[u].label}
    </Option>
  ));

  const selectAfter = (
    <Select defaultValue={units.mbar.label} style={{ width: 80 }}>
      {availableUnits}
    </Select>
  );

  return <Input addonAfter={selectAfter} defaultValue={value} />;
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
