import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';
import Card from 'antd/lib/card';
import 'antd/lib/card/style/css';
import Col from 'antd/lib/col';
import 'antd/lib/col/style/css';
import Row from 'antd/lib/row';
import 'antd/lib/row/style/css';
import Tabs from 'antd/lib/tabs';
import 'antd/lib/tabs/style/css';
import React, { useContext, useEffect, useState } from 'react';
import AircraftTypesProvider from '../../contexts/AircraftTypes';
import AirfieldProvider from '../../contexts/Airfields';
import { MissionDataContext } from '../../contexts/MissionData';
import NavPointsProvider from '../../contexts/NavPoints';
// import pdfBuilder, { mdc } from '../../pdf/pdfBuilder';
// import pdfBuilder from '../../pdf/pdfBuilder';

import GeoImporterDataProvider from '../geo-importer/GeoImporterDataProvider';
import PageForm from './components/PageForm';
import PageList from './components/PageList';
import Flightplan from './tabs/Flightplan';
import Navigation from './tabs/Navigation';

import mdc from '../../pdf/mdc';

const PrintPdfButton = React.lazy(() => import('./components/PrintPdfButton'));

// const pdfBuilder = React.lazy(() => import('../../pdf/pdfBuilder'));

// Antd Destructuring
const { TabPane } = Tabs;

export default function Tasking() {
  const { missionData, setMissionData } = useContext(MissionDataContext);

  const [pages, setPages] = useState([]);
  const [panes, setPanes] = useState([]);
  useEffect(() => {
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
  }, [pages]);

  if (!missionData) return <div>Loading...</div>;

  // const generatePDF = () => {
  //   const content = [];
  //   pages.forEach((page) => {
  //     if (page.createPage) {
  //       content.push(page.createPage(missionData));
  //     }
  //     return null;
  //   });

  //   /**  Generate and then open the pdf */
  //   const pdf = pdfBuilder.makePdf(`132ND-MDC-${missionData.missionNumber}`, content);
  //   pdf.open();
  // };

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

  // const tabActions = (
  //   <React.Fragment>
  //     <Button type='primary' onClick={generatePDF} style={{ marginLeft: '0.5em' }}>
  //       Print MDC
  //     </Button>
  //   </React.Fragment>
  // );

  const tabActions = <PrintPdfButton pages={pages} block />;

  return (
    <AirfieldProvider>
      <GeoImporterDataProvider>
        <NavPointsProvider>
          <AircraftTypesProvider>
            <Card title='Tasking'>
              <Row>
                <Col className='gutter-row' span={24} md={24}>
                  <Tabs hideAdd type='editable-card' tabBarExtraContent={tabActions}>
                    <TabPane tab='Flightplan' key='tasking-flightplan' closable={false}>
                      <Flightplan />
                    </TabPane>
                    <TabPane tab='Navigation' key='tasking-nav' closable={false}>
                      <Navigation />
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
        </NavPointsProvider>
      </GeoImporterDataProvider>
    </AirfieldProvider>
  );
}
