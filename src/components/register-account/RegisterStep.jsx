import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Form from '../ui/Form';
import Input from '../ui/Input';
import Button from '../ui/Button';

import { RegisterAccountContext } from './RegisterAccountContext';

const PageIngress = styled.div`
  margin-bottom: 1em;
`;

export default function RegisterStep({ stepKey, currentStep, onNext }) {
  const {
    callsign,
    email,
    password,
    password2,
    setCallsign,
    setEmail,
    setPassword,
    setPassword2,
    registerAccount,
  } = React.useContext(RegisterAccountContext);

  const [errors, setErrors] = React.useState(null);

  const handleSubmit = () => {
    const newAccount = { callsign, email, password, password2 };
    const status = registerAccount(newAccount);

    status.then((res) => {
      switch (res.status) {
        case 200:
          // All is ok - lets move on!
          console.log('alles gut!');
          onNext();
          break;
        case 400:
          // Validation or data error. Show any errors to user
          setErrors(res.data);
          break;
        default:
          break;
      }
    });
  };

  const getError = (key) => {
    if (errors) return errors[key];
    return null;
  };

  let blockNext = true;
  if (currentStep <= stepKey) blockNext = false;

  const mailRegExPattern =
    "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

  return (
    <React.Fragment>
      <PageIngress>
        <p>
          An account is needed in order to create a pilot profile and be able to apply for
          squadrons, events etc.
        </p>
        <p>Create your account by filling out the form below:</p>
      </PageIngress>
      <Form title='Account Information'>
        <Input
          id='account-callsign'
          required
          onChange={(e) => setCallsign(e.target.value)}
          name='accountCallsign'
          label='Callsign:'
          error={getError('callsign')}
        />
        <Input
          id='account-username'
          required
          pattern={mailRegExPattern}
          onChange={(e) => setEmail(e.target.value)}
          name='email'
          label='E-Mail (Username):'
          error={getError('email')}
        />
        <Input
          id='account-password'
          required
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          name='password'
          label='Password'
          error={getError('password')}
          minlength='6'
        />
        <Input
          id='account-password-check'
          required
          onChange={(e) => setPassword2(e.target.value)}
          type='password'
          name='password2'
          label='Confirm Password:'
          error={getError('password2')}
          minlength='6'
        />
      </Form>
      <Button type='primary' disabled={blockNext} onClick={() => handleSubmit()}>
        Next
      </Button>
      {/* <Button type='primary' disabled={blockNext} onClick={() => onNext()}>
        Next
      </Button> */}
    </React.Fragment>
  );
}

RegisterStep.propTypes = {
  stepKey: PropTypes.number,
  currentStep: PropTypes.number,
  onNext: PropTypes.func,
};

RegisterStep.defaultProps = {
  stepKey: 0,
  currentStep: 0,
  onNext: () => null,
};
