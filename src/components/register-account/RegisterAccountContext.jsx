import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import API_ROOT from '../../api-config';

/**
 * RegisterAccountContext
 * @array flightplan - An array containing a set of key:value pairs that make up the flightplan
 * @function setFlightplan - Updates the current Flightplan (Replaces it!)
 * @function setTaskingID - Sets a database-id for what will be used to populate the initial Flightplan
 */

export const RegisterAccountContext = React.createContext({
  callsign: '',
  email: '',
  password: '',
  password2: '',
  setCallsign: () => null,
  setEmail: () => null,
  setPassword: () => null,
  setPassword2: () => null,
  registerAccount: () => null,
});

export const RegisterAccountConsumer = RegisterAccountContext.Consumer;

export function RegisterAccountProvider({ children }) {
  const [callsign, setCallsign] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');

  const registerAccount = (accountData) =>
    new Promise((resolve) => {
      // axios
      //   .post(`${API_ROOT}/users/register`, accountData)
      //   .then((res) => {
      //     if (history) history.push('/login');
      //     resolve(res.status);
      //   })
      //   .catch(
      //     (err) => console.log(err.response.data),
      //     // dispatch({
      //     //   type: GET_ERRORS,
      //     //   payload: err.response.data,
      //     // }),
      //   );
      // resolve({ status: 200, msg: accountData });

      axios
        .post(`${API_ROOT}/users/register`, accountData)
        .then((res) => resolve({ status: res.status, data: res.data }))
        .catch((err) => resolve({ status: err.response.status, data: err.response.data }));
    });

  return (
    <RegisterAccountContext.Provider
      value={{
        callsign,
        email,
        password,
        password2,
        setCallsign,
        setEmail,
        setPassword,
        setPassword2,
        registerAccount,
      }}>
      {children}
    </RegisterAccountContext.Provider>
  );
}

RegisterAccountProvider.propTypes = {
  children: PropTypes.any,
};

RegisterAccountProvider.defaultProps = {
  children: {},
};
