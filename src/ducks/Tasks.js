import uniqid from 'uniqid';
import { getDateKey } from '../utility/Utils';
import Task from '../classes/Task';

/* Action Types */
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

/* Action Creators */
export const addTask = (date, task) => {
  return { type: ADD_TASK, date, task };
}

export const deleteTask = (date, id) => {
  return { type: DELETE_TASK, date, id };
}

export const updateTask = (date, id, task) => {
  return { type: UPDATE_TASK, date, id, task };
}

/* Initial State */
const INITIAL_STATE = {
  data: {}
};

/* Reducer */
export default function reducer(state = INITIAL_STATE, action) {

  const { _, date, id, task, type } = action;

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
          },
        },
      };
    case DELETE_TASK:
      return {
        ...state,
        data: {
          ...state.data,
          [dateKey]: {
            ...state.data[dateKey],
            [id]: _,
          },
        },
      };
    case UPDATE_TASK:
      return {
        ...state,
        data: {
          ...state.data,
          [dateKey]: {
            ...state.data[dateKey],
            [id]: new Task(
              id,
              task.description,
              task.title
            )
          },
        },
      };
    default:
      return state;
  }

}
