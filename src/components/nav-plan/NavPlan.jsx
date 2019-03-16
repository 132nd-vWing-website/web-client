import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';
import moment from 'moment';
import React, { useContext } from 'react';
import { MissionDataContext } from '../../contexts/MissionData';
import exportKML from '../../utils/kmlExporter';
import { DDtoDMS, metersToAltitude, metersToNautical, msToKnots } from '../../utils/utility';
import { Table, Tbody, Th, Tr } from '../styled/Table';
import NavPoint from './NavPoint';
import './style.css';

export default function NavPlan() {
  const { missionData, setMissionData } = useContext(MissionDataContext);
  const { navPoints } = missionData;

  let StyledTableData;

  // let tableData;

  const handlePointChange = (e) => {
    const { key } = e.target.dataset;

    navPoints[key].properties = {
      ...navPoints[key].properties,
      ...{ [e.target.name]: e.target.value },
    };

    setMissionData((prev) => ({ ...prev, navPoints }));
  };

  const handleExport = () => {
    const filename = `${missionData.missionNumber}-${missionData.callsign}-NAVPLAN.kml`;
    const geoJson = missionData.navPoints;
    const options = {
      documentName: `${missionData.missionNumber}-${missionData.callsign}-NAVPLAN.kml`,
      documentDescription: 'A navplan generated using the 132nd vWing webpage',
    };

    exportKML(filename, geoJson, options);
  };

  if (!missionData || navPoints.length < 1) {
    StyledTableData = (
      <tr style={{ textAlign: 'center' }}>
        <td colSpan='11' className='no-data'>
          Add waypoints from list above to start...
        </td>
      </tr>
    );
  } else {
    StyledTableData = navPoints.map((feature, index) => {
      const lat = DDtoDMS(feature.geometry.coordinates[1]);
      const lon = DDtoDMS(feature.geometry.coordinates[0]);
      const tos = moment(feature.properties.tos).format('HH:mm:ss');
      const hdg = Math.round(feature.properties.hdg);
      const dist = Math.round(metersToNautical(feature.properties.dist));
      const speed = Math.round(msToKnots(feature.properties.gs));
      const alt = metersToAltitude(feature.geometry.coordinates[2], 2438);

      const form = feature.properties.form || '';
      const minFuel = feature.properties.minFuel || '';

      return (
        <NavPoint
          key={index}
          index={index}
          name={feature.properties.name}
          lat={lat}
          lon={lon}
          tos={tos}
          hdg={hdg}
          dist={dist}
          speed={speed}
          alt={alt}
          action={feature.properties.action}
          form={form}
          minFuel={minFuel}
          onChange={handlePointChange}
        />
      );
    });

    // tableData = missionData.navPoints.map((feature, index) => {
    //   const lat = DDtoDMS(feature.geometry.coordinates[1]);
    //   const lon = DDtoDMS(feature.geometry.coordinates[0]);
    //   const tos = moment(feature.properties.tos).format('HH:mm:ss');
    //   const hdg = Math.round(feature.properties.hdg);
    //   const dist = Math.round(metersToNautical(feature.properties.dist));
    //   const speed = Math.round(msToKnots(feature.properties.gs));
    //   const alt = metersToAltitude(feature.geometry.coordinates[2], 2438);

    //   return (
    //     <tr key={index}>
    //       <td>{index}</td>
    //       <td>{feature.properties.name}</td>
    //       <td>{lat}</td>
    //       <td>{lon}</td>
    //       <td>{tos}</td>
    //       <td>{hdg}</td>
    //       <td>{dist}</td>
    //       <td>{speed}</td>
    //       <td>{alt}</td>
    //       <td>{feature.properties.action}</td>
    //       <td>EDIT</td>
    //     </tr>
    //   );
    // });
  }

  // let printRef;

  return (
    <React.Fragment>
      <Table>
        <thead>
          <Tr>
            <Th width='2%' center>
              #
            </Th>
            <Th center>Name</Th>
            <Th width='8%' center>
              LAT
            </Th>
            <Th width='8%' center>
              LON
            </Th>
            <Th width='8%' center>
              TOS
            </Th>
            <Th width='4%' center>
              HDG
            </Th>
            <Th width='4%' center>
              DIST
            </Th>
            <Th width='4%' center>
              GS
            </Th>
            <Th width='4%' center>
              ALT
            </Th>
            <Th center>ACTION</Th>
            <Th width='8%' center>
              FORM
            </Th>
            <Th width='8%' center>
              MIN.FUEL
            </Th>
          </Tr>
        </thead>
        <Tbody>{StyledTableData}</Tbody>
      </Table>
      {/* <table className='navplan-table' ref={(el) => (printRef = el)}>
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
      </table> */}
      <div className='navplan-footer'>
        {missionData.navPoints.length !== 0 ? (
          <Button type='primary' block onClick={handleExport}>
            Export Navplan
          </Button>
        ) : null}
      </div>
    </React.Fragment>
  );
}
