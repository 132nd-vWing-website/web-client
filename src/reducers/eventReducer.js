import { EVENTS_LOADING, GET_ALL_EVENTS, GET_EVENT } from '../actions/types';

const initialState = {
  event: null,
  all: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EVENTS_LOADING:
      return { ...state, loading: true };
    case GET_ALL_EVENTS:
      return { ...state, all: action.payload, loading: false };
    case GET_EVENT:
      return { ...state, event: action.payload[0], loading: false };
    default:
      return state;
  }
};
