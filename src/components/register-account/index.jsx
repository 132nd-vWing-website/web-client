import React from 'react';
import Page from '../ui/Page';
import Button from '../ui/Button';

import { RegisterAccountProvider } from './RegisterAccountContext';

import RegisterStep from './RegisterStep';

export default function RegisterAccount() {
  const [current, setCurrent] = React.useState(0);

  const onNext = () => {
    setCurrent(current + 1);
  };

  const steps = [
    {
      title: 'Register Account',
      content: (
        <RegisterAccountProvider>
          <RegisterStep stepKey={0} currentStep={current} onNext={onNext} />
        </RegisterAccountProvider>
      ),
    },
    {
      title: 'Notice on confirming email',
      content: (
        <React.Fragment>
          <p>
            Registration succsessful! Please click the link in the registration email before
            continuing
          </p>
          <Button type='primary' onClick={() => setCurrent(0)}>
            DEBUG - RESET
          </Button>
        </React.Fragment>
      ),
    },
  ];

  return <Page title='Register Account'>{steps[current].content}</Page>;
}
