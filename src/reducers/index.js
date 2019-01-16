import { combineReducers } from 'redux';

// Reducers
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import postReducer from './postReducer';
import staticsReducer from './staticsReducer';
import eventReducer from './eventReducer';
import missionReducer from './missionReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  posts: postReducer,
  statics: staticsReducer,
  events: eventReducer,
  missions: missionReducer,
});
