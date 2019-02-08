import { Row, Col, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import moment from 'moment';
import CoordinateInput from './CoordinateInput';
import { padNumber, metersToNautical, msToKnots } from '../../../utils/utility';

export default class NavPoint extends Component {
  shouldComponentUpdate(nextProps) {
    const { props } = this;
    if (props !== nextProps) {
      return true;
    }

    return false;
  }

  handleChange = (e) => {
    const { id, name, lat, lon, tos, hdg, dist, gs, alt, action, onChange } = this.props;

    const change = { [e.target.name]: e.target.value };
    const newPoint = Object.assign(
      {},
      { id, name, lat, lon, tos, hdg, dist, gs, alt, action },
      change,
    );
    onChange(newPoint);
  };

  render() {
    const { id, name, lat, lon, tos, hdg, dist, gs, alt, action } = this.props;

    const formItemLayout = {
      labelCol: { span: 1 },
      wrapperCol: { span: 23 },
    };

    const timeOnStation = moment(tos).format('HH:mm:ss');
    const bearing = padNumber(Math.round(hdg), 3);
    const distNM = padNumber(Math.round(metersToNautical(dist)), 3);
    const speed = Math.round(msToKnots(gs));

    return (
      <Form.Item style={{ margin: 0 }} label={`#${padNumber(id, 2)}`} {...formItemLayout}>
        <Row gutter={0}>
          <Input.Group compact>
            <Col span={24} md={2}>
              <Input
                className='navpoint-input'
                name='name'
                value={name}
                onChange={this.handleChange}
              />
            </Col>
            <Col span={24} md={2}>
              <CoordinateInput
                className='navpoint-input'
                toDMS
                name='lat'
                value={lat.toString()}
                onChange={this.handleChange}
              />
            </Col>
            <Col span={24} md={2}>
              <CoordinateInput
                className='navpoint-input'
                toDMS
                name='lon'
                value={lon.toString()}
                onChange={this.handleChange}
              />
            </Col>
            <Col span={24} md={2}>
              <Input
                className='navpoint-input'
                name='tos'
                value={timeOnStation}
                onChange={this.handleChange}
                readOnly
              />
            </Col>
            <Col span={24} md={2}>
              <Input
                className='navpoint-input'
                name='hdg'
                value={bearing}
                addonAfter='°'
                onChange={this.handleChange}
                readOnly
              />
            </Col>
            <Col span={24} md={3}>
              <Input
                className='navpoint-input'
                name='dist'
                value={distNM}
                addonAfter='NM'
                onChange={this.handleChange}
                readOnly
              />
            </Col>
            <Col span={24} md={3}>
              <Input
                className='navpoint-input'
                name='gs'
                value={speed}
                addonAfter='KTS'
                onChange={this.handleChange}
              />
            </Col>
            <Col span={24} md={3}>
              <Input
                className='navpoint-input'
                name='alt'
                value={alt}
                addonBefore='FL'
                onChange={this.handleChange}
              />
            </Col>
            <Col span={24} md={3}>
              <Input
                className='navpoint-input'
                name='action'
                value={action}
                onChange={this.handleChange}
              />
            </Col>
          </Input.Group>
        </Row>
      </Form.Item>
    );
  }
}

NavPoint.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  tos: PropTypes.number.isRequired,
  hdg: PropTypes.number.isRequired,
  dist: PropTypes.number.isRequired,
  gs: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
