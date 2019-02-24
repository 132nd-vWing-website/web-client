import Col from 'antd/lib/col';
import 'antd/lib/col/style/css';
import Form from 'antd/lib/form';
import 'antd/lib/form/style/css';
import Input from 'antd/lib/input';
import 'antd/lib/input/style/css';
import Row from 'antd/lib/row';
import 'antd/lib/row/style/css';
import React, { useContext } from 'react';
import { MissionDataContext } from '../../../contexts/MissionData';
import AircraftSelector from '../components/AircraftSelector';
import AirfieldSelector from '../components/AirfieldSelector';
import WeatherData from '../components/WeatherData';

export default function Flightplan() {
  const { missionData, setMissionData } = useContext(MissionDataContext);

  // Note: Use this for all un-wrapped AntD form inputs, as they return the value in e.target.value
  const handleChange = (e) => {
    const change = { [e.target.name]: e.target.value };
    setMissionData((prev) => ({ ...prev, ...change }));
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

  return (
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
                Flight plan is to be submitted for approval a minimum of 2 hours prior to tasking
                takeoff time!
              </b>
            </div>
          </Col>
        </Row>
        <Row gutter={8} className='advanced-form'>
          <Form layout='horizontal'>
            <Row>
              <Col span={24} md={12}>
                <Form.Item label='Flight Date' {...formItemLayout}>
                  <Input
                    placeholder='241900ZFEB2019'
                    value={missionData.missionDate}
                    onChange={handleChange}
                  />
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
                    onChange={setMissionData}
                  />
                </Form.Item>
                <Form.Item label='Recovery' {...formItemLayout}>
                  <AirfieldSelector
                    airfields={missionData.airfields}
                    name='recovery'
                    onChange={setMissionData}
                  />
                </Form.Item>
                <Form.Item label='Alternate' {...formItemLayout}>
                  <AirfieldSelector
                    airfields={missionData.airfields}
                    name='alternate'
                    onChange={setMissionData}
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
                      onChange={setMissionData}
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
        <WeatherData />
      </Col>
      <Col className='gutter-row' span={24} md={8}>
        CHAT ETC....
      </Col>
    </Row>
  );
}
