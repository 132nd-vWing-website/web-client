import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../styled/colors';
import { AircraftTypesContext } from '../../contexts/AircraftTypes';
// import { AirfieldsContext } from '../../contexts/Airfields';

const Table = styled.table`
  border-spacing: 0;
  margin: 0 0 1.5em 1em;

  & td,
  th {
    padding: 0.5em;
  }
`;

const Thead = styled.thead`
  font-weight: bold;

  & tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }

  & tr th {
    padding-top: 20px;
    border-bottom: 1px solid ${colors.global.border};
  }
`;

const Tbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;

  & tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
`;

const Amsndat = styled.td`
  padding: 0.5em 1em 0 0;
  border-right: 1px solid ${colors.global.border};
  border-top: none;
  vertical-align: top;
  text-align: right;
  font-size: 0.75em;
  font-weight: normal;

  & div {
    white-space: nowrap;
  }
`;

const GoToTask = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  cursor: pointer;
  color: ${colors.primary.background};

  &:hover {
    color: ${colors.primary.highlight.background};
  }
`;

export default function TaskingCard(props) {
  const airframes = useContext(AircraftTypesContext).types;
  // const { airfields } = useContext(AirfieldsContext);
  const { data, onClick } = props;

  const msnNo = data.amsndat_msnno;
  const msnType = data.amsndat_primsn;
  const wing = '132nd vWing';
  const sqn = '494th VFS';
  const callsign = data.msnacft_callsign;
  const flightNo = data.msnacft_flightno;
  const airframe = airframes.find((el) => el.ac_id.toString() === data.msnacft_type).ac_type;

  const elementSize = data.mission_data.element.length;

  // let dep = ' - ';
  // let arr = ' - ';

  // const missionData = task.mission_data;
  // if (missionData && missionData.airfields) {
  //   dep = airfields.find((el) => el.airfield_id === missionData.airfields[0].id);
  //   arr = airfields.find((el) => el.airfield_id === missionData.airfields[1].id);
  // }

  const handleClick = () => {
    onClick();
  };

  const flightLead = (
    <tr>
      <Amsndat rowSpan={elementSize}>
        <GoToTask onClick={handleClick}>{msnNo}</GoToTask>
        <div>{wing}</div>
        <div>{sqn}</div>
      </Amsndat>
      <td>{`${callsign} ${flightNo}-1`}</td>
      <td>Flight Lead</td>
      <td>{airframe}</td>
      <td>{msnType}</td>
      <td>{data.mission_data.element[0].pilot}</td>
    </tr>
  );

  const wingmen = data.mission_data.element.slice(1).map((el, index) => {
    const eleNum = index + 2;

    return (
      <tr key={eleNum}>
        <td>{`${callsign} ${flightNo}-${eleNum}`}</td>
        <td>Wingman</td>
        <td>{airframe}</td>
        <td>{msnType}</td>
        <td>{el.pilot}</td>
      </tr>
    );
  });

  return (
    <Table>
      <Thead>
        <tr>
          <th>TASKING</th>
          <th>CALLSIGN</th>
          <th>ROLE</th>
          <th>AIRCRAFT</th>
          <th>MSN</th>
          <th>PILOT</th>
        </tr>
      </Thead>
      <Tbody>
        {flightLead}
        {wingmen}
      </Tbody>
    </Table>
  );
}

TaskingCard.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

TaskingCard.defaultProps = {
  onClick: () => null,
};
