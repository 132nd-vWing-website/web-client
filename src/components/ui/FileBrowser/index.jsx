import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin: 0;

  ::after,
  ::before {
    box-sizing: border-box;
  }
`;

const Input = styled.input`
  height: 0;
  width: 100%;
  margin-bottom: 2px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  padding-left: 0.5em;

  opacity: 0;

  :invalid {
    border-color: ${(props) => (props.error ? '#f5222d' : 'inherit')};
  }
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  padding-left: 0.375rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 2px;

  min-height: 25px;
  font-size: inherit;

  display: inline-block;
  margin: 0;

  ::after,
  ::before {
    box-sizing: border-box;
  }

  /* 'Browse'-Button: */
  ::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    display: block;
    padding: 0 0.375rem;
    line-height: 1.5;
    color: #495057;
    background-color: #e9ecef;
    content: 'Browse';

    border-left: inherit;
    border-radius: 2px;
  }
`;

export default function FileBrowser({ onSubmit }) {
  const [filename, setFilename] = React.useState('Choose File...');
  const [file, setFile] = React.useState(null);
  React.useEffect(() => {
    if (file !== null) {
      onSubmit(file);
    }
  }, [file]);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  return (
    <Container>
      <Input type='file' id='filebrowser-input' onChange={handleChange} />
      <Label htmlFor='filebrowser-input'>{filename}</Label>
    </Container>
  );
}

FileBrowser.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
