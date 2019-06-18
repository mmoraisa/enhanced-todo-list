import uniqid from 'uniqid';
import { getDateKey } from '../utility/Utils';
import Task from '../classes/Task';

/* Action Types */
export const ADD_TASK = 'ADD_TASK';

/* Action Creators */
export const addTask = (date, task) => {
  return { type: ADD_TASK, date, task };
}

/* Initial State */
const INITIAL_STATE = {
  data: {}
};

/* Reducer */
export default function reducer(state = INITIAL_STATE, action) {

  const { date, task, type } = action;

  let dateKey;

  if(date) {
    dateKey = getDateKey(date);
  }

  switch(type) {
    case ADD_TASK:

      const taskId = uniqid();

      return {
        ...state,
        data: {
          ...state.data,
          [dateKey]: {
            ...state.data[dateKey],
            [taskId]: new Task(
              taskId,
              task.description,
              task.title
            )
          }
        }
      };
    default:
      return state;
  }

}
