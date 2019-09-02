import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import API_ROOT from '../../api-config';

/**
 * UserLoginContext
 * @array flightplan - An array containing a set of key:value pairs that make up the flightplan
 * @function setFlightplan - Updates the current Flightplan (Replaces it!)
 * @function setTaskingID - Sets a database-id for what will be used to populate the initial Flightplan
 */

export const UserLoginContext = React.createContext({
  email: '',
  password: '',
  setEmail: () => null,
  setPassword: () => null,
  userLogin: () => null,
});

export const UserLoginConsumer = UserLoginContext.Consumer;

export function UserLoginProvider({ children }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const userLogin = (accountData) =>
    new Promise((resolve) => {
      //   axios
      //     .post(`${API_ROOT}/users/register`, accountData)
      //     .then((res) => resolve({ status: res.status, data: res.data }))
      //     .catch((err) => resolve({ status: err.response.status, data: err.response.data }));
      //

      // TEST
      resolve({ status: 200, data: { msg: 'it werks' } });
    });

  return (
    <UserLoginContext.Provider
      value={{
        email,
        password,
        setEmail,
        setPassword,
        userLogin,
      }}>
      {children}
    </UserLoginContext.Provider>
  );
}

UserLoginProvider.propTypes = {
  children: PropTypes.any,
};

UserLoginProvider.defaultProps = {
  children: {},
};
