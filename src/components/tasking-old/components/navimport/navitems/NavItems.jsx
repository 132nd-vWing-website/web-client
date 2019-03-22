import React, { Component } from 'react';
import classNames from 'classnames';

import moment from 'moment';

import { Table, Divider } from 'antd';

import { DDtoDMS, DDtoDDS, metersToFeet, knotsToMs } from '../../../../../utils/utility';

import UploadArea from '../../../../upload-area/UploadArea';

export default class Items extends Component {
  state = { data: null, filter: '', registry: [] };

  // onChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  onClickAdd = (feature) => {
    this.props.updatePlan((plan) => {
      // Initialize an object 'planner' to hold all our planning data
      feature.properties.planner = {};

      // Add some default values to the feature before pushing it to the plan
      feature.properties.planner.tot = moment()
        .hours(18)
        .minutes(0)
        .seconds(0)
        .format('x');

      feature.properties.planner.vul = 0;
      feature.properties.planner.groundSpeed = knotsToMs(350);

      // Update and return the new plan
      plan.push(feature);
      return plan;
    });
  };

  onClickRemove = (index) => {
    this.props.updatePlan((plan) => {
      plan.splice(index, 1);
      return plan;
    });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.data !== prevState.data ||
      nextProps.plan !== prevState.plan ||
      nextProps.filter !== prevState.filter
    ) {
      // We want to keep track on what items (by name/identifier) is allready present in the plan, so that we can do actions accordingly
      const newRegistry = [];
      nextProps.plan.forEach((f) => {
        newRegistry.push(f.properties.name.toLowerCase());
      });

      return {
        data: nextProps.data,
        registry: newRegistry,
        filter: nextProps.filter,
      };
    }
    return null;
  }

  render() {
    const { registry, filter } = this.state;
    const data = this.props.data || null;

    let content;
    // If we have data loaded, then we want to display the list of nav points. If not, then we want to show an upload dialogue
    if (data) {
      const filteredData = data.features.filter((f) => {
        // We only accept features of type Point - as this is the only one meaningful to us
        if (f.geometry.type === 'Point') {
          return f.properties.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
        }
        return null;
      });

      // Create our dataSource object
      const dataSource = [];
      filteredData.forEach((f, index) => {
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
      });

      // TEMP :: table column formatting
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
          render: (text, record) => {
            const actions = [];
            const ident = record.ident.toLowerCase();

            const divider = <Divider key='divider' type='vertical' />;

            const add = (
              <a key='add' href='javascript:;' onClick={this.onClickAdd.bind(this, record.feature)}>
                Add
              </a>
            );

            const remove = (
              <a
                key='remove'
                href='javascript:;'
                onClick={this.onClickRemove.bind(this, registry.indexOf(ident))}>
                Remove
              </a>
            );

            // Add "ADD" action to actions
            actions.push(add);

            // Add "REMOVE" if the navpoint is in the list
            registry.includes(ident) ? actions.push(divider, remove) : null;

            return <span>{actions}</span>;
          },
        },
      ];

      // Add our finished table of nav points to "content" for rendering...
      content = <Table bordered columns={columns} dataSource={dataSource} />;
    } else {
      // If there is no data loaded, then show something else...
      content = (
        <UploadArea
          handleFile={this.props.handleFile}
          label='Click here to upload your list of Nav Points'
          info='Supports both *.KML and *.GeoJSON files'
        />
      );
    }

    return <React.Fragment>{content}</React.Fragment>;
  }
}
