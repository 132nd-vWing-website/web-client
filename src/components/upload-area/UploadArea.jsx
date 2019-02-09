import { Icon } from 'antd';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class UploadArea extends Component {
  // This creates a ref so that we can access the files from that DOM node
  nodeRef = React.createRef();

  onFileUpload = (e) => {
    e.preventDefault();

    const file = this.nodeRef.current.files[0];
    this.props.handleFile(file);
  };

  render() {
    const antIcon = this.props.antIcon || 'file-add';
    const label = this.props.label || 'Click to Upload file';
    const info = this.props.info || '';

    return (
      <div
        className='ant-upload ant-upload-drag'
        style={{
          // height: "60vh",
          overflow: 'auto',
          // minHeight: "60vh"
        }}>
        <input
          id='file-big'
          ref={this.nodeRef}
          name='file'
          type='file'
          accept=''
          multiple=''
          style={{ display: 'none' }}
          onChange={this.onFileUpload}
        />

        <label htmlFor='file-big' tabIndex='0' className='ant-upload ant-upload-btn' role='button'>
          <div className='ant-upload-drag-container'>
            <p className='ant-upload-drag-icon'>
              <Icon type={antIcon} theme='outlined' />
            </p>
            <p className='ant-upload-text'>{label}</p>
            <p className='ant-upload-hint'>{info}</p>
          </div>
        </label>
      </div>
    );
  }
}

UploadArea.propTypes = {
  handleFile: PropTypes.func.isRequired,
  antIcon: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
};
