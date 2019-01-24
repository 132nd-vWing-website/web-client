import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Card, Tabs, Row, Col, Form, Button, Input } from 'antd';

import PageForm from './PageForm';

import pdfBuilder, { mdc } from '../../pdf/pdfBuilder';

const { TabPane } = Tabs;

/** MDC BUILDER */
export default class MDCBuilder extends Component {
  state = {
    missionData: null,
  };

  newTabIndex = 0;

  componentDidMount() {
    // Load the default mission values as a starting point
    const { defaultData } = mdc;

    // Initialize the default set of panes
    const panes = [
      {
        title: 'Instructions',
        key: '1',
        closable: false,
        content: (
          <Form style={{ margin: '0 1em' }}>
            <Form.Item>
              <p>Some instructions here, followed by the add/remove/rearrange pages</p>
            </Form.Item>
            <Form.Item>
              <Button type='primary' onClick={this.generatePDF}>
                Generate MDC
              </Button>
            </Form.Item>
          </Form>
        ),
      },
      {
        title: 'MDC Frontpage',
        key: '2',
        closable: false,
        content: (
          <PageForm form={mdc.frontPage.form} onChange={this.onChange} missionData={defaultData} />
        ),
      },
    ];

    // Update state
    this.setState({ missionData: defaultData, activeKey: panes[0].key, panes });
  }

  generatePDF = () => {
    const { missionData } = this.state;

    /** Generate and open the pdf */
    const frontPage = mdc.frontPage.create(missionData);
    const pdf = pdfBuilder.makePdf('494th-MDC', [frontPage]);
    pdf.open();

    /** Update State */
    this.setState(missionData);
  };

  onChange = (e) => {
    const { missionData } = this.state;
    missionData[e.target.name] = e.target.value;
    this.setState({ missionData });
  };

  onTabChange = (activeKey) => {
    this.setState({ activeKey });
  };

  onTabEdit = (targetKey, action) => {
    // this[action](targetKey);
    switch (action) {
      case 'add':
        this.addTab();
        break;
      case 'remove':
        this.removeTab(targetKey);
        break;
      default:
        break;
    }
  };

  addTab = () => {
    const { panes } = this.state;
    const activeKey = `newTab${(this.newTabIndex += 1)}`;
    panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
  };

  removeTab = (targetKey) => {
    let { activeKey } = this.state;
    const { panes } = this.state;

    let lastIndex;
    panes.forEach((pane, index) => {
      if (pane.key === targetKey) {
        lastIndex = index - 1;
      }
    });

    const newPanes = panes.filter((pane) => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = newPanes[lastIndex].key;
    }

    this.setState({ panes: newPanes, activeKey });
  };

  render() {
    const { missionData, activeKey, panes } = this.state;
    if (!missionData) return <div>Loading...</div>;

    const tabPanes = panes.map((pane) => (
      <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
        {pane.content}
      </TabPane>
    ));

    const addNewPage = <Button onClick={this.addTab}>Add Page</Button>;

    return (
      <Card title='MDC Builder'>
        <Row>
          <Col className='gutter-row' span={24} md={24}>
            <Tabs
              hideAdd
              type='editable-card'
              onChange={this.onTabChange}
              activeKey={activeKey}
              onEdit={this.onTabEdit}
              tabBarExtraContent={addNewPage}>
              {tabPanes}
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
