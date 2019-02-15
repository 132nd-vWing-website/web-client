import { Col, Form, Input, Row, Select } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { AirfieldsConsumer } from '../../../contexts/Airfields';
import AirfieldSearchInput from '../components/AirfieldSearchInput';

function Flightplan(props) {
  const { onUpdate, missionData } = props;

  const handleChange = (e) => {
    let change;

    // Need to account for both recieving Syntethicevents (e.target) data and normal objects
    if (!e.target) {
      change = { [e.name]: e.value };
    } else {
      change = { [e.target.name]: e.target.value };
    }

    // Update parent object, using the context provided updater function
    onUpdate((data) => ({ ...data, ...change }));
  };

  //     const { missionData, resources, onUpdate } = this.props;

  const numberOfAircraft = missionData.element.length;

  /**
   * Some of the input fields should be readOnly if there is data (from an event):
   * Callsign
   * Aircraft Type
   * Departure Airfield
   * Recovery Airfield
   * ETD - If decided by event host (time-essential departure)
   */

  // Values for aircraft selection
  const aircraftSelector = (
    <Input.Group compact>
      <Input style={{ width: '20%' }} value={`${numberOfAircraft} x `} readOnly />
      <Select
        style={{ width: '80%' }}
        defaultValue='F/A18-C'
        name='aircraft'
        value={missionData.aircraft}
        onChange={(value) => handleChange({ name: 'aircraft', value })}>
        <Select.Option value='F/A18-C'>F/A-18C</Select.Option>
        <Select.Option value='A-10C'>A-10C</Select.Option>
        <Select.Option value='KA-50'>KA-50</Select.Option>
        <Select.Option value='Mi-8'>Mi-8</Select.Option>
        <Select.Option value='M2000C'>M2000C</Select.Option>
        <Select.Option value='N/A'>Ground Unit(s)</Select.Option>
      </Select>
    </Input.Group>
  );

  // Form Layouts
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  const formItemFullLengthLayout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 20 },
  };

  return (
    <AirfieldsConsumer>
      {({ airfields }) => (
        <Row gutter={8}>
          <Col className='gutter-row' span={24} md={16}>
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
              <Form layout='horizontal'>
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
                        onChange={handleChange}
                      />
                    </Form.Item>
                    <Form.Item label='Departure' {...formItemLayout}>
                      <AirfieldSearchInput
                        airfields={missionData.airfields}
                        name='departure'
                        onChange={handleChange}
                        options={airfields}
                      />
                    </Form.Item>
                    <Form.Item label='Recovery' {...formItemLayout}>
                      <AirfieldSearchInput
                        airfields={missionData.airfields}
                        name='recovery'
                        onChange={handleChange}
                        options={airfields}
                      />
                    </Form.Item>
                    <Form.Item label='Alternate' {...formItemLayout}>
                      <AirfieldSearchInput
                        airfields={missionData.airfields}
                        name='alternate'
                        onChange={handleChange}
                        options={airfields}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24} md={12}>
                    <Form.Item label='Tasking' {...formItemLayout}>
                      <Input
                        placeholder='Mission Number'
                        name='missionNumber'
                        value={missionData.missionNumber}
                        onChange={handleChange}
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
                    <Form.Item label='ENR' {...formItemFullLengthLayout}>
                      <Input.TextArea rows={6} placeholder='DEP UGKO via UGKO WEST...' />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Row>
          </Col>
          <Col className='gutter-row' span={24} md={8}>
            CHAT ETC....
          </Col>
        </Row>
      )}
    </AirfieldsConsumer>
  );
}

Flightplan.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  missionData: PropTypes.object.isRequired,
};

export default Flightplan;
