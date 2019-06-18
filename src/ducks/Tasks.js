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
  data: {
    '2019-06-24': {
      '1': {
        id: 1,
        description: 'Et in magna dolore velit quis incididunt amet anim nulla aliqua sint. Officia nostrud occaecat magna aliqua dolor adipisicing ullamco veniam consequat eiusmod commodo et magna deserunt. Pariatur fugiat exercitation cillum dolore dolore adipisicing consectetur velit. Lorem veniam anim ut aliquip aliqua. Consectetur consequat laboris nostrud quis. Duis adipisicing deserunt enim cupidatat tempor fugiat proident anim sunt magna nisi. Dolore laborum incididunt ut cillum.',
        title: 'Reprehenderit eu proident Lorem non reprehenderit tempor.',
        done: true,
        time: {
          hour: '10',
          minute: '30',
          system: 'PM'
        }
      },
      '2': {
        id: 2,
        description: 'Esse cupidatat mollit velit irure mollit enim id cupidatat ullamco aliqua mollit voluptate exercitation. Qui dolore cillum veniam qui veniam aute ullamco exercitation quis. Sunt et consectetur consectetur qui incididunt.',
        title: 'Eiusmod sit enim deserunt occaecat officia aliquip aliqua ea nostrud eiusmod consectetur labore laborum.',
      }
    },
    '2019-06-03': {
      '3': {
        id: 3,
        description: 'Deserunt veniam fugiat duis laboris. Aliquip nostrud aliqua laboris est occaecat officia occaecat duis aliqua. Consectetur qui laborum excepteur cupidatat eu ea.',
        title: 'Anim veniam dolore',
      },
      '4': {
        id: 4,
        description: 'Tempor ullamco culpa eu magna. Officia est ut sunt consequat sit et aliqua quis esse. Magna enim ea fugiat cillum Lorem voluptate esse enim non occaecat dolore. Aliqua ullamco commodo ea ipsum id enim et ad exercitation cupidatat quis minim velit.',
        title: 'Voluptate mollit',
      }
    }
  },
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
