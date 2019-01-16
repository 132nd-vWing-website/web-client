import React from 'react';

import { Card, Row, Col } from 'antd';

const Event = ({ match }) => {
  console.log('EVENT!');
  return (
    <Card title='Event'>
      <Row>
        <Col className='gutter-row' span={24} md={24}>
          <h3>
            Event:
            {match.params.id}
          </h3>
        </Col>
      </Row>
    </Card>
  );
};

export default Event;
