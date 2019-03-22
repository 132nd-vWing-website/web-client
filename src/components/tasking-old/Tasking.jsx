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
import mdc from '../../pdf/mdc';
import GeoImporterDataProvider from '../geo-importer/GeoImporterDataProvider';
import Spinner from '../loaders/Spinner';
import LoadButton from '../local-storage/LoadButton';
import SaveButton from '../local-storage/SaveButton';
import { PDFPagesContext } from '../pdf/PDFPagesProvider';
import PageForm from './components/PageForm';
import PageList from './components/PageList';
import Flightplan from './tabs/Flightplan';
import Navigation from './tabs/Navigation';
import Signals from './tabs/Signals';

// Lazy Loading
const PrintPdfButton = React.lazy(() => import('./components/PrintPdfButton'));

export default function Tasking() {
  const { missionData, setMissionData } = useContext(MissionDataContext);
  const { pages } = useContext(PDFPagesContext);

  const [panes, setPanes] = useState([]);
  useEffect(() => {
    // Create new panes for all PDF pages with a form
    const pagesWithForms = pages.filter((page) => mdc.pages[page.pageKey].form);
    const formPanes = pagesWithForms.map((page) => {
      const properties = mdc.pages[page.pageKey];
      if (properties.form) {
        return {
          title: page.label,
          key: `mdc-tab-${page.key}`,
          create: page.createPage,
          form: properties.form,
          content: null,
        };
      }
      return {};
    });

    setPanes([...formPanes]);
  }, [pages]);

  // A check to see that we have the data we need to render. Render a loader if not
  if (!missionData) return <Spinner />;

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

  // Tab Action Components

  const tabActions = (
    <Button.Group>
      <LoadButton name='missionData' onLoad={setMissionData} />
      <SaveButton name='missionData' value={missionData} type='primary' />
    </Button.Group>
  );

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
                      <Signals />
                      <Flightplan />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab='Navigation' key='tasking-navigation-tab' closable={false}>
                      <Navigation />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab='Signals' key='tasking-signals-tab' closable={false}>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab='Pages' key='tasking-pages-tab' closable={false}>
                      <p>Some instructions here, followed by the add/remove/rearrange pages</p>
                      <PageList />
                      <PrintPdfButton block type='primary' style={{ marginTop: '1em' }} />
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
