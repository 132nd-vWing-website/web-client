import { MISSIONS_LOADING, GET_ALL_MISSIONS, GET_MISSION } from '../actions/types';

const initialState = {
  mission: null,
  all: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MISSIONS_LOADING:
      return { ...state, loading: true };
    case GET_ALL_MISSIONS:
      return { ...state, all: action.payload, loading: false };
    case GET_MISSION:
      return { ...state, mission: action.payload[0], loading: false };
    default:
      return state;
  }
};
