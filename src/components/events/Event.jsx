import React from 'react';
import PropTypes from 'prop-types';

import { Card, Row, Col } from 'antd';

const Event = ({ match }) => (
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

Event.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Event;
