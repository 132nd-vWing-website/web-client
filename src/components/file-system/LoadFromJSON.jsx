import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';
import PropTypes from 'prop-types';
import React from 'react';

export default function SaveToJSON(props) {
  const { onLoad } = props;
  const nodeRef = React.createRef();

  const handleClick = () => {
    nodeRef.current.click();
  };

  const handleUpload = () => {
    const allowedTypes = ['txt', 'json'];
    const file = nodeRef.current.files[0];
    const reader = new FileReader();

    const fileType = file.name
      .split('.')
      .pop()
      .toLowerCase();

    if (allowedTypes.indexOf(fileType) > -1) {
      reader.type = file.type;
      reader.readAsText(file);

      reader.onloadend = (e) => {
        let { result } = e.target;
        result = JSON.parse(result);

        // Pass result to props.onLoad()
        onLoad(result);
      };
    } else {
      alert('Filetype for selected file is not supported');
    }
  };

  return (
    <React.Fragment>
      <Button {...props} onClick={handleClick}>
        Load from File
      </Button>
      <input type='file' name='file-importer' ref={nodeRef} onChange={handleUpload} hidden />
    </React.Fragment>
  );
}

SaveToJSON.propTypes = {
  onLoad: PropTypes.func,
};

SaveToJSON.defaultProps = {
  onLoad: () => null,
};
