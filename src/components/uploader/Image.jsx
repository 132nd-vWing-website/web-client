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
const ImageUploadContainer = styled.div``;

export default function Image({ label }) {
  const { currentUser } = React.useContext(AuthContext);

  const [uploadedFile, setUploadedFile] = React.useState({});
  const [uploadPercentage, setUploadPercentage] = React.useState(0);

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
        setUploadedFile({ fileName, filePath });
      })
      .catch((err) => {
        if (err.response.status === 500) {
          console.log('There was a problem with the server');
        } else {
          console.log(err.response.data.msg);
        }
      });
  };

  // const onSubmit = (file) => {
  // const onSubmit = async (file) => {
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   formData.append('foo', 'bar');

  //   console.info('onSubmit:formData.file: ', formData.get('file'));

  //   // TEST - Show objects appended to formData
  //   // for (const pair of formData.entries()) {
  //   //   console.log(`${pair[0]}, ${pair[1]}`);
  //   // }

  //   try {
  //     const res = await axios.post(`${API_ROOT}/image/upload`, formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });

  //     console.log('RES!? ', res.data);

  //     const { fileName, filePath } = res.data;
  //     setUploadedFile({ fileName, filePath });
  //   } catch (err) {
  //     if (err.response.status === 500) {
  //       console.log('There was a problem with the server');
  //     } else {
  //       console.log(err.response.data.msg);
  //     }
  //   }
  // };

  return (
    <ImageUploadContainer>
      <FileBrowser label={label} onSubmit={onSubmit} />
      <ProgressBar percentage={uploadPercentage} />
      {uploadedFile ? (
        <div>
          <div>
            <h3>{uploadedFile.fileName}</h3>
            <img style={{ width: 'auto' }} src={`${FILE_SERVER}/${uploadedFile.filePath}`} alt='' />
          </div>
        </div>
      ) : null}
    </ImageUploadContainer>
  );
}

Image.propTypes = {
  label: PropTypes.string,
};

Image.defaultProps = {
  label: 'Upload Image...',
};
