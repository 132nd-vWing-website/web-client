import React, { Component } from 'react';
import { Card, Tabs, Row, Col, Select, Button } from 'antd';

import PageForm from './PageForm';

import pdfBuilder, { mdc } from '../../pdf/pdfBuilder';

// Antd Destructuring
const { TabPane } = Tabs;
const { Option } = Select;

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
        content: <p>Some instructions here, followed by the add/remove/rearrange pages</p>,
      },
      {
        title: 'MDC Frontpage',
        key: '2',
        closable: false,
        create: mdc.pages.frontPage.create,
        content: (
          <PageForm
            form={mdc.pages.frontPage.form}
            onChange={this.onChange}
            missionData={defaultData}
          />
        ),
      },
    ];

    // Update state
    this.setState({ missionData: defaultData, activeKey: panes[0].key, panes });
  }

  generatePDF = () => {
    const { missionData, panes } = this.state;

    /** Create content from panes */
    const content = [];
    panes.forEach((pane) => {
      if (pane.create) {
        content.push(pane.create(missionData));
      }
      return null;
    });

    /**  Generate and then open the pdf */
    const pdf = pdfBuilder.makePdf('494th-MDC', content);
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

  addTab = (key) => {
    const { panes, missionData } = this.state;
    const page = mdc.pages[key];
    const activeKey = `newTab${(this.newTabIndex += 1)}`;

    let newPane;
    if (page) {
      newPane = {
        title: page.title,
        key: activeKey,
        create: page.create,
        content: <PageForm form={page.form} onChange={this.onChange} missionData={missionData} />,
      };
    } else {
      newPane = { title: 'New Tab', content: 'Content of new Tab', key: activeKey };
    }

    panes.push(newPane);
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

    const options = Object.keys(mdc.pages).map((page) => {
      const pageObj = mdc.pages[page];
      return (
        <Option key={page} value={page}>
          {pageObj.title}
        </Option>
      );
    });

    const tabActions = (
      <React.Fragment>
        <Select defaultValue='Add Page' onChange={this.addTab} style={{ width: 150 }}>
          <Option value={null}>fooooo</Option>
          {options}
        </Select>
        <Button type='primary' onClick={this.generatePDF} style={{ marginLeft: '0.5em' }}>
          Print MDC
        </Button>
      </React.Fragment>
    );

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
              tabBarExtraContent={tabActions}>
              {tabPanes}
            </Tabs>
          </Col>
        </Row>
      </Card>
    );
  }
}
