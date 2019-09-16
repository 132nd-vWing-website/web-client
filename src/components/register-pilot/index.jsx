import React from 'react';
// import PropTypes from 'prop-types';
import { MdInsertEmoticon } from 'react-icons/md';
import { Grid, GridItem } from 'styled-grid-component';
import Form from '../ui/Form';

import Image from '../uploader/Image';

export default function RegisterPilot() {
  return (
    <Form title='Add Pilot' icon={<MdInsertEmoticon />}>
      <p>Pilot form...</p>
      <Image />
    </Form>
  );
}

// RegisterPilot.propTypes = {
//   stepKey: PropTypes.number,
//   currentStep: PropTypes.number,
//   onNext: PropTypes.func,
// };

// RegisterPilot.defaultProps = {
//   stepKey: 0,
//   currentStep: 0,
//   onNext: () => null,
// };
