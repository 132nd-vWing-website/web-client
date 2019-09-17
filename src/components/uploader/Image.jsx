import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

import API_ROOT, { FILE_SERVER } from '../../api-config';

// Components
import FileBrowser from '../ui/FileBrowser';
import ProgressBar from './ProgressBar';

// Contexts
import { AuthContext } from '../auth/AuthContext';

// Styled Components
const ImageUploadContainer = styled.div`
  margin: 0;
  margin-bottom: 2px;
`;

export default function Image({ label, onChange }) {
  const { currentUser } = React.useContext(AuthContext);

  const [uploadPercentage, setUploadPercentage] = React.useState(0);
  const [uploadedFile, setUploadedFile] = React.useState();
  React.useEffect(() => {
    if (uploadedFile) {
      onChange(uploadedFile);
    }
  }, [uploadedFile]);

  const onSubmit = (file) => {
    const formObj = new FormData();

    formObj.append('imageData', file);
    formObj.append('author_id', currentUser.id);

    axios
      .post(`${API_ROOT}/image/upload`, formObj, {
        onUploadProgress: (progressEvent) => {
          setUploadPercentage(
            parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total), 10),
          );
        },
      })
      .then((res) => {
        const { fileName, filePath } = res.data;

        // TODO - Remove the setTimeout() in production?
        setTimeout(() => {
          setUploadedFile({ fileName, filePath });
        }, 1000);
      })
      .catch((err) => {
        if (err.response.status === 500) {
          // TODO - This should generate an error message in the field?
          console.log('There was a problem with the server');
        } else {
          console.log(err.response.data.msg);
        }
      });
  };

  return (
    <ImageUploadContainer>
      <FileBrowser label={label} onSubmit={onSubmit} />
      {uploadPercentage > 0 ? <ProgressBar percentage={uploadPercentage} /> : null}
    </ImageUploadContainer>
  );
}

Image.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
};

Image.defaultProps = {
  label: 'Upload Image...',
  onChange: () => null,
};
