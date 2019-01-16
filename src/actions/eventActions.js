/* eslint no-alert: 0 */
import axios from 'axios';

import API_ROOT from './api-config';

import { EVENTS_LOADING, GET_ALL_EVENTS, GET_EVENT } from './types';

/**
 * EVENTS(S) LOADING
 */
export const setEventsLoading = () => ({
  type: EVENTS_LOADING,
});

/**
 * GET ALL EVENTS
 * @param {string} limit Number of events to return
 * @param {bool} desc If true, orders the returned data in descending order by id
 */
export const getAllEvents = (limit, desc) => (dispatch) => {
  dispatch(setEventsLoading());
  axios
    .get(`${API_ROOT}/events/all?limit=${limit}&desc=${desc}`)
    .then((res) => dispatch({ type: GET_ALL_EVENTS, payload: res.data }))
    // .then((res) => console.log(res.data))
    .catch(() => dispatch({ type: GET_ALL_EVENTS, payload: {} }));
};

/**
 * GET EVENT
 * @param {*} eventId  ID of event to return
 */
export const getEvent = (eventId) => (dispatch) => {
  dispatch(setEventsLoading());
  axios
    .get(`${API_ROOT}/events/event?id=${eventId}`)
    .then((res) => dispatch({ type: GET_EVENT, payload: res.data }))
    .catch(() => dispatch({ type: GET_EVENT, payload: {} }));
};
