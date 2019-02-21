import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';
import moment from 'moment';
import React, { useContext } from 'react';
import ReactToPrint from 'react-to-print';
import { MissionDataContext } from '../../contexts/MissionData';
import exportKML from '../../utils/kmlExporter';
import { DDtoDMS, metersToAltitude, metersToNautical, msToKnots } from '../../utils/utility';
import './style.css';

export default function NavPlan() {
  const { missionData } = useContext(MissionDataContext);

  let tableData;

  const handleExport = () => {
    const filename = `${missionData.missionNumber}-${missionData.callsign}-NAVPLAN.kml`;
    const geoJson = missionData.navPoints;
    const options = {
      documentName: `${missionData.missionNumber}-${missionData.callsign}-NAVPLAN.kml`,
      documentDescription: 'A navplan generated using the 132nd vWing webpage',
    };

    exportKML(filename, geoJson, options);
  };

  if (!missionData || missionData.navPoints.length < 1) {
    tableData = (
      <tr style={{ minHeight: '5em' }}>
        <td colSpan='11' className='no-data'>
          Add waypoints from list above to start...
        </td>
      </tr>
    );
  } else {
    tableData = missionData.navPoints.map((feature, index) => {
      const lat = DDtoDMS(feature.geometry.coordinates[1]);
      const lon = DDtoDMS(feature.geometry.coordinates[0]);
      const tos = moment(feature.properties.tos).format('HH:mm:ss');
      const hdg = Math.round(feature.properties.hdg);
      const dist = Math.round(metersToNautical(feature.properties.dist));
      const speed = Math.round(msToKnots(feature.properties.gs));
      const alt = metersToAltitude(feature.geometry.coordinates[2], 2438);

      return (
        <tr key={index}>
          <td>{index}</td>
          <td>{feature.properties.name}</td>
          <td>{lat}</td>
          <td>{lon}</td>
          <td>{tos}</td>
          <td>{hdg}</td>
          <td>{dist}</td>
          <td>{speed}</td>
          <td>{alt}</td>
          <td>{feature.properties.action}</td>
          <td>EDIT</td>
        </tr>
      );
    });
  }

  let printRef;

  return (
    <React.Fragment>
      <table className='navplan-table' ref={(el) => (printRef = el)}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>LAT</th>
            <th>LON</th>
            <th>TOS</th>
            <th>HDG</th>
            <th>DIST</th>
            <th>GS</th>
            <th>ALT</th>
            <th>ACTION</th>
            <th>EDIT</th>
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </table>
      <div className='navplan-footer'>
        {missionData.navPoints.length !== 0 ? (
          <Button type='primary' block onClick={handleExport}>
            Export Navplan
          </Button>
        ) : null}
        <ReactToPrint trigger={() => <Button>Print this</Button>} content={() => printRef} />
      </div>
    </React.Fragment>
  );
}
