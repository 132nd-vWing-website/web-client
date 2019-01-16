/* eslint no-alert: 0 */
import axios from 'axios';

import API_ROOT from './api-config';

import { MISSIONS_LOADING, GET_ALL_MISSIONS, GET_MISSION } from './types';

/**
 * MISSION(S) LOADING
 */
export const setMissionsLoading = () => ({
  type: MISSIONS_LOADING,
});

/**
 * GET ALL MISSIONS
 * @param {string} limit Number of missions to return
 * @param {bool} desc If true, orders the returned data in descending order by id
 */
export const getAllMissions = (limit, desc) => (dispatch) => {
  dispatch(setMissionsLoading());
  axios
    .get(`${API_ROOT}/missions/all?limit=${limit}&desc=${desc}`)
    .then((res) => dispatch({ type: GET_ALL_MISSIONS, payload: res.data }))
    .catch(() => dispatch({ type: GET_ALL_MISSIONS, payload: {} }));
};

/**
 * GET MISSION
 * @param {*} missionID  ID of mission to return
 */
export const getMission = (missionID) => (dispatch) => {
  dispatch(setMissionsLoading());
  axios
    .get(`${API_ROOT}/missions/mission?id=${missionID}`)
    .then((res) => dispatch({ type: GET_MISSION, payload: res.data }))
    .catch(() => dispatch({ type: GET_MISSION, payload: {} }));
};
