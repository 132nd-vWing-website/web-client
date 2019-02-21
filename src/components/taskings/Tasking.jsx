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
import mdc from '../../pdf/mdc';
import GeoImporterDataProvider from '../geo-importer/GeoImporterDataProvider';
import Spinner from '../loaders/Spinner';
import PageForm from './components/PageForm';
import PageList from './components/PageList';
import Flightplan from './tabs/Flightplan';
import Navigation from './tabs/Navigation';

// Lazy Loading
const PrintPdfButton = React.lazy(() => import('./components/PrintPdfButton')); // 2.2MB/448KB

export default function Tasking() {
  const { missionData, setMissionData } = useContext(MissionDataContext);

  const [pages, setPages] = useState([]); // make into a context...?
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

    // A check to see that we have the data we need to render. Render a loader if not
    if (!missionData) return <Spinner />;

    // Keep all default panes (i.e. they have isDefault:true set)
    const defaultPanes = panes.filter((pane) => pane.isDefault === true);

    // Update state with the new pages
    setPanes([...defaultPanes, ...formPanes]);
  }, [pages]);

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
    <Tabs.TabPane tab={pane.title} key={pane.key} closable={false}>
      {pane.content}
    </Tabs.TabPane>
  ));

  const tabActions = <PrintPdfButton pages={[]} block />;

  return (
    <AirfieldProvider>
      <GeoImporterDataProvider>
        <NavPointsProvider>
          <AircraftTypesProvider>
            <Card title='Tasking'>
              <Row>
                <Col className='gutter-row' span={24} md={24}>
                  <Tabs hideAdd type='editable-card' tabBarExtraContent={tabActions}>
                    <Tabs.TabPane tab='Flightplan' key='tasking-flightplan-tab' closable={false}>
                      <Flightplan />
                      <PrintPdfButton block />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab='Navigation' key='tasking-navigation-tab' closable={false}>
                      <Navigation />
                      <PrintPdfButton block />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab='Signals' key='tasking-signals-tab' closable={false}>
                      Signals
                      <PrintPdfButton block />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab='Pages' key='tasking-pages-tab' closable={false}>
                      <p>Some instructions here, followed by the add/remove/rearrange pages</p>
                      <PageList content={[]} onUpdate={setPages} />
                      <PrintPdfButton block />
                    </Tabs.TabPane>
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
