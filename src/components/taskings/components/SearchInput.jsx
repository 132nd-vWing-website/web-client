import { Select } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * @namespace SearchInput
 * @returns {object} { name, value }
 */
export default class SearchInput extends React.Component {
  state = {
    data: [],
    value: null,
  };

  componentDidMount() {
    const { data } = this.props;
    this.setState({ data });
  }

  componentDidUpdate(prevProps, prevState) {
    const { value } = this.state;
    const { name, onChange, data } = this.props;

    if (value !== prevState.value) {
      onChange({ name, value });
    }

    if (data !== prevProps.data) {
      this.setState(() => ({
        data: [...data],
      }));
    }
  }

  handleChange = (value) => {
    this.setState(() => ({
      value,
    }));
  };

  render() {
    const { value, style, placeholder } = this.props;
    const { data } = this.state;

    const options = data.map((d) => (
      <Select.Option key={d.key} value={d.value}>
        {d.label}
      </Select.Option>
    ));

    return (
      <Select
        showSearch
        value={value}
        placeholder={placeholder}
        style={style}
        onChange={this.handleChange}
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        showArrow={false}
        defaultActiveFirstOption={false}
        notFoundContent={null}>
        {options}
      </Select>
    );
  }
}

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  data: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
  placeholder: PropTypes.string,
};

SearchInput.defaultProps = {
  style: {},
  value: '',
  placeholder: 'Type to search...',
};
