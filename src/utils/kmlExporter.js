import toKml from '@maphubs/tokml';

export const testGeoJson = {
  type: 'FeatureCollection',
  features: [
    // {
    //   type: 'Feature',
    //   geometry: {
    //     type: 'Point',
    //     coordinates: [102.0, 0.5],
    //   },
    //   properties: {
    //     prop0: 'value0',
    //   },
    // },
    {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [[102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0]],
      },
      properties: {
        prop0: 'value0',
        prop1: 0.0,
      },
    },
    // {
    //   type: 'Feature',
    //   geometry: {
    //     type: 'Polygon',
    //     coordinates: [[[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]]],
    //   },
    //   properties: {
    //     prop0: 'value0',
    //     prop1: {
    //       this: 'that',
    //     },
    //   },
    // },
  ],
};

export const fileDownloader = (filename, text) => {
  const element = document.createElement('a');
  element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`);
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};

const makeGeoJson = (features) => ({
  type: 'FeatureCollection',
  features,
});

const PointsToLineString = (features) => {
  const feature = {
    type: 'Feature',
    title: 'Flightplan',
    geometry: {
      type: 'LineString',
      coordinates: [],
    },
    properties: {
      name: 'Flightplan',
    },
  };

  features.forEach((f) => {
    feature.geometry.coordinates.push([f.geometry.coordinates]);
  });

  return [feature];
};

/**
 * Formats and exports a GeoJSON object to a KML file
 * @param {string} filename - Name of output file
 * @param {object} geojson - Object in GeoJSON format, or collection of features
 * @param {objects} options - KML options
 * @param {bool} asPoints - Will convert not convert all points to LineString if set to true
 */
const exportKML = (filename, geojson, options, asPoints) => {
  let features = geojson;
  if (!asPoints) {
    features = PointsToLineString(features);
  }

  if (!geojson.type || geojson.type !== 'FeatureCollection') {
    const formatted = makeGeoJson(features);
    fileDownloader(filename, toKml(formatted, options));
  } else {
    fileDownloader(filename, toKml(features, options));
  }
};

export default exportKML;
