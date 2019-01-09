import axios from "axios";

import { API_ROOT } from "./api-config";

import {
  GET_ERRORS,
  GET_ALL_NOTAMS,
  GET_UNREAD_NOTAMS,
  CLEAR_CURRENT_NOTAMS
} from "./types";

// Get all NOTAMS
export const getNotams = () => dispatch => {
  axios
    .get(`${API_ROOT}/notams`)
    .then(res => dispatch({ type: GET_ALL_NOTAMS, payload: res.data }))
    .catch(err => dispatch({ type: GET_ALL_NOTAMS, payload: {} }));
};

// Get all unread NOTAMS
export const getUnreadNotams = () => dispatch => {
  axios
    .get(`${API_ROOT}/notams/unread`)
    .then(res => dispatch({ type: GET_UNREAD_NOTAMS, payload: res.data }))
    .catch(err => dispatch({ type: GET_UNREAD_NOTAMS, payload: [] }));
};

// Create a NOTAM
export const createNotam = notamData => dispatch => {
  axios
    .post(`${API_ROOT}/notams/`, notamData)
    // .then(res => history.push("/dashboard"))
    .then(res => dispatch({ type: GET_ALL_NOTAMS, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Update a NOTAM
export const updateNotam = notamData => dispatch => {
  axios
    .put(`${API_ROOT}/notams/`, notamData)
    .then(res => {
      console.log(res);
      dispatch({ type: GET_ALL_NOTAMS, payload: res.data });
    })
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Clear notams - user logged out
export const clearCurrentNotams = () => {
  return {
    type: CLEAR_CURRENT_NOTAMS
  };
};

// Removes a notam from the users's unread list
export const readNotam = id => dispatch => {
  axios
    .delete(`${API_ROOT}/notams/unread/${id}`)
    .then(res => {
      dispatch({ type: GET_UNREAD_NOTAMS, payload: res.data });
    })
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// TODO: DELETE A NOTAM
// Add education
export const deleteNotam = id => dispatch => {
  axios
    .delete(`${API_ROOT}/notams/${id}`)
    // .then(res => history.push("/dashboard"))
    .then(res => dispatch({ type: GET_ALL_NOTAMS, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};
