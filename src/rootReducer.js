import { combineReducers } from 'redux';
import calendar from './ducks/Calendar';
import tasks from './ducks/Tasks';

const rootReducer = combineReducers({
  calendar,
  tasks,
});

export default rootReducer;
