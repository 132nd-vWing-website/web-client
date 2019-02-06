import { Col, Form, Input, Row } from 'antd';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavPoint from '../components/NavPoint';
import { findCoordDistance, findBearing } from '../../../utils/utility';

export default class Navigation extends Component {
  state = {
    missionData: null,
  };

  componentDidMount() {
    const { missionData } = this.props;
    this.setState({ missionData });
  }

  componentDidUpdate(prevProps) {
    const { missionData } = this.props;

    if (missionData !== prevProps.missionData) {
      const calculatedValues = this.calculateValues(missionData);
      this.setState((prevState) => ({
        missionData: Object.assign({}, prevState.missionData, calculatedValues),
      }));
    }
  }

  calculateValues = (missionData) => {
    const { navPoints } = missionData;
    const newPoints = [];

    navPoints.forEach((point, index) => {
      const newPoint = {};

      // Calculate distance to point from last
      if (index === 0) {
        newPoint.dist = 0;
      } else {
        const lastPoint = navPoints[index - 1];
        newPoint.dist = findCoordDistance([lastPoint.lat, lastPoint.lon], [point.lat, point.lon]);
      }

      // Calcualte bearing to point from last

      // Push the new point back to the collection
      newPoints.push(Object.assign({}, point, newPoint));
    });

    const newMissionData = missionData;
    newMissionData.navPoints = newPoints;

    return newMissionData;
  };

  handleNavpointUpdate = (point) => {
    const { missionData } = this.state;

    missionData.navPoints[point.id] = point;

    this.setState((prevState) => ({
      missionData: Object.assign({}, prevState.missionData, missionData),
    }));
  };

  render() {
    const { missionData } = this.state;

    if (!missionData) return <div>loading...</div>;

    const points = missionData.navPoints.map((point) => (
      <NavPoint key={point.id} onChange={this.handleNavpointUpdate} {...point} />
    ));

    return (
      <Row gutter={8} className='advanced-form'>
        <Col className='gutter-row' span={24} md={24}>
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
