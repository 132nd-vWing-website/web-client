import React, { Component } from 'react';

export default class NavActions extends Component {
  state = { filter: '' };

  // This creates a ref so that we can access the files from that DOM node
  nodeRef = React.createRef();

  onFileUpload = (e) => {
    e.preventDefault();

    const file = this.nodeRef.current.files[0];
    this.props.handleFile(file);
  };

  updateFilter = (e) => {
    this.setState({ filter: e.target.value });
    this.props.handleFilterUpdate(e.target.value);
  };

  render() {
    return (
      <div className='input-group mb-2'>
        <div className='input-group-prepend'>
          <span className='input-group-text'>
            <i className='fas fa-search' />
          </span>
        </div>
        <input
          type='email'
          name='filter'
          className='form-control'
          placeholder='Type here to search the list...'
          value={this.state.filter}
          onChange={this.updateFilter}
        />
        <div className='input-group-append'>
          <input
            name='file'
            id='file'
            className='inputfile'
            type='file'
            ref={this.nodeRef}
            onChange={this.onFileUpload}
          />
          <label htmlFor='file' className='mb-0 btn btn-outline-secondary'>
            Upload file
          </label>
        </div>
      </div>
    );
  }
}
