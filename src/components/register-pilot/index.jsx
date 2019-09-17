// import PropTypes from 'prop-types';
import React from 'react';
import { MdInsertEmoticon, MdPerson } from 'react-icons/md';
import styled from 'styled-components';
import Form, { FormItem } from '../ui/Form';
import Input from '../ui/Input';

import Image from '../uploader/Image';

import { FILE_SERVER } from '../../api-config';

const ProfileImagePreviewContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1em;
`;

const ProfileImagePreview = styled.div`
  height: 100px;
  width: 100px;
  background-color: #e9ecef;
  border: 5px solid rgba(0, 0, 0, 0.2);
  border-radius: 50px;

  display: inherit;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: rgba(0, 0, 0, 0.2);
`;

const ProfilePicture = styled.img`
  border-radius: 50px;
`;

// TODO - The profile image should probably not get uploaded to the server until the user presses submit here...

export default function RegisterPilot() {
  const [profileImage, setProfileImage] = React.useState();

  return (
    <Form title='Add Pilot' icon={<MdInsertEmoticon />}>
      <ProfileImagePreviewContainer>
        <ProfileImagePreview>
          {profileImage ? (
            <ProfilePicture
              style={{ width: 'auto' }}
              src={`${FILE_SERVER}/${profileImage.filePath}-100.png`}
              alt=''
            />
          ) : (
            <MdPerson />
          )}
        </ProfileImagePreview>
      </ProfileImagePreviewContainer>
      <FormItem label='Profile Picture:'>
        <Image onChange={setProfileImage} />
      </FormItem>
      <Input onChange={() => console.log('yolo')} name='callsign' label='Callsign:' />
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
