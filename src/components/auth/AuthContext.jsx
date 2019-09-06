import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { Redirect } from 'react-router-dom';
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
  isAuth: false,
  currentUser: false,
  setEmail: () => null,
  setPassword: () => null,
  setisAuth: () => null,
  setCurrentUser: () => null,
  clearUser: () => null,
  loginUser: () => null,
  logoutUser: () => null,
});

// CONSUMER COMPONENT
export const AuthConsumer = AuthContext.Consumer;

// TODO - Possibly less-than-optimal way of setting current user outside the AuthProvider
let currentUserData = false;
export function isAuthenticated(decoded) {
  currentUserData = decoded;
}

// Check local storage for JWT Token to keep a loged in user authenticated
if (localStorage.jwtToken) {
  // Set auth token header
  setAuthToken(localStorage.jwtToken);

  // Decode token and get user info
  const decoded = jwtDecode(localStorage.jwtToken);

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    localStorage.removeItem('jwtToken');
    isAuthenticated(false);
    window.location.href = '/login';
  } else {
    // Set user and isAuthenticated
    isAuthenticated(decoded);

    // Get all NOTAMs
    // store.dispatch(getUnreadNotams());
  }
}

// PROVIDER COMPONENT
export function AuthProvider({ children }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState(currentUserData);

  const loginUser = (userData) =>
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
          const decoded = jwtDecode(token);

          // Set current user and authStatus
          setCurrentUser(decoded);

          // TODO: Get unread NOTAMS for user

          resolve({ status: 200, data: decoded });
        })
        .catch((err) => resolve({ status: err.response.status, data: err.response.data }));
    });

  const logoutUser = () => {
    localStorage.removeItem('jwtToken');
    setCurrentUser(false);
    window.location.href = '/';
  };

  return (
    <AuthContext.Provider
      value={{
        email,
        password,
        currentUser,
        setEmail,
        setPassword,
        setCurrentUser,
        loginUser,
        logoutUser,
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
