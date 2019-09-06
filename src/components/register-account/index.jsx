import React from 'react';
import Page from '../ui/Page';
import Button from '../ui/Button';

// Contexts
import { RegisterAccountProvider } from './RegisterAccountContext';

// Step Components
import RegisterStep from './RegisterStep';
import CheckEmailVerification from './CheckEmailVerification';
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
