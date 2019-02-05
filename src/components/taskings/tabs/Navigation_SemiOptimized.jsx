import { Col, Form, Input, Row, Button } from 'antd';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Navigation extends Component {
  state = {
    missionData: null,
    navPoints: null,
  };

  componentDidMount() {
    const { missionData } = this.props;
    this.setState({ missionData, navPoints: missionData.navPoints });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const { missionData } = this.state;
  //   const { onUpdate } = this.props;

  //   if (missionData !== prevState.missionData) {
  //     onUpdate(missionData);
  //   }
  // }

  // handleNavpointUpdate = (point) => {
  //   const { missionData } = this.state;

  //   missionData.navPoints[point.id] = point;

  //   this.setState((prevState) => ({
  //     missionData: Object.assign({}, prevState.missionData, missionData),
  //   }));
  // };

  handleNavpointUpdate = (point) => {
    const { navPoints } = this.state;

    navPoints[point.id] = point;

    this.setState(() => ({
      navPoints: [...navPoints],
    }));
  };

  updateMissionObject = () => {
    const { missionData, navPoints } = this.state;
    missionData.navPoints = navPoints;
    
    this.setState((prevState) => ({
      missionData: Object.assign({}, prevState.missionData, missionData),
    }));
  };

  render() {
    // const { missionData } = this.state;
    const { navPoints } = this.state;
    if (!navPoints) return <div>loading...</div>;

    // if (!missionData) return <div>loading...</div>;

    // const points = missionData.navPoints.map((point) => (
    //   <NavPoint key={point.id} onChange={this.handleNavpointUpdate} {...point} />
    // ));

    const points = navPoints.map((point) => (
      <NavPoint key={point.id} onChange={this.handleNavpointUpdate} {...point} />
    ));

    return (
      <React.Fragment>
        <Row gutter={8} className='advanced-form'>
          <Col className='gutter-row' span={24} md={12}>
            <Form layout='horizontal'>{points}</Form>
            <br />
            <Button type='primary' onClick={this.updateMissionObject} block>
              Update Plan
            </Button>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col className='gutter-row' span={24} md={12} />
        </Row>
      </React.Fragment>
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
    onChange(newPoint);
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
