import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';
import PropTypes from 'prop-types';
import React from 'react';

export default function SaveButton(props) {
  const { name, value } = props;

  const Storage = window.localStorage;

  const handleClick = () => {
    // Check if localStorage is possible
    if (typeof Storage !== 'undefined') {
      // Check if localStorage allready has a value with the supplied name
      if (localStorage.getItem(name)) {
        // Give a warning about overwrite if it does
        console.log('A value with this name is allreadys stored. Do you want to overwrite?');
      }
      // Write to localStorage
      console.log('SAVING!');
      localStorage.setItem(name, JSON.stringify(value));
    } else {
      // Sorry! No Web Storage support..
      console.log('No Local Storage Possible...');
    }
  };

  return (
    <Button {...props} onClick={handleClick}>
      Save Plan
    </Button>
  );
}

SaveButton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
};

SaveButton.defaultProps = {
  value: null,
};
