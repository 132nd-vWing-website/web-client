import React from 'react';
import Page from '../ui/Page';
import Steps from '../ui/Steps';

// Contexts
import { RegisterAccountProvider } from './RegisterAccountContext';

// Step Components
import RegisterStep from './RegisterStep';
import CheckEmailVerification from './CheckEmailVerification';
import LoginStep from './LoginStep';
import AddPilotStep from './AddPilotStep';

export default function RegisterAccount() {
  const [current, setCurrent] = React.useState(1); // TODO set this to 0

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
      title: 'Confirm E-mail',
      content: <CheckEmailVerification stepKey={1} currentStep={current} onNext={onNext} />,
    },
    {
      title: 'Log In',
      content: <LoginStep stepKey={2} currentStep={current} onNext={onNext} />,
    },
    {
      title: 'Add Pilot',
      content: <AddPilotStep stepKey={3} currentStep={current} onNext={onNext} />,
    },
  ];

  return (
    <Page title='Register Account'>
      <Steps current={current} steps={steps} />
      {steps[current].content}
    </Page>
  );
}
