import uniqid from 'uniqid';
import { getDateKey } from '../utility/Utils';
import Task from '../classes/Task';

/* Action Types */
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const UPDATE_TASK_STATUS = 'UPDATE_TASK_STATUS';

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

export const updateTaskStatus = (date, id, done) => {
  return { type: UPDATE_TASK_STATUS, date, id, done };
}

/* Initial State */
const INITIAL_STATE = {
  data: {
    '2019-06-24': {
      '1': new Task(
        1,
        'Eiusmod minim sint do et id nisi enim dolor id. Consectetur in nostrud sit tempor aliquip officia nostrud enim fugiat sit amet incididunt excepteur ullamco. Ad velit mollit consectetur magna culpa. Nostrud incididunt nulla et tempor ut ipsum aliquip qui qui ad incididunt eu qui.',
        'Esse Lorem anim elit consequat cupidatat tempor dolore nisi cillum.',
        {
          hour: '10',
          minute: '30',
          system: 'PM',
        }
      ),
      '2': new Task(
        2,
        'Voluptate irure magna voluptate adipisicing voluptate ipsum est id. Culpa qui Lorem minim in esse exercitation. Culpa laboris aute ullamco fugiat. Laborum veniam consectetur consectetur nostrud commodo proident sit qui consectetur eiusmod aute.',
        'Amet veniam eu ad mollit ex reprehenderit incididunt culpa.'
      ),
      '3': new Task(
        3,
        'Voluptate irure magna voluptate adipisicing voluptate ipsum est id. Culpa qui Lorem minim in esse exercitation. Culpa laboris aute ullamco fugiat. Laborum veniam consectetur consectetur nostrud commodo proident sit qui consectetur eiusmod aute.',
        'Amet veniam eu ad mollit ex reprehenderit incididunt culpa.'
      ),
      '4': new Task(
        4,
        'Voluptate irure magna voluptate adipisicing voluptate ipsum est id. Culpa qui Lorem minim in esse exercitation. Culpa laboris aute ullamco fugiat. Laborum veniam consectetur consectetur nostrud commodo proident sit qui consectetur eiusmod aute.',
        'Amet veniam eu ad mollit ex reprehenderit incididunt culpa.'
      )
    }
  },
};

/* Reducer */
export default function reducer(state = INITIAL_STATE, action) {

  const { _, date, done, id, task, type } = action;

  let foundTask,
      dateKey;

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
    case UPDATE_TASK_STATUS:

      foundTask = state.data[dateKey][id];
      foundTask.setDone(done);

      return {
        ...state,
        data: {
          ...state.data,
          [dateKey]: {
            ...state.data[dateKey],
            [id]: foundTask,
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
