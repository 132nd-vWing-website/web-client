import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, Row, Col } from 'antd';

export default class ProfileDashboard extends Component {
  render() {
    return (
      <Card title='Login'>
        <Row>
          <Col className='gutter-row' span={24} md={12}>
            Profile dash stuff...
          </Col>
        </Row>
      </Card>
    );
  }
}
