/* eslint no-param-reassign: ["error", { "props": false }] */
import toGeoJSON from '@mapbox/togeojson';
import React, { useContext } from 'react';
import { GeoImporterDataContext } from './GeoImporterDataProvider';
import './style.css';

export default function GeoImporter(props) {
  const { setData } = useContext(GeoImporterDataContext);

  const nodeRef = React.createRef();

  const addFileNameToInput = (value) => {
    const selector = '.geoimporter-upload-form::after';
    const prop = 'content';
    const sheets = document.styleSheets;

    Object.values(sheets).forEach((sheet) => {
      Object.values(sheet.cssRules).forEach((rule) => {
        if (rule.selectorText === selector) {
          rule.style[prop] = `"${value}"`;
        }
        return null;
      });
    });
  };

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

      reader.onloadstart = () => {
        addFileNameToInput('Loading file...');
      };

      reader.onloadend = (e) => {
        let { result } = e.target;

        addFileNameToInput(file.name);

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
    <div>
      <label
        className='geoimporter-upload'
        htmlFor='geoimporter-upload-input'
        id='geoimporter-upload-label'>
        <input
          type='file'
          name='geoimporter-file'
          id='geoimporter-upload-input'
          className='inputfile'
          ref={nodeRef}
          onChange={handleUpload}
        />
        <span className='geoimporter-upload-form' />
      </label>
    </div>
  );
}
