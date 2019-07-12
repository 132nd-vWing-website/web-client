import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';

import './theme.css';

export default function AirfieldSelector({ name, label, id, placeholder, onChange, data }) {
  const [value, setValue] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([]);

  // Function for calculating suggestion for any given input value
  const getSuggestions = (input) => {
    const inputValue = input.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : data.filter((item) => item.af_icao.toLowerCase().slice(0, inputLength) === inputValue);
  };

  // Autosuggest needs to populate the input based on the clicked suggestion
  const getSuggestionValue = (suggestion) => suggestion.af_icao;

  // A function for declaring how each suggestion should be presented
  const renderSuggestion = (suggestion) => {
    const str = `${suggestion.af_icao} - ${suggestion.af_name} RWY${suggestion.af_rwy}`;
    return <div>{str}</div>;
  };

  // Handle value updates
  const handleChange = (event, { newValue }) => {
    console.log(newValue)
    setValue(newValue);
  };

  // Update suggestions as we get input
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  // Function to clear suggestions
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    const e = {
      target: {
        name,
        value: suggestion
      }
    }
    onChange(e)
  }

  // Props to pass down to the input field
  const inputProps = {
    placeholder,
    value,
    onChange: handleChange,
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      onSuggestionSelected={onSuggestionSelected}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
}

AirfieldSelector.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  data: PropTypes.array.isRequired,
};

AirfieldSelector.defaultProps = {
  name: Date.now().toString(),
  label: null,
  id: Date.now().toString(),
  placeholder: null,
  onChange: () => null,
};
