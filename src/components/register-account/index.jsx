import React from 'react';
import Page from '../ui/Page';
import Button from '../ui/Button';

import { RegisterAccountProvider } from './RegisterAccountContext';

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
      content: (
        <React.Fragment>
          <p>
            Registration succsessful! Please click the link in the registration email before
            continuing
          </p>
          <Button type='primary' onClick={() => onNext(0)}>
            Next
          </Button>
        </React.Fragment>
      ),
    },
    {
      title: 'Log In',
      content: <LoginStep stepKey={2} currentStep={current} onNext={onNext} />,
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
