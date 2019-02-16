import { Table, Divider } from 'antd';
import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DDtoDMS, DDtoDDS, knotsToMs } from '../../utils/utility';
import { GeoImporterDataContext } from './GeoImporterDataProvider';

export default function GeoImporter(props) {
  const { actions } = props;
  const { data } = useContext(GeoImporterDataContext);

  // const [filteredData, setFilteredData] = useState;
  // useEffect(
  //   () => {
  //     if (data) {
  //       const filtered = data.features.filter((f) => {
  //         // Only interested in features of type Point
  //         if (f.geometry.type === 'Point') {
  //           // return f.properties.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
  //           return f;
  //         }
  //         return null;
  //       });
  //       setFilteredData(filtered);
  //     }
  //   },
  //   [data],
  // );

  // const [dataSource, setDatasource] = useState(null);
  // useEffect(
  //   () => {
  //     if (filteredData) {
  //       const collection = [];
  //       filteredData.forEach((f, index) => {
  //         collection.push({
  //           key: index,
  //           ident: f.properties.name,
  //           feature: f,
  //           ddX: f.geometry.coordinates[1],
  //           ddY: f.geometry.coordinates[0],
  //           dmsX: DDtoDMS(f.geometry.coordinates[1]),
  //           dmsY: DDtoDMS(f.geometry.coordinates[0]),
  //           ddsX: DDtoDDS(f.geometry.coordinates[1]),
  //           ddsY: DDtoDDS(f.geometry.coordinates[0]),
  //         });
  //       });
  //       setDatasource(collection);
  //     }
  //   },
  //   [filteredData],
  // );

  const columns = [
    {
      key: 'ident',
      title: 'Identifier',
      dataIndex: 'ident',
      width: '2rem',
    },
    { key: 'ddX', title: 'DD Lat', dataIndex: 'ddX', width: '2rem' },
    { key: 'ddY', title: 'DD Lon', dataIndex: 'ddY', width: '2rem' },
    { key: 'dmsX', title: 'DMS Lat', dataIndex: 'dmsX', width: '2rem' },
    { key: 'dmsY', title: 'DMS Lon', dataIndex: 'dmsY', width: '2rem' },
    { key: 'ddsX', title: 'DDS Lat', dataIndex: 'ddsX', width: '2rem' },
    { key: 'ddsY', title: 'DDS Lon', dataIndex: 'ddsY', width: '2rem' },
    {
      key: 'actions',
      title: 'Actions',
      dataIndex: 'actions',
      width: '2rem',
      render: (text, record) => actions(text, record),
    },
  ];

  const dataSource = [];

  if (data) {
    data.features.forEach((f, index) => {
      if (f.geometry.type === 'Point') {
        dataSource.push({
          key: index,
          ident: f.properties.name,
          feature: f,
          ddX: f.geometry.coordinates[1],
          ddY: f.geometry.coordinates[0],
          dmsX: DDtoDMS(f.geometry.coordinates[1]),
          dmsY: DDtoDMS(f.geometry.coordinates[0]),
          ddsX: DDtoDDS(f.geometry.coordinates[1]),
          ddsY: DDtoDDS(f.geometry.coordinates[0]),
        });
      }
    });
  }
  return <Table bordered columns={columns} dataSource={dataSource} />;
}

GeoImporter.propTypes = {
  actions: PropTypes.func,
};

GeoImporter.defaultProps = {
  actions: () => null,
};
