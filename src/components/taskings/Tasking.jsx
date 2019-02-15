import { Button, Card, Col, Row, Tabs } from 'antd';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pdfBuilder, { mdc } from '../../pdf/pdfBuilder';
import PageForm from './components/PageForm';
import PageList from './components/PageList';
import Flightplan from './tabs/Flightplan';
import Navigation from './tabs/Navigation';

import AirfieldProvider from '../../contexts/Airfields';

// Antd Destructuring
const { TabPane } = Tabs;

// LazyLoading !!!

/** MDC BUILDER */
export default class Tasking extends Component {
  state = {
    missionData: null,
    pages: [],
    panes: [],
  };

  componentDidMount() {
    const { missionData } = this.props;
    this.setState({ missionData });
  }

  componentDidUpdate(prevProps) {
    const { missionData } = this.props;

    if (missionData !== prevProps.missionData) {
      this.setState(() => ({
        missionData: Object.assign({}, missionData),
      }));
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

  updatePages = (pages) => {
    const { panes } = this.state;

    // Create new panes for all PDF pages (i.e. they have a createPage function)
    const formPanes = pages.map((page) => {
      const props = mdc.pages[page.pageKey];
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

    // Keep all default panes (i.e. they have isDefault:true set)
    const defaultPanes = panes.filter((pane) => pane.isDefault === true);

    // Update state with the new pages, activeKey and panes
    this.setState(() => ({
      pages,
      panes: [...defaultPanes, ...formPanes],
    }));
  };

  updateData = (dataObject) => {
    this.setState((prevState) => ({
      missionData: Object.assign({}, prevState.missionData, dataObject),
    }));
  };

  render() {
    const { missionData, panes, list } = this.state;
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

    // Add default content (PageForm) for all auto-generated panes
    panes.forEach((pane) => {
      /* eslint no-param-reassign:0 */
      if (pane.form) {
        pane.content = (
          <PageForm form={pane.form} onUpdate={this.updateData} missionData={missionData} />
        );
      }
    });

    // Autogenerate MDC Panes
    const mdcPanes = panes.map((pane) => (
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
      <AirfieldProvider>
        <Card title='MDC Builder'>
          <Row>
            <Col className='gutter-row' span={24} md={24}>
              <Tabs
                hideAdd
                type='editable-card'
                onChange={this.onTabChange}
                onEdit={this.onTabEdit}
                tabBarExtraContent={tabActions}>
                <TabPane tab='Flightplan' key='tasking-flightplan' closable={false}>
                  <Flightplan onUpdate={this.updateData} missionData={missionData} />
                </TabPane>
                <TabPane tab='Navigation' key='tasking-nav' closable={false}>
                  <Navigation onUpdate={this.updateData} missionData={missionData} />
                </TabPane>
                <TabPane tab='Signals' key='tasking-signals' closable={false}>
                  <p>Flightplan</p>
                </TabPane>
                <TabPane tab='Pages' key='tasking-mdc-setup' closable={false}>
                  <p>Some instructions here, followed by the add/remove/rearrange pages</p>
                  <PageList list={list} content={templates} onUpdate={this.updatePages} />
                </TabPane>
                {mdcPanes}
              </Tabs>
            </Col>
          </Row>
        </Card>
      </AirfieldProvider>
    );
  }
}

Tasking.propTypes = {
  missionData: PropTypes.object,
};

Tasking.defaultProps = {
  missionData: null,
};
