import { Col, Form, Input, Row, Select } from 'antd';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

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

  handleChange = (e) => {
    const change = { [e.target.name]: e.target.value };
    this.setState((prevState) => ({
      missionData: Object.assign({}, prevState.missionData, change),
    }));
  };

  handleSubmit = (e) => {
    console.log('Submit!');
  };

  render() {
    const { missionData } = this.props;

    const numberOfAircraft = missionData.element.length;

    // TODO: If the event has configured a aircraft for this tasking, then this should just be an input with no onChange ("protected")
    // Like: <Input value={`${numberOfAircraft} x ${missionData.aircraft}`} readOnly />
    const aircraftSelector = (
      <Input.Group compact>
        <Input style={{ width: '20%' }} value={`${numberOfAircraft} x `} readOnly />
        <Select
          style={{ width: '80%' }}
          defaultValue='F/A18-C'
          name='aircraft'
          value={missionData.aircraft}
          onChange={(value) => this.handleChange({ target: { name: 'aircraft', value } })}>
          <Select.Option value='F/A18-C'>F/A-18C</Select.Option>
          <Select.Option value='A-10C'>A-10C</Select.Option>
          <Select.Option value='KA-50'>KA-50</Select.Option>
          <Select.Option value='Mi-8'>Mi-8</Select.Option>
          <Select.Option value='M2000C'>M2000C</Select.Option>
          <Select.Option value='N/A'>Ground Unit(s)</Select.Option>
        </Select>
      </Input.Group>
    );

    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 14 },
    };

    const formItemFullLengthLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 19 },
    };

    return (
      <React.Fragment>
        <Row gutter={8}>
          <Col className='gutter-row' span={24} md={12}>
            <Row gutter={8}>
              <Col className='gutter-row' span={24} md={24}>
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
                    Flight plan is to be submitted for approval a minimum of 2 hours prior to
                    tasking takeoff time!
                  </b>
                </div>
              </Col>
            </Row>
            <Row gutter={8} className='advanced-form'>
              <Form onSubmit={this.handleSubmit} layout='horizontal'>
                <Row>
                  <Col span={24} md={12}>
                    <Form.Item label='Flight Date' {...formItemLayout}>
                      <Input placeholder='301900ZJAN2019' />
                    </Form.Item>
                    <Form.Item label='R/T Callsign' {...formItemLayout}>
                      <Input
                        placeholder='FALCON'
                        name='callsign'
                        value={missionData.callsign}
                        onChange={this.handleChange}
                      />
                    </Form.Item>
                    <Form.Item label='Departure' {...formItemLayout}>
                      <Input placeholder='UGKO' />
                    </Form.Item>
                    <Form.Item label='Recovery' {...formItemLayout}>
                      <Input placeholder='UGKO' />
                    </Form.Item>
                  </Col>
                  <Col span={24} md={12}>
                    <Form.Item label='Tasking' {...formItemLayout}>
                      <Input
                        placeholder='Mission Number'
                        name='missionNumber'
                        value={missionData.missionNumber}
                        onChange={this.handleChange}
                      />
                    </Form.Item>
                    <Form.Item label='Aircraft' {...formItemLayout}>
                      {aircraftSelector}
                    </Form.Item>
                    <Form.Item label='ETD' {...formItemLayout}>
                      <Input placeholder='18:00Z' />
                    </Form.Item>
                    <Form.Item label='ETA' {...formItemLayout}>
                      <Input placeholder='+2hrs' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24} md={24}>
                    <Form.Item label='ENR Intentions' {...formItemFullLengthLayout}>
                      <Input.TextArea rows={6} placeholder='DEP UGKO via UGKO WEST...' />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Row>
          </Col>
          <Col className='gutter-row' span={24} md={12}>
            CHAT ETC....
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

Flightplan.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  missionData: PropTypes.object.isRequired,
};
