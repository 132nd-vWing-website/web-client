import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { Card, Tabs, Row, Col, Form, Button, Input } from 'antd';

import { mdc } from '../../pdf/templates';
import defaultData from '../../pdf/mdc/multirole.demo';

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
    const { missionData, missionNumber, callsign } = this.state;

    // Update the missionData object with current state
    missionData.flightplan.missionNumber = missionNumber;
    missionData.elementData.callsign = callsign;

    // Generate and open the pdf
    const frontPage = mdc.multirole.pages.frontPage(missionData);
    const pdf = mdc.multirole.makePdf('494th-MDC', frontPage);
    pdf.open();

    // Update state
    this.setState(missionData);
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { missionData, missionNumber, callsign } = this.state;
    if (!missionData) return <div>Loading...</div>;

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
                      Generate MDC
                    </Button>
                  </Form.Item>
                </Form>
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
