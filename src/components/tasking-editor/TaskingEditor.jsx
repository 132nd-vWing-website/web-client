import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';
import Card from 'antd/lib/card';
import 'antd/lib/card/style/css';
import Col from 'antd/lib/col';
import 'antd/lib/col/style/css';
import Collapse from 'antd/lib/collapse';
import CollapsePanel from 'antd/lib/collapse/CollapsePanel';
import 'antd/lib/collapse/style/css';
import Row from 'antd/lib/row';
import 'antd/lib/row/style/css';
import React, { useContext } from 'react';
import { MissionDataContext } from '../../contexts/MissionData';
import NavPointsProvider from '../../contexts/NavPoints';
import LoadFromJSON from '../file-system/LoadFromJSON';
import SaveToJSON from '../file-system/SaveToJSON';
import GeoImporterDataProvider from '../geo-importer/GeoImporterDataProvider';
import Spinner from '../loaders/Spinner';
import LoadButton from '../local-storage/LoadButton';
import SaveButton from '../local-storage/SaveButton';
import { PDFPagesContext } from '../pdf/PDFPagesProvider';
import ElementConfig from './forms/ElementConfig';
import MissionData from './forms/MissionData';
import Navigation from './forms/Navigation';
import PackageConfig from './forms/PackageConfig';
// import PageForm from './components/PageForm';
// import Flightplan from './tabs/Flightplan';
import PageList from './forms/PageList';
import WeatherData from './forms/WeatherData';
// import Signals from './tabs/Signals';

// Lazy Loading
const PrintPdfButton = React.lazy(() => import('./ui-functions/PrintPdfButton'));

export default function TaskingEditor(props) {
  const { missionData, setMissionData, setTaskingID } = useContext(MissionDataContext);
  const { pages } = useContext(PDFPagesContext);

  // If a tasking ID was supplied, we want to retrieve and show that data instead of the default object
  const { match } = props;
  if (match.params.id) setTaskingID(match.params.id)

  // A check to see that we have the data we need to render. Render a loader if not
  if (!missionData) return <Spinner />;

  const menuActions = (
    <div
      className='tasking-menu-actions'
      style={{
        paddingTop: '.5em',
        paddingBottom: '.5em',
        width: '100%',
        float: 'right',
        borderTop: '1px solid #d9d9d9',
      }}>
      <Button.Group style={{ float: 'right', width: 'auto' }}>
        <LoadButton name='missionData' onLoad={setMissionData} />
        <SaveButton name='missionData' value={missionData} />
        <LoadFromJSON onLoad={setMissionData} />
        <SaveToJSON data={missionData} />
        <PrintPdfButton type='primary' />
      </Button.Group>
    </div>
  );

  const introText = (
    <Row gutter={8}>
      <Col className='gutter-row' span={24} md={24} style={{ marginBottom: '1em' }}>
        <div>
          <h2>{`132vW VTASK FLTPLN - ${missionData.missionNumber}`}</h2>
          <hr />
          <p>
            Flight plan mandatory for all missions with a departure, area of operations or recovery
            within 132vWing 176th vACS controlled space.
          </p>
          <ul>
            <li>Fields ETA and ENR Intentions are mandatory</li>
            <li>
              ETA may be given approximately, e.g. <i>+2hrs.</i>
            </li>
          </ul>
          <b>
            Flight plan is to be submitted for approval a minimum of 2 hours prior to tasking
            takeoff time!
          </b>
        </div>
      </Col>
    </Row>
  );

  return (
    <GeoImporterDataProvider>
      <NavPointsProvider>
        <Card title='Tasking'>
          <Row>
            <Col className='gutter-row' span={24} md={24}>
              {introText}
              {menuActions}
            </Col>
          </Row>
          <Row>
            <Col className='gutter-row' span={24} md={24}>
              <Collapse accordion defaultActiveKey='mission-data'>
                {/* <Collapse accordion defaultActiveKey='package-config'> */}
                <CollapsePanel header='Mission Data' key='mission-data'>
                  <MissionData />
                </CollapsePanel>
                <CollapsePanel header='Weather Data' key='weather-data'>
                  <WeatherData />
                </CollapsePanel>
                <CollapsePanel header='Element Setup' key='element-config'>
                  <ElementConfig />
                </CollapsePanel>
                <CollapsePanel header='Package Setup' key='package-config'>
                  <PackageConfig />
                </CollapsePanel>
                <CollapsePanel header='Navigation' key='navigation'>
                  <Navigation />
                </CollapsePanel>
                <CollapsePanel header='Fuel' key='fuel'>
                  <p>Lorem Ipsum</p>
                </CollapsePanel>
                <CollapsePanel header='Signals' key='signals'>
                  <p>Lorem Ipsum</p>
                </CollapsePanel>
                <CollapsePanel header='Print Settings' key='print'>
                  <PageList />
                </CollapsePanel>
              </Collapse>
            </Col>
          </Row>
        </Card>
      </NavPointsProvider>
    </GeoImporterDataProvider>
  );
}
