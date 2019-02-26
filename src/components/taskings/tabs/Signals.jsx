import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';
import Col from 'antd/lib/col';
import 'antd/lib/col/style/css';
import Row from 'antd/lib/row';
import 'antd/lib/row/style/css';
import React, { useContext } from 'react';
import ElementConfig from '../components/ElementConfig';
import { MissionDataContext } from '../../../contexts/MissionData';

export default function Navigation() {
  const { missionData, setMissionData } = useContext(MissionDataContext);

  // const handleChange = (e) => {
  //   const change = { [e.target.name]: e.target.value };
  //   setMissionData((prev) => ({ ...prev, ...change }));
  // };

  return (
    <Row gutter={8} className='advanced-form'>
      <Col className='gutter-row' span={24} md={24}>
        <ElementConfig />
      </Col>
    </Row>
  );
}
