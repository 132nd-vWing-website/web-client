import { Select } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * @namespace SearchInput
 * @returns {object} { name, value }
 */
export default class SearchInput extends React.Component {
  state = {
    filtered: [],
    data: [],
    value: null,
  };

  componentDidMount() {
    const { data } = this.props;
    this.setState({ data, filtered: data });
  }

  componentDidUpdate(prevProps, prevState) {
    const { value } = this.state;
    const { name, onChange } = this.props;

    if (value !== prevState.value) {
      // console.log('SearchInput: I should update my parent now!');
      // onChange({ target: { name, value } });
      onChange({ name, value });
    }
  }

  handleSearch = (value) => {
    const { data } = this.state;
    const filteredData = data.filter(
      (f) => f.label.toLowerCase().indexOf(value.toLowerCase()) !== -1,
    );

    console.log(filteredData);

    this.setState(() => ({
      filtered: filteredData,
    }));
  };

  handleChange = (value) => {
    this.setState(() => ({
      value,
    }));
  };

  render() {
    const { filtered } = this.state;
    const { value, style, placeholder } = this.props;

    const options = filtered.map((d) => <Select.Option key={d.value}>{d.label}</Select.Option>);

    return (
      <Select
        showSearch
        value={value}
        placeholder={placeholder}
        style={style}
        onChange={this.handleChange}
        onSearch={this.handleSearch}
        notFoundContent={null}>
        {options}
      </Select>
    );

    // return (
    //   <Select
    //     showSearch
    //     value={value}
    //     placeholder={placeholder}
    //     style={style}
    //     defaultActiveFirstOption={false}
    //     showArrow={false}
    //     filterOption={false}
    //     onSearch={this.handleSearch}
    //     onChange={this.handleChange}
    //     notFoundContent={null}>
    //     {options}
    //   </Select>
    // );
  }
}

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  data: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
};

SearchInput.defaultProps = {
  style: {},
  value: '',
};

// <SearchInput
//   value={departureFieldObject.icao}
//   name='departure'
//   onChange={this.handleChange}
//   data={airfieldOptions}
// />
