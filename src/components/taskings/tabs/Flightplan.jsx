import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Col, Row } from 'antd';

export default class Flightplan extends Component {
  state = {
    missionData: null,
  };

  componentDidMount() {
    const { missionData } = this.props;
    this.setState({ missionData });
  }

  componentDidUpdate(prevProps, prevState) {
    const { missionData } = this.state;
    const { onUpdate } = this.props;

    if (missionData !== prevState.missionData) {
      onUpdate(missionData);
    }
  }

  render() {
    const { missionData } = this.props;
    return (
      <Row>
        <Col className='gutter-row' span={24} md={12}>
          <div>
            <h2>{`132vW VTASK FLTPLN - ${missionData.missionNumber}`}</h2>
            <hr />
            <p>
              Flight plan mandatory for all missions with a departure, area of operations or
              recovery within 132vWing 176th vACS controlled space.
            </p>
            <ul>
              <li>Fields ETA and ENR Intentions are mandatory</li>
              <li>
                ETA may be given approximately, e.g.
                <i>+2hrs.</i>
              </li>
            </ul>
            <b>
              Flight plan is to be submitted for approval a minimum of 2 hours prior to tasking
              takeoff time!
            </b>
          </div>
        </Col>
      </Row>
    );
  }
}

Flightplan.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  missionData: PropTypes.object.isRequired,
};
