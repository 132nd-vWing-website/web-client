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

  componentDidUpdate(prevProps, prevState) {
    const { airfields } = this.state;
    const { onChange, name } = this.props;

    if (airfields !== prevState.airfields) {
      // console.log('SearchInput: I should update my parent now!');
      onChange({ name, value: airfields });
    }
  }

  handleChange = ({ name, value }) => {
    console.log(name, value);

    const { airfields } = this.state;
    const index = airfields.findIndex((field) => field.key === name);

    airfields[index].icao = value;

    /* ALL AIRFIELD DATA LOOKUP AND POPULATION SHOULD HAPPEN HERE - AGAINST AIRFIELDS OPTIONS MAYBE?? */

    this.setState(() => ({
      airfields: [...airfields],
    }));
  };

  render() {
    const { options, name, style } = this.props;
    const { airfields } = this.state;

    if (!airfields) return <p>Loading...</p>;

    const airfield = airfields.find((field) => field.key === name);
    const { icao } = airfield;

    return (
      <SearchInput
        value={icao}
        name={name}
        onChange={this.handleChange}
        data={options}
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
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
};

AirfieldSearchInput.defaultProps = {
  style: {},
};
