import React from 'react';
import RegisterPilot from '../register-pilot';

// Contexts
import { AuthContext } from '../auth/AuthContext';

export default function AddPilotStep() {
  const { checkAuth } = React.useContext(AuthContext);

  // Check that the user is actually logged in
  if (!checkAuth()) return null;

  // TODO - Check if the user somehow has an active pilot profile allready?

  return (
    <React.Fragment>
      <p>
        Welcome! Your account is now created and you are successfully logged into your account. Next
        step is to create a Pilot profile and apply for a squadron.
      </p>
      <RegisterPilot />
    </React.Fragment>
  );
}
