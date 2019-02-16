import { Button, Card, Col, Row, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import pdfBuilder, { mdc } from '../../pdf/pdfBuilder';
import PageForm from './components/PageForm';
import PageList from './components/PageList';
import Flightplan from './tabs/Flightplan';
import Navigation from './tabs/Navigation';

import AirfieldProvider from '../../contexts/Airfields';
import AircraftTypesProvider from '../../contexts/AircraftTypes';

// Antd Destructuring
const { TabPane } = Tabs;

// LazyLoading !!!

export default function Tasking(props) {
  const { missionData, setMissionData } = props;

  const [pages, setPages] = useState([]);
  const [panes, setPanes] = useState([]);
  useEffect(
    () => {
      // Create new panes for all PDF pages (i.e. they have a createPage function)
      const formPanes = pages.map((page) => {
        const properties = mdc.pages[page.pageKey];
        if (page.createPage) {
          return {
            title: page.label,
            key: `mdc-tab-${page.key}`,
            create: page.createPage,
            form: properties.form,
            content: null,
          };
        }
        return null;
      });

      // Keep all default panes (i.e. they have isDefault:true set)
      const defaultPanes = panes.filter((pane) => pane.isDefault === true);

      // Update state with the new pages
      setPanes([...defaultPanes, ...formPanes]);
    },
    [pages],
  );

  if (!missionData) return <div>Loading...</div>;

  const generatePDF = () => {
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
        <PageForm form={pane.form} onUpdate={setMissionData} missionData={missionData} />
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
      <Button type='primary' onClick={generatePDF} style={{ marginLeft: '0.5em' }}>
        Print MDC
      </Button>
    </React.Fragment>
  );

  return (
    <AirfieldProvider>
      <AircraftTypesProvider>
        <Card title='MDC Builder'>
          <Row>
            <Col className='gutter-row' span={24} md={24}>
              <Tabs hideAdd type='editable-card' tabBarExtraContent={tabActions}>
                <TabPane tab='Flightplan' key='tasking-flightplan' closable={false}>
                  <Flightplan onUpdate={setMissionData} missionData={missionData} />
                </TabPane>
                <TabPane tab='Navigation' key='tasking-nav' closable={false}>
                  <Navigation onUpdate={setMissionData} missionData={missionData} />
                </TabPane>
                <TabPane tab='Signals' key='tasking-signals' closable={false}>
                  <p>Flightplan</p>
                </TabPane>
                <TabPane tab='Pages' key='tasking-mdc-setup' closable={false}>
                  <p>Some instructions here, followed by the add/remove/rearrange pages</p>
                  <PageList content={templates} onUpdate={setPages} />
                </TabPane>
                {mdcPanes}
              </Tabs>
            </Col>
          </Row>
        </Card>
      </AircraftTypesProvider>
    </AirfieldProvider>
  );
}

Tasking.propTypes = {
  missionData: PropTypes.object,
  setMissionData: PropTypes.func.isRequired,
};

Tasking.defaultProps = {
  missionData: null,
};
