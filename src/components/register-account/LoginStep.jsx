import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Form from '../ui/Form';
import Input from '../ui/Input';
import Button from '../ui/Button';

import { UserLoginContext } from '../user-login/UserLoginContext';

const PageIngress = styled.div`
  margin-bottom: 1em;
`;

export default function LoginStep({ stepKey, currentStep, onNext }) {
  const { name, email, password, password2, setEmail, setPassword, userLogin } = React.useContext(
    UserLoginContext,
  );

  const [errors, setErrors] = React.useState(null);

  const handleSubmit = () => {
    const newAccount = { name, email, password, password2 };
    const status = userLogin(newAccount);

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
        <p>Log in to your new account to continue:</p>
      </PageIngress>
      <Form title='Log In'>
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
      </Form>
      {/* <Button type='primary' disabled={blockNext} onClick={() => handleSubmit()}>
        Next
      </Button> */}
      <Button type='primary' disabled={blockNext} onClick={() => onNext()}>
        Next
      </Button>
    </React.Fragment>
  );
}

LoginStep.propTypes = {
  stepKey: PropTypes.number,
  currentStep: PropTypes.number,
  onNext: PropTypes.func,
};

LoginStep.defaultProps = {
  stepKey: 0,
  currentStep: 0,
  onNext: () => null,
};
