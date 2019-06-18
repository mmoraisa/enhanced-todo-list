import { combineReducers } from 'redux';
import calendar from './ducks/Calendar';

const rootReducer = combineReducers({
  calendar,
});

export default rootReducer;
