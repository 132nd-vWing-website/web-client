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
              <Input placeholder='... some METAR' />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24} md={12}>
            <Form.Item label='Trans-Alt' {...formItemLayout}>
              <Input placeholder='7000ft' />
            </Form.Item>
            <Form.Item label='Trans-Alt' {...formItemLayout}>
              <PressureConverter />
            </Form.Item>
          </Col>
          <Col span={24} md={12}>
            <Form.Item label='QNH' {...formItemLayout}>
              <Input placeholder='FL085' />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Row>
  );
}
