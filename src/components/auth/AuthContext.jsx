/* eslint camelcase: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';

import API_ROOT from '../../api-config';

/**
 * AuthContext
 * @array flightplan - An array containing a set of key:value pairs that make up the flightplan
 * @function setFlightplan - Updates the current Flightplan (Replaces it!)
 * @function setTaskingID - Sets a database-id for what will be used to populate the initial Flightplan
 */

export const AuthContext = React.createContext({
  email: '',
  password: '',
  currentUser: null,
  setEmail: () => null,
  setPassword: () => null,
  setCurrentUser: () => null,
  clearCurrentUser: () => null,
  userLogin: () => null,
  userLogout: () => null,
});

export const AuthConsumer = AuthContext.Consumer;

export function AuthProvider({ children }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState(null);

  const userLogin = (userData) =>
    new Promise((resolve) => {
      axios
        .post(`${API_ROOT}/users/login`, userData)
        .then((res) => {
          // Save to localStorage
          const { token } = res.data;
          localStorage.setItem('jwtToken', token);

          // Set token to Auth header
          setAuthToken(token);

          // Decode token to get user data
          const decoded = jwt_decode(token);

          // Set current user
          setCurrentUser(decoded);

          // TODO: Get unread NOTAMS for user

          resolve({ status: 200, data: decoded });
        })
        .catch((err) => resolve({ status: err.response.status, data: err.response.data }));
    });

  return (
    <AuthContext.Provider
      value={{
        email,
        password,
        currentUser,
        setEmail,
        setPassword,
        setCurrentUser,
        userLogin,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.any,
};

AuthProvider.defaultProps = {
  children: {},
};
