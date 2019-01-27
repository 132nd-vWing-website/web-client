import React, { Component } from 'react';
import { Card, Tabs, Row, Col, Select, Button } from 'antd';

import PageForm from './PageForm';
import PageList from './PageList';

import pdfBuilder, { mdc } from '../../pdf/pdfBuilder';

// Antd Destructuring
const { TabPane } = Tabs;
const { Option } = Select;

/** MDC BUILDER */
export default class Tasking extends Component {
  state = {
    missionData: null,
    pages: [],
  };

  newTabIndex = 0;

  componentDidMount() {
    // Load the default mission values as a starting point
    const { defaultData } = mdc;

    // Initialize the default set of panes
    const panes = [
      {
        title: 'MDC - Setup',
        key: 'mdc-setup',
        closable: false,
        content: null,
      },
    ];

    // Update state
    this.setState({ missionData: defaultData, activeKey: panes[0].key, panes });
  }

  componentDidUpdate(prevProps, prevState) {
    const { missionData } = this.state;
    if (missionData !== prevState.missionData) {
      console.log('Tasking: I should update my children now!');
      // this.setState({ missionData });
    }
  }

  generatePDF = () => {
    const { missionData, pages } = this.state;

    /** Generate pages */
    const content = [];
    pages.forEach((page) => {
      if (page.createPage) {
        content.push(page.createPage(missionData));
      }
      return null;
    });

    /**  Generate and then open the pdf */
    const pdf = pdfBuilder.makePdf(`132ND-MDC-${missionData.missionNumber}`, content);
    pdf.open();
  };

  // onChange = (e) => {
  //   const change = { [e.target.name]: e.target.value };

  //   this.setState((prevState) => ({
  //     missionData: Object.assign({}, prevState.missionData, change),
  //   }));
  // };

  // onChange = (data) => {
  //   console.log(data);
  //   this.setState((prevState) => ({
  //     missionData: Object.assign({}, prevState.missionData, data),
  //   }));
  // };

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
        content: <PageForm form={page.form} onUpdate={this.updateData} missionData={missionData} />,
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

  updatePages = (pages) => {
    this.setState(() => ({
      pages,
    }));
  };

  updateData = (dataObject) => {
    this.setState((prevState) => ({
      missionData: Object.assign({}, prevState.missionData, dataObject),
    }));
  };

  render() {
    const { missionData, activeKey, panes, list } = this.state;
    if (!missionData) return <div>Loading...</div>;

    // Generate the content array from available MDC pages
    const templates = Object.keys(mdc.pages).map((page) => {
      const pageObj = mdc.pages[page];
      return {
        title: pageObj.title,
        key: page,
        createPage: pageObj.create,
      };
    });

    // Add default content to MDC-Setup tab
    panes[0].content = (
      <React.Fragment>
        <p>Some instructions here, followed by the add/remove/rearrange pages</p>
        <PageList list={list} content={templates} onUpdate={this.updatePages} />
      </React.Fragment>
    );

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
