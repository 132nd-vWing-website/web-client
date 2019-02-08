import { Input } from 'antd';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DDtoDMS, DDtoDDS } from '../../../utils/utility';

export default class CoordinateInput extends Component {
  shouldComponentUpdate(nextProps) {
    const { value } = this;
    if (value !== nextProps.value) {
      return true;
    }

    return false;
  }

  render() {
    const { name, value, onChange, toDMS, toDDS, style, className } = this.props;

    let coord;
    if (toDMS) {
      coord = DDtoDMS(value);
    } else if (toDDS) {
      coord = DDtoDDS(value);
    } else {
      coord = value;
    }

    return (
      <Input name={name} value={coord} onChange={onChange} style={style} className={className} />
    );
  }
}

CoordinateInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  toDMS: PropTypes.bool,
  toDDS: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
};

CoordinateInput.defaultProps = {
  toDMS: true,
  toDDS: false,
  style: {},
  className: '',
};
