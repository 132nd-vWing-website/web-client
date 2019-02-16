import toGeoJSON from '@mapbox/togeojson';
import React, { useState, useEffect, useContext } from 'react';
import { GeoImporterDataContext } from './GeoImporterDataProvider';

export default function GeoImporter(props) {
  const { setData } = useContext(GeoImporterDataContext);

  const nodeRef = React.createRef();

  const handleUpload = () => {
    const allowedTypes = ['kml', 'json', 'geojson'];
    const file = nodeRef.current.files[0];
    const reader = new FileReader();

    const fileType = file.name
      .split('.')
      .pop()
      .toLowerCase();

    if (allowedTypes.indexOf(fileType) > -1) {
      reader.type = file.type;
      reader.readAsText(file);

      // reader.onloadstart = () => {
      //   console.log('loading file...')
      // };

      reader.onloadend = (e) => {
        let { result } = e.target;

        // If input file is KML
        if (fileType === 'kml') {
          const XMLdom = new DOMParser().parseFromString(result, 'text/xml');
          result = toGeoJSON.kml(XMLdom);
        }

        // If input file is GeoJSON/JSON
        if (fileType === 'geojson' || fileType === 'json') {
          result = JSON.parse(result);
        }

        // Update context
        setData(result);
      };
    } else {
      alert('Filetype for selected file is not supported');
    }
  };

  return (
    <div className='input-group-append'>
      <label
        htmlFor='geoimporter-upload-input'
        id='geoimporter-upload-label'
        className='mb-0 btn btn-outline-secondary'>
        <span style={{ marginRight: '1em' }}>Upload File: </span>
        <input
          type='file'
          name='geoimporter-file'
          id='geoimporter-upload-input'
          className='inputfile'
          ref={nodeRef}
          onChange={handleUpload}
        />
      </label>
    </div>
  );
}
