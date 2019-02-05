import { Col, Form, Input, Row } from 'antd';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Navigation extends Component {
  state = {
    data: null,
  };

  handleNavpointUpdate = (point) => {
    console.log('Navigation - handleNavpointUpdate()', point);
  };

  render() {
    const { missionData } = this.props;
    const points = missionData.navPoints.map((point) => (
      <NavPoint key={point.id} onChange={this.handleNavpointUpdate} {...point} />
    ));

    return (
      <Row gutter={8} className='advanced-form'>
        <Col className='gutter-row' span={24} md={12}>
          <Form layout='horizontal'>{points}</Form>
        </Col>
      </Row>
    );
  }
}

Navigation.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  missionData: PropTypes.object.isRequired,
};

/* NAVPOINT COMPONENT */
const NavPoint = (props) => {
  const { id, name, tos, hdg, dist, gs, alt, action, onChange } = props;

  const handleChange = (e) => {
    const change = { [e.target.name]: e.target.value };
    const newPoint = Object.assign({}, { id, name, tos, hdg, dist, gs, alt, action }, change);
    // onChange(newPoint)
    // console.log(newPoint);
  };

  return (
    <Form.Item style={{ margin: 0 }}>
      <Input.Group compact>
        <Input
          name='name'
          value={name}
          style={{ width: '30%' }}
          addonBefore={`STPT #${id}`}
          onChange={handleChange}
        />
        <Input name='tos' value={tos} style={{ width: '10%' }} onChange={handleChange} />
        <Input name='hdg' value={hdg} style={{ width: '10%' }} onChange={handleChange} />
        <Input name='dist' value={dist} style={{ width: '10%' }} onChange={handleChange} />
        <Input name='gs' value={gs} style={{ width: '10%' }} onChange={handleChange} />
        <Input name='alt' value={alt} style={{ width: '10%' }} onChange={handleChange} />
        <Input name='action' value={action} style={{ width: '20%' }} onChange={handleChange} />
      </Input.Group>
    </Form.Item>
  );
};
