import { GET_ALL_FRONTPAGESLIDERS, GET_ERRORS } from "../actions/types";

const initialState = {
  frontpageSliders: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_FRONTPAGESLIDERS:
      return { ...state, frontpageSliders: action.payload };
    default:
      return state;
  }
};
