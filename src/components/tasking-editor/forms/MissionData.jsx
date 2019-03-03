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
import AircraftSelector from '../ui-functions/AircraftSelector';
import AirfieldSelector from '../ui-functions/AirfieldSelector';

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
  // const formItemLayout = {
  //   labelCol: { span: 6 },
  //   wrapperCol: { span: 16 },
  // };

  const formItemFullLengthLayout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 20 },
  };

  return (
    <Row gutter={8}>
      <Col className='gutter-row' span={24} md={16}>
        <Form layout='horizontal'>
          <Row>
            <Col span={24} md={24}>
              <Form.Item label='Mission #' {...formItemFullLengthLayout}>
                <Input
                  placeholder='Mission Number'
                  name='missionNumber'
                  value={missionData.missionNumber}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item label='Callsign' {...formItemFullLengthLayout}>
                <Input
                  placeholder='FALCON'
                  name='callsign'
                  value={missionData.callsign}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item label='Aircraft' {...formItemFullLengthLayout}>
                <Input.Group compact>
                  <AircraftSelector
                    style={{ width: '100%' }}
                    element={missionData.element}
                    onChange={setMissionData}
                    value={missionData.aircraft}
                  />
                </Input.Group>
              </Form.Item>
              <Form.Item label='Departure' {...formItemFullLengthLayout}>
                <AirfieldSelector
                  airfields={missionData.airfields}
                  name='departure'
                  onChange={setMissionData}
                />
              </Form.Item>
              <Form.Item label='Recovery' {...formItemFullLengthLayout}>
                <AirfieldSelector
                  airfields={missionData.airfields}
                  name='recovery'
                  onChange={setMissionData}
                />
              </Form.Item>
              <Form.Item label='Alternate' {...formItemFullLengthLayout}>
                <AirfieldSelector
                  airfields={missionData.airfields}
                  name='alternate'
                  onChange={setMissionData}
                />
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
      </Col>
    </Row>
  );

  // return (
  //   <Row gutter={8}>
  //     <Col className='gutter-row' span={24} md={16}>
  //       <Form layout='horizontal'>
  //         <Row>
  //           <Col span={24} md={12}>
  //             <Form.Item label='Flight Date' {...formItemLayout}>
  //               <Input
  //                 name='date'
  //                 placeholder='241900ZFEB2019'
  //                 value={missionData.date}
  //                 onChange={handleChange}
  //               />
  //             </Form.Item>
  //             <Form.Item label='R/T Callsign' {...formItemLayout}>
  //               <Input
  //                 placeholder='FALCON'
  //                 name='callsign'
  //                 value={missionData.callsign}
  //                 onChange={handleChange}
  //               />
  //             </Form.Item>
  //             <Form.Item label='Departure' {...formItemLayout}>
  //               <AirfieldSelector
  //                 airfields={missionData.airfields}
  //                 name='departure'
  //                 onChange={setMissionData}
  //               />
  //             </Form.Item>
  //             <Form.Item label='Recovery' {...formItemLayout}>
  //               <AirfieldSelector
  //                 airfields={missionData.airfields}
  //                 name='recovery'
  //                 onChange={setMissionData}
  //               />
  //             </Form.Item>
  //             <Form.Item label='Alternate' {...formItemLayout}>
  //               <AirfieldSelector
  //                 airfields={missionData.airfields}
  //                 name='alternate'
  //                 onChange={setMissionData}
  //               />
  //             </Form.Item>
  //           </Col>
  //           <Col span={24} md={12}>
  //             <Form.Item label='Tasking' {...formItemLayout}>
  //               <Input
  //                 placeholder='Mission Number'
  //                 name='missionNumber'
  //                 value={missionData.missionNumber}
  //                 onChange={handleChange}
  //               />
  //             </Form.Item>
  //             <Form.Item label='Aircraft' {...formItemLayout}>
  //               <Input.Group compact>
  //                 <Input
  //                   style={{ width: '20%' }}
  //                   value={`${missionData.element.length} x `}
  //                   readOnly
  //                 />
  //                 <AircraftSelector
  //                   style={{ width: '80%' }}
  //                   element={missionData.element}
  //                   onChange={setMissionData}
  //                   value={missionData.aircraft}
  //                 />
  //               </Input.Group>
  //             </Form.Item>
  //             <Form.Item label='ETD' {...formItemLayout}>
  //               <Input placeholder='18:00Z' />
  //             </Form.Item>
  //             <Form.Item label='ETA' {...formItemLayout}>
  //               <Input placeholder='+2hrs' />
  //             </Form.Item>
  //           </Col>
  //         </Row>
  //         <Row>
  //           <Col span={24} md={24}>
  //             <Form.Item label='ENR' {...formItemFullLengthLayout}>
  //               <Input.TextArea rows={6} placeholder='DEP UGKO via UGKO WEST...' />
  //             </Form.Item>
  //           </Col>
  //         </Row>
  //       </Form>
  //     </Col>
  //   </Row>
  // );
}
