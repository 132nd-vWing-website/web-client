/* eslint no-alert: 0 */
import axios from 'axios';

import API_ROOT from './api-config';

import {
  GET_PROFILE,
  PROFILE_LOADING,
  GET_ERRORS,
  CLEAR_CURRENT_PROFILE,
  SET_CURRENT_USER,
  GET_PROFILES,
} from './types';

// Profile Loading
export const setProfileLoading = () => ({
  type: PROFILE_LOADING,
});

// Get all profiles
export const getProfiles = () => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get(`${API_ROOT}/profile/all`)
    .then((res) => dispatch({ type: GET_PROFILES, payload: res.data }))
    .catch(() => dispatch({ type: GET_PROFILES, payload: {} }));
};

// Get Current Profile
export const getCurrentProfile = () => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get(`${API_ROOT}/profile`)
    .then((res) => dispatch({ type: GET_PROFILE, payload: res.data }))
    .catch(() => dispatch({ type: GET_PROFILE, payload: {} }));
};

// Get Profile by Handle
export const getProfileByHandle = (handle) => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get(`${API_ROOT}/profile/handle/${handle}`)
    .then((res) => dispatch({ type: GET_PROFILE, payload: res.data }))
    .catch(() => dispatch({ type: GET_PROFILE, payload: null }));
};

// Create profile
export const createProfile = (profileData, history) => (dispatch) => {
  axios
    .post(`${API_ROOT}/profile`, profileData)
    .then(() => history.push('/dashboard'))
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Clear Profile
export const clearCurrentProfile = () => ({
  type: CLEAR_CURRENT_PROFILE,
});

// Add experience
export const addExperience = (expData, history) => (dispatch) => {
  axios
    .post(`${API_ROOT}/profile/experience`, expData)
    .then(() => history.push('/dashboard'))
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Add education
export const addEducation = (eduData, history) => (dispatch) => {
  axios
    .post(`${API_ROOT}/profile/education`, eduData)
    .then(() => history.push('/dashboard'))
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Delete an experience
export const deleteExperience = (id) => (dispatch) => {
  axios
    .delete(`${API_ROOT}/profile/experience/${id}`)
    .then((res) => dispatch({ type: GET_PROFILE, payload: res.data }))
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Delete an education
export const deleteEducation = (id) => (dispatch) => {
  axios
    .delete(`${API_ROOT}/profile/education/${id}`)
    .then((res) => dispatch({ type: GET_PROFILE, payload: res.data }))
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Delete account & profile
export const deleteAccount = () => (dispatch) => {
  if (window.confirm('Are you sure you want to delete your account? This can NOT be undone!')) {
    axios
      .delete(`${API_ROOT}/profile`)
      .then(() => dispatch({ type: SET_CURRENT_USER, payload: {} }))
      .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
  }
};
