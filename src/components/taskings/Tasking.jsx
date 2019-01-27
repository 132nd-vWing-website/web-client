import React, { Component } from 'react';
import { Card, Tabs, Row, Col, Button } from 'antd';

import PageForm from './PageForm';
import PageList from './PageList';

import pdfBuilder, { mdc } from '../../pdf/pdfBuilder';

// Antd Destructuring
const { TabPane } = Tabs;

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

  // componentDidUpdate(prevProps, prevState) {
  //   const { missionData } = this.state;
  //   if (missionData !== prevState.missionData) {
  //     console.log('Tasking: I should update my children now!');
  //     // this.setState({ missionData });
  //   }
  // }

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
    const { panes } = this.state;
    const page = mdc.pages[key];
    const activeKey = `newTab${(this.newTabIndex += 1)}`;

    let newPane;
    if (page) {
      newPane = {
        title: page.title,
        key: activeKey,
        create: page.create,
        form: page.form,
        content: null,
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
    const { panes } = this.state;
    // let activeKey;
    // Create new panes for all pages
    const formPanes = pages.map((page) => {
      const props = mdc.pages[page.pageKey];
      // activeKey = `mdc-tab-${page.key}`;

      if (page.createPage) {
        return {
          title: page.label,
          key: `mdc-tab-${page.key}`,
          create: page.createPage,
          form: props.form,
          content: null,
        };
      }
    });

    // Update state with the new pages, activeKey and panes
    this.setState(() => ({
      pages,
      // activeKey,
      panes: [panes[0], ...formPanes],
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

    // Add default content (PageForm) for all panes that have a form property
    panes.forEach((pane) => {
      /* eslint no-param-reassign:0 */
      if (pane.form) {
        pane.content = (
          <PageForm form={pane.form} onUpdate={this.updateData} missionData={missionData} />
        );
      }
    });

    // Add default content to MDC-Setup tab (overrides the above function)
    panes[0].content = (
      <React.Fragment>
        <p>Some instructions here, followed by the add/remove/rearrange pages</p>
        <PageList list={list} content={templates} onUpdate={this.updatePages} />
      </React.Fragment>
    );

    const tabPanes = panes.map((pane) => (
      <TabPane tab={pane.title} key={pane.key} closable={false}>
        {pane.content}
      </TabPane>
    ));

    const tabActions = (
      <React.Fragment>
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
