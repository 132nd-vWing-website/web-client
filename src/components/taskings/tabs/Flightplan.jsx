import { Col, Form, Input, Row, Select } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { AirfieldsConsumer } from '../../../contexts/Airfields';
import { AircraftTypesConsumer } from '../../../contexts/AircraftTypes';
import AirfieldSelector from '../components/AirfieldSelector';
import AircraftSelector from '../components/AircraftSelector';

export default function Flightplan(props) {
  const { onUpdate, missionData } = props;

  // Note: Use this for all un-wrapped AntD form inputs, as they return the value in e.target.value
  const handleChange = (e) => {
    const change = { [e.target.name]: e.target.value };
    onUpdate((prev) => ({ ...prev, ...change }));
  };

  /**
   * Some of the input fields should be readOnly if there is data (from an event):
   * Callsign
   * Aircraft Type
   * Departure Airfield
   * Recovery Airfield
   * ETD - If decided by event host (time-essential departure)
   */

  // Form Layouts
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  const formItemFullLengthLayout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 20 },
  };

  console.log('missionData: ', missionData.aircraft);

  return (
    <AirfieldsConsumer>
      {({ airfields }) => (
        <AircraftTypesConsumer>
          {({ types }) => (
            <Row gutter={8}>
              <Col className='gutter-row' span={24} md={16}>
                <Row gutter={8}>
                  <Col className='gutter-row' span={24} md={24}>
                    <div>
                      <h2>{`132vW VTASK FLTPLN - ${missionData.missionNumber}`}</h2>
                      <hr />
                      <p>
                        Flight plan mandatory for all missions with a departure, area of operations
                        or recovery within 132vWing 176th vACS controlled space.
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
                          <AirfieldSelector
                            airfields={missionData.airfields}
                            name='departure'
                            onChange={onUpdate}
                            options={airfields}
                          />
                        </Form.Item>
                        <Form.Item label='Recovery' {...formItemLayout}>
                          <AirfieldSelector
                            airfields={missionData.airfields}
                            name='recovery'
                            onChange={onUpdate}
                            options={airfields}
                          />
                        </Form.Item>
                        <Form.Item label='Alternate' {...formItemLayout}>
                          <AirfieldSelector
                            airfields={missionData.airfields}
                            name='alternate'
                            onChange={onUpdate}
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
                          <Input.Group compact>
                            <Input
                              style={{ width: '20%' }}
                              value={`${missionData.element.length} x `}
                              readOnly
                            />
                            <AircraftSelector
                              style={{ width: '80%' }}
                              element={missionData.element}
                              onChange={onUpdate}
                              options={types}
                              value={missionData.aircraft}
                            />
                          </Input.Group>
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
        </AircraftTypesConsumer>
      )}
    </AirfieldsConsumer>
  );
}

Flightplan.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  missionData: PropTypes.object.isRequired,
};
