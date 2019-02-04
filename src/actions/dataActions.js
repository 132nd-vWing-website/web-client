/* eslint no-alert: 0 */
/* eslint import/prefer-default-export: 0 */
import axios from 'axios';

import API_ROOT from './api-config';

import { GET_AIRFIELDS, DATA_LOADING } from './types';

/**
 * DATA LOADING
 */
export const setDataLoading = () => ({
  type: DATA_LOADING,
});

/**
 * GET ALL AIRFIELDS
 */
export const getAirfields = () => (dispatch) => {
  dispatch(setDataLoading());
  axios
    .get(`${API_ROOT}/airfields`)
    .then((res) => dispatch({ type: GET_AIRFIELDS, payload: res.data }))
    .catch(() => dispatch({ type: GET_AIRFIELDS, payload: {} }));
};
