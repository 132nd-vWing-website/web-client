import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, Tabs, Row, Col, Form, Button, Input, Spin } from 'antd';

import { mdc } from '../../pdf/templates';
import defaultData from '../../pdf/mdc/multirole.demo';

// LazyLoading
const Preview = React.lazy(() => import('./Preview'));

const { TabPane } = Tabs;

export default class MDCBuilder extends Component {
  state = {
    missionData: null,
    missionNumber: 'TR9999',
    callsign: 'MAVRICK',
  };

  componentDidMount() {
    // Load the default values to state as a starting point
    this.setState({ missionData: defaultData });
  }

  handleSubmit = () => {
    console.log('this should re-render the preview');

    const { missionData, missionNumber, callsign } = this.state;

    missionData.flightplan.missionNumber = missionNumber;
    missionData.elementData.callsign = callsign;

    this.setState(missionData);
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { missionData, missionNumber, callsign } = this.state;

    if (!missionData) return <div>Loading...</div>;

    console.log('re render!', missionData);

    return (
      <Card title='MDC Builder'>
        <Row>
          <Col className='gutter-row' span={24} md={24}>
            <Tabs type='card'>
              <TabPane tab='Mission Data' key='1'>
                <Form style={{ margin: '0 1em' }} onSubmit={() => null}>
                  <Form.Item>
                    <Input
                      name='missionNumber'
                      addonBefore='Mission Number'
                      defaultValue='TR9999'
                      value={missionNumber}
                      onChange={this.onChange}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Input
                      name='callsign'
                      addonBefore='Mission Number'
                      defaultValue='TR9999'
                      value={callsign}
                      onChange={this.onChange}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button type='primary' onClick={this.handleSubmit}>
                      Update Preview
                    </Button>
                  </Form.Item>
                </Form>
              </TabPane>
              <TabPane tab='Mission Data Card' key='2'>
                <React.Suspense fallback={<p>Loading...</p>}>
                  <Preview data={missionData} />
                </React.Suspense>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Card>
    );
  }
}

// MDCBuilder.propTypes = {
//   prop: PropTypes,
// };
