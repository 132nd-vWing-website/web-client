import { GET_ALL_NOTAMS, GET_UNREAD_NOTAMS, CLEAR_CURRENT_NOTAMS } from '../actions/types';

const initialState = {
  notams_all: [],
  notams_unread: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_NOTAMS:
      return { ...state, notams_all: action.payload };
    case GET_UNREAD_NOTAMS:
      return { ...state, notams_unread: action.payload };
    case CLEAR_CURRENT_NOTAMS:
      return { ...state, notams_all: [], notams_unread: [] };
    default:
      return state;
  }
};
