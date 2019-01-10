/* eslint camelcase: 0 */
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';

import API_ROOT from './api-config';

import { GET_ERRORS, SET_CURRENT_USER } from './types';

import { getUnreadNotams, clearCurrentNotams } from './postActions';

// Set logged in user
export const setCurrentUser = (decoded) => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});

// Register User action
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post('/api/users/register', userData)
    .then(() => history.push('/login'))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      }),
    );
};

// Login - Get User Token
export const loginUser = (userData) => (dispatch) => {
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
      dispatch(setCurrentUser(decoded));

      // Get unread NOTAMS for user
      dispatch(getUnreadNotams());
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      }),
    );
};

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set the current user to {} which will also set isAuthenticated to false
  dispatch(setCurrentUser({}));
  // Remove NOTAMs
  dispatch(clearCurrentNotams());
};
