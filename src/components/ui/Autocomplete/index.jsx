import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';

import './theme.css';

/** NOTE! THIS COMPONENT EXPECTS AN ARRAY OF OBJECTS IN ACCORDANCE WITH THE BELOW FORMAT!
 * For any data sorted without a 'name' key, please use this component as a template for writing a custom lookup.
 * See <AirfieldSelector /> for an example
 *
 * Example Template:
 *     data = [
 *        {
 *          name: 'London'
 *        },
 *        {
 *          name: 'Paris'
 *        }
 *        ...
 *    ]
 */

export default function Autocomplete({ name, label, id, placeholder, onChange, data }) {
  const [value, setValue] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([]);
  React.useEffect(() => {
    const e = {
      target: {
        name,
        value,
      },
    };
    onChange(e);
  }, [value]);

  // Function for calculating suggestion for any given input value
  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : data.filter((item) => item.name.toLowerCase().slice(0, inputLength) === inputValue);
  };

  // Autosuggest needs to populate the input based on the clicked suggestion
  const getSuggestionValue = (suggestion) => suggestion.name;

  // A function for declaring how each suggestion should be presented
  const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

  // Handle value updates
  const handleChange = (event, { newValue }) => {
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
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
}

Autocomplete.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Autocomplete.defaultProps = {
  name: Date.now().toString(),
  label: null,
  id: Date.now().toString(),
  placeholder: null,
  onChange: () => null,
};
