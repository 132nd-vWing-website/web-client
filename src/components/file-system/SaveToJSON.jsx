import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';
import PropTypes from 'prop-types';
import React from 'react';
import FileWriter from '../../utils/FileWriter';

export default function SaveToJSON(props) {
  const { data } = props;

  const handleClick = () => {
    const json = JSON.stringify(data);

    let fileName = 'flightplan.json';
    if (data.missionNumber) fileName = `flightplan-${data.missionNumber}.json`;

    FileWriter(fileName, json, 'application/json');
  };

  return (
    <Button {...props} onClick={handleClick}>
      Save to File
    </Button>
  );
}

SaveToJSON.propTypes = {
  data: PropTypes.object,
};

SaveToJSON.defaultProps = {
  data: {},
};
