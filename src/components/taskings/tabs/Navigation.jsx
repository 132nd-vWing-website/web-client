import { Col, Form, Input, Row } from 'antd';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavPoint from '../components/NavPoint';

export default class Navigation extends Component {
  state = {
    missionData: null,
  };

  componentDidMount() {
    const { missionData } = this.props;
    this.setState({ missionData });
  }

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
