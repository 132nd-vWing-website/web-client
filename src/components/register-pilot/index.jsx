import React from 'react';
// import PropTypes from 'prop-types';
import { MdInsertEmoticon } from 'react-icons/md';
import Form, { FormItem } from '../ui/Form';
import Input from '../ui/Input';

import Image from '../uploader/Image';

export default function RegisterPilot() {
  return (

    <Form title='Add Pilot' icon={<MdInsertEmoticon />}>
      <FormItem label={'Profile Picture:'}>
        <Image />
      </FormItem>
      <Input onChange={() => console.log('yolo')} name='aircraft' label='Aircraft:' />
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
