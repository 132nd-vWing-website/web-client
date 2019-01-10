/* eslint import/prefer-default-export: off */
import axios from 'axios';

import { GET_ALL_FRONTPAGESLIDERS, GET_ERRORS } from './types';

// Get all Frontpage Slider Documents from Sanity
export const getSliders = () => (dispatch) => {
  axios
    .get('/statics/frontpagesliders')
    .then((res) => dispatch({ type: GET_ALL_FRONTPAGESLIDERS, payload: res.data }))
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};
