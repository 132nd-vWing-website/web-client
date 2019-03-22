import Col from 'antd/lib/col';
import 'antd/lib/col/style/css';
import Form from 'antd/lib/form';
import 'antd/lib/form/style/css';
import Input from 'antd/lib/input';
import 'antd/lib/input/style/css';
import Row from 'antd/lib/row';
import 'antd/lib/row/style/css';
import React, { useContext } from 'react';
import PressureConverter from './PressureConverter';
import { MissionDataContext } from '../../../contexts/MissionData';

export default function WeatherData() {
  const { missionData, setMissionData } = useContext(MissionDataContext);

  const handleChange = (e) => {
    const change = { [e.target.name]: e.target.value };
    setMissionData((prev) => ({ ...prev, ...change }));
  };

  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  const formItemFullLengthLayout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 20 },
  };

  return (
    <Row gutter={8} className='advanced-form'>
      <Form layout='horizontal'>
        <Row>
          <Col span={24} md={24}>
            <Form.Item label='ATIS' {...formItemFullLengthLayout}>
              <Input
                name='atis'
                placeholder='... some METAR'
                value={missionData.atis}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24} md={12}>
            <Form.Item label='TA' {...formItemLayout}>
              <Input
                placeholder='7000ft'
                name='ta'
                value={missionData.ta}
                onChange={handleChange}
                addonAfter={<span>feet</span>}
              />
            </Form.Item>
            <Form.Item label='QNH' {...formItemLayout}>
              <PressureConverter />
            </Form.Item>
          </Col>
          <Col span={24} md={12}>
            <Form.Item label='TL' {...formItemLayout}>
              <Input
                placeholder='FL085'
                name='tl'
                value={missionData.tl}
                onChange={handleChange}
                addonBefore={<span>FL</span>}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Row>
  );
}
