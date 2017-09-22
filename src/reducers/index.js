import { combineReducers } from 'redux';
import track from './track';
import auth from './auth';

export default combineReducers({
  auth,
  track,
});
