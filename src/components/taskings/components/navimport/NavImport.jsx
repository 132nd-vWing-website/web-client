import toGeoJSON from '@mapbox/togeojson';
import { Col, Row } from 'antd';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavActions from './navactions/NavActions';
import NavItems from './navitems/NavItems';

export default class NavImport extends Component {
  state = { navpoints: null, loading: false, filter: '', plan: [] };

  componentDidUpdate(prevProps, prevState) {
    const { navpoints } = this.state;
    const { onImport } = this.props;

    if (navpoints !== prevState.navpoints) {
      console.log('Points got imported! I need to update my parent now', navpoints);
      onImport(navpoints);
    }
  }

  updateFilter = (value) => {
    this.setState({ filter: value });
  };

  fileParser = (file) => {
    console.log('File: ', file);

    const reader = new FileReader();

    // Filetype validation
    const allowedTypes = ['kml', 'json', 'geojson'];
    const fileType = file.name
      .split('.')
      .pop()
      .toLowerCase();

    if (allowedTypes.indexOf(fileType) > -1) {
      reader.type = file.type;
      reader.readAsText(file);

      reader.onloadstart = () => {
        this.setState({ loading: true });
      };

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

        this.setState({
          navpoints: result,
          loading: false,
        });
      };
    } else {
      alert('Filetype for selected file is not supported');
    }
  };

  updatePlan = (callback) => {
    const { plan } = this.state;

    // The callback will return a plan (modified) from a subcomponent
    const newPlan = callback(plan);

    console.log('New Plan: ', newPlan);
  };

  render() {
    const { plan, navpoints, loading, filter } = this.state;
    return (
      <Row gutter={8} className='advanced-form'>
        <Col className='gutter-row' span={24} md={24}>
          <NavActions handleFilterUpdate={this.updateFilter} handleFile={this.fileParser} />
          <NavItems
            data={navpoints}
            plan={plan}
            updatePlan={this.updatePlan}
            handleFile={this.fileParser}
            filter={filter}
          />
        </Col>
      </Row>
    );
  }
}

NavImport.propTypes = {
  onImport: PropTypes.func.isRequired,
};
