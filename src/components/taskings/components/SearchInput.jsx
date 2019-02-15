import { Select } from 'antd';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

/**
 * @namespace SearchInput
 * @returns {object} { name, value }
 */
function SearchInput(props) {
  const { name, onChange, style, placeholder, data, value } = props;

  const [result, setResult] = useState(null);
  useEffect(
    () => {
      if (result) onChange({ name, value: result });
    },
    [result],
  );

  const [options, setOptions] = useState(null);
  useEffect(
    () => {
      setOptions(
        data.map((d) => (
          <Select.Option key={d.key} value={d.value}>
            {d.label}
          </Select.Option>
        )),
      );
    },
    [data],
  );

  return (
    <Select
      showSearch
      value={result || value}
      placeholder={placeholder}
      style={style}
      onChange={(input) => setResult(input)}
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

export default SearchInput;
