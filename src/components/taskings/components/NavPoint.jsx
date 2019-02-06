import { Row, Col, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CoordinateInput from './CoordinateInput';
import { padNumber, metersToNautical } from '../../../utils/utility';

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
    console.log(change, e);
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
      labelCol: { span: 2 },
      wrapperCol: { span: 22 },
    };

    const distNM = Math.round(metersToNautical(dist));

    return (
      <Form.Item style={{ margin: 0 }} label={`#${padNumber(id, 2)}`} {...formItemLayout}>
        <Row gutter={0}>
          <Input.Group compact>
            <Col span={24} md={3}>
              <Input name='name' value={name} onChange={this.handleChange} />
            </Col>
            <Col span={24} md={3}>
              <CoordinateInput
                toDMS
                name='lat'
                value={lat.toString()}
                onChange={this.handleChange}
              />
            </Col>
            <Col span={24} md={3}>
              <CoordinateInput
                toDMS
                name='lon'
                value={lon.toString()}
                onChange={this.handleChange}
              />
            </Col>
            <Col span={24} md={3}>
              <Input name='tos' value={tos} onChange={this.handleChange} />
            </Col>
            <Col span={24} md={2}>
              <Input name='hdg' value={hdg} onChange={this.handleChange} />
            </Col>
            <Col span={24} md={2}>
              <Input name='dist' value={`${distNM}NM`} onChange={this.handleChange} readOnly />
            </Col>
            <Col span={24} md={2}>
              <Input name='gs' value={gs} onChange={this.handleChange} />
            </Col>
            <Col span={24} md={2}>
              <Input name='alt' value={alt} onChange={this.handleChange} />
            </Col>
            <Col span={24} md={4}>
              <Input name='action' value={action} onChange={this.handleChange} />
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
  tos: PropTypes.string.isRequired,
  hdg: PropTypes.string.isRequired,
  dist: PropTypes.number.isRequired,
  gs: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
