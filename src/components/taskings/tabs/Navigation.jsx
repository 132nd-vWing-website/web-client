import { Col, Form, Row } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { findBearing, findCoordDistance } from '../../../utils/utility';
import NavImport from '../components/navimport/NavImport';
import NavPoint from '../components/NavPoint';

export default class Navigation extends Component {
  state = {
    missionData: null,
    navOptions: [],
  };

  componentDidMount() {
    const { missionData } = this.props;
    this.setState({ missionData });
  }

  componentDidUpdate(prevProps) {
    const { missionData } = this.props;

    if (missionData !== prevProps.missionData) {
      // Make sure WP#0 is our home-plate...
      missionData.navPoints[0] = Object.assign({}, missionData.navPoints[0], {
        action: 'DEPARTURE',
        name: missionData.airfields[0].icao,
        lat: missionData.airfields[0].lat,
        lon: missionData.airfields[0].lon,
      });

      // Perform all calulations...
      const calculatedValues = this.calculateValues(missionData);

      // Update state!
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
      // const lastPoint = navPoints[index - 1];
      const lastPoint = newPoints[index - 1];

      // Calculate distance and bearing to point from last
      if (index === 0 || point.lat === 0 || point.lon === 0) {
        newPoint.dist = 0;
        newPoint.hdg = 0;
      } else {
        newPoint.dist = findCoordDistance([lastPoint.lat, lastPoint.lon], [point.lat, point.lon]);
        newPoint.hdg = findBearing([lastPoint.lat, lastPoint.lon], [point.lat, point.lon]);
      }

      // Calculate time of travel (in milliseconds)
      if (index === 0) {
        newPoint.tos = point.tos;
      } else if (newPoint.dist === 0) {
        newPoint.tos = lastPoint.tos;
      } else {
        const startTime = moment(lastPoint.tos); // in UTC milliseconds
        const travelTime = 1000 * (newPoint.dist / point.gs);
        newPoint.tos = startTime + travelTime;
      }

      // Push the new point back to the collection
      newPoints.push(Object.assign({}, point, newPoint));
    });

    const newMissionData = missionData;
    newMissionData.navPoints = newPoints;

    return newMissionData;
  };

  handleNavImport = (collection) => {
    console.log('Imported!', collection);
  };

  handleNavpointUpdate = (point) => {
    const { missionData } = this.state;

    missionData.navPoints[point.id] = point;

    this.setState((prevState) => ({
      missionData: Object.assign({}, prevState.missionData, missionData),
    }));
  };

  render() {
    const { missionData, navOptions } = this.state;

    if (!missionData) return <div>loading...</div>;

    const points = missionData.navPoints.map((point) => (
      <NavPoint key={point.id} onChange={this.handleNavpointUpdate} {...point} />
    ));

    return (
      <Row gutter={8} className='advanced-form'>
        <Col className='gutter-row' span={24} md={24}>
          <NavImport navOptions={navOptions} onImport={this.handleNavImport} />
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
