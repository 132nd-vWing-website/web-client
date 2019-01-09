import { createStore, applyMiddleware, compose } from "redux";

// Reducer
import rootReducer from "./reducers";

// Middleware
import thunk from "redux-thunk";
const middleware = [thunk];

// Temp initial state
const initialState = {};

// Enable redux devtools in chrome
// const reduxDevTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(applyMiddleware(...middleware), reduxDevTools)
// );

const composeSetup =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

let store = createStore(
  rootReducer,
  initialState,
  composeSetup(applyMiddleware(...middleware))
);

export default store;
