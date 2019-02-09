import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';

export default class AirfieldSearchInput extends Component {
  state = {
    airfields: null,
  };

  componentDidMount() {
    const { airfields } = this.props;
    this.setState({ airfields });
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { airfields, airfieldOptions } = this.state;
    const { options } = this.props;
    if (airfields !== nextState.airfields) {
      return true;
    }
    if (airfieldOptions !== nextState.airfieldOptions) {
      return true;
    }
    if (options !== nextProps.options) {
      return true;
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const { airfields } = this.state;
    const { onChange, options } = this.props;

    if (airfields !== prevState.airfields) {
      onChange({ name: 'airfields', value: airfields });
    }

    if (options !== prevProps.options) {
      const airfieldOptions = options.map((airfield) => ({
        key: `${airfield.airfield_id}`,
        label: `${airfield.af_icao} (RWY ${airfield.af_rwy}) - ${airfield.af_name}`,
        value: airfield.airfield_id,
      }));

      this.setState(() => ({
        airfieldOptions: [...airfieldOptions],
      }));
    }
  }

  handleChange = ({ name, value }) => {
    const { airfields } = this.state;
    const { options } = this.props;
    const index = airfields.findIndex((field) => field.name === name);

    /* AIRFIELD DATA LOOKUP */
    const data = options.find((option) => option.airfield_id === value);
    const updatedAirfield = {
      id: value,
      icao: data.af_icao,
      tcn: data.af_tcn,
      gnd: data.af_gnd,
      twr: data.af_twr,
      elev: data.af_elev,
      rwy: data.af_rwy,
      ils: data.af_ils,
      ctrl: data.af_ctrl,
      len: data.af_rwy_length,
      lat: data.af_lat,
      lon: data.af_lon,
    };

    airfields[index] = Object.assign({}, airfields[index], updatedAirfield);

    this.setState(() => ({
      airfields: [...airfields],
    }));
  };

  render() {
    const { name, style } = this.props;
    const { airfields, airfieldOptions } = this.state;

    if (!airfields) return <p>Loading airfields...</p>;
    if (!airfieldOptions) return <p>Loading options...</p>;

    // Find the stored airfield...
    const airfield = airfields.find((field) => field.name === name);
    // ...match that airfield to our options, so that we can display the correct data
    const value = airfieldOptions.find((option) => option.key === airfield.id.toString());

    return (
      <SearchInput
        value={value.label ? value.label : ''}
        name={name}
        onChange={this.handleChange}
        data={airfieldOptions}
        style={style}
      />
    );
  }
}

AirfieldSearchInput.propTypes = {
  name: PropTypes.string.isRequired,
  airfields: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  style: PropTypes.object,
};

AirfieldSearchInput.defaultProps = {
  style: {},
};
