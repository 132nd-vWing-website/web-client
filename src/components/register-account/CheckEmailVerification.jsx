import React from 'react';
import PropTypes from 'prop-types';
import Button from '../ui/Button';

export default function CheckEmailVerification({ onNext }) {
  return (
    <React.Fragment>
      <p>
        Registration succsessful! Please click the link in the registration email before continuing
      </p>

      <Button type='primary' onClick={() => onNext(0)}>
        Next
      </Button>
    </React.Fragment>
  );
}

CheckEmailVerification.propTypes = {
  onNext: PropTypes.func,
};

CheckEmailVerification.defaultProps = {
  onNext: () => null,
};
