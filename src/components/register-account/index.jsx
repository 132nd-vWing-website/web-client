import React from 'react';
import Page from '../ui/Page';
import Button from '../ui/Button';

import { RegisterAccountProvider } from './RegisterAccountContext';
import { UserProvider } from '../user/UserContext';

import RegisterStep from './RegisterStep';
import LoginStep from './LoginStep';

export default function RegisterAccount() {
  const [current, setCurrent] = React.useState(0);

  const onNext = () => {
    setCurrent(current + 1);
  };

  const steps = [
    {
      title: 'Register',
      content: (
        <RegisterAccountProvider>
          <RegisterStep stepKey={0} currentStep={current} onNext={onNext} />
        </RegisterAccountProvider>
      ),
    },
    {
      title: 'Confirming email',
      content: <CheckEmailVerification stepKey={1} currentStep={current} onNext={onNext} />,
    },
    {
      title: 'Log In',
      content: (
        <UserProvider>
          <LoginStep stepKey={2} currentStep={current} onNext={onNext} />
        </UserProvider>
      ),
    },
    {
      title: 'Create Profile',
      content: (
        <React.Fragment>
          <p>Create Profile</p>
          <Button type='primary' onClick={() => setCurrent(0)}>
            RESET
          </Button>
        </React.Fragment>
      ),
    },
  ];

  return <Page title='Register Account'>{steps[current].content}</Page>;
}

function CheckEmailVerification({ onNext }) {
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
