import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';
import PropTypes from 'prop-types';
import React from 'react';

export default function LoadButton(props) {
  const { name, onLoad } = props;

  const Storage = window.localStorage;

  const handleClick = () => {
    // Check if localStorage is possible
    if (typeof Storage !== 'undefined') {
      // Check if localStorage has a value with the supplied name
      if (localStorage.getItem(name)) {
        // Retrieve the data, and return it to the supplied onLoad function
        const data = localStorage.getItem(name);
        onLoad(JSON.parse(data));
      } else {
        console.log('No data with the supplied name exists...');
      }
    } else {
      // Sorry! No Web Storage support..
      console.log('No Local Storage Available...');
    }
  };

  return (
    <Button {...props} onClick={handleClick}>
      Load Plan
    </Button>
  );
}

LoadButton.propTypes = {
  name: PropTypes.string.isRequired,
  onLoad: PropTypes.func,
};

LoadButton.defaultProps = {
  onLoad: () => null,
};
