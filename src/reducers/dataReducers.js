import { GET_AIRFIELDS, DATA_LOADING } from '../actions/types';

const initialState = {
  loading: false,
  airfields: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_LOADING:
      return { ...state, loading: true };
    case GET_AIRFIELDS:
      return { ...state, airfields: action.payload, loading: false };
    default:
      return state;
  }
};
