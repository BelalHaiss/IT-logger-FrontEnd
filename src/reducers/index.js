import logReducer from './logReducer';
import techReducer from './techReducer';
import alertReducer from './alertReducer.js';
import { combineReducers } from 'redux';
export default combineReducers({
  log: logReducer,
  tech: techReducer,
  alerts: alertReducer
});
