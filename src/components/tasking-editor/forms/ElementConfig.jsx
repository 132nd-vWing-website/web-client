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

export default function WeatherData() {
  const { missionData, setMissionData } = useContext(MissionDataContext);

  // const handleChange = (e) => {
  //   const change = { [e.target.name]: e.target.value };
  //   setMissionData((prev) => ({ ...prev, ...change }));
  // };

  const handleElementChange = (e) => {
    const { key } = e.target.dataset;
    const { element } = missionData;
    element[key] = { ...element[key], ...{ [e.target.name]: e.target.value } };
    setMissionData((prev) => ({ ...prev, ...element }));
  };

  // Updates all wingmen if FL's tacan gets updated
  // const updateTacan = (e) => {
  //   const { key } = e.target.dataset;
  //   const { element } = missionData;
  //   element[key] = { ...element[key], ...{ [e.target.name]: e.target.value } };
  //   setMissionData((prev) => ({ ...prev, ...element }));
  // };

  const elementInputs = missionData.element.map((el, index) => (
    <Input.Group compact key={`element-${index}`}>
      <Input
        style={{ width: '25%' }}
        name='pilot'
        value={el.pilot}
        onChange={handleElementChange}
        data-key={index}
      />
      <Input
        style={{ width: '25%' }}
        name='tcn'
        value={el.tcn}
        onChange={handleElementChange}
        data-key={index}
      />
      <Input
        style={{ width: '25%' }}
        name='laser'
        value={el.laser}
        onChange={handleElementChange}
        data-key={index}
      />
      <Input
        style={{ width: '25%' }}
        name='mode'
        value={el.mode}
        onChange={handleElementChange}
        data-key={index}
      />
    </Input.Group>
  ));

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
              <Form.Item {...formItemFullLengthLayout}>
                <span className='ant-input-group ant-input-group-compact'>
                  <div style={{ width: '25%', paddingLeft: '1em' }}>Pilot:</div>
                  <div style={{ width: '25%', paddingLeft: '1em' }}>TACAN:</div>
                  <div style={{ width: '25%', paddingLeft: '1em' }}>LASER:</div>
                  <div style={{ width: '25%', paddingLeft: '1em' }}>MODE-C:</div>
                </span>
                {elementInputs}
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}
