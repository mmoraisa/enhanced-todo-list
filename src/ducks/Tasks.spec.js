import Tasks, {
  ADD_TASK, addTask,
  DELETE_TASK, deleteTask,
  UPDATE_TASK, updateTask,
  UPDATE_TASK_STATUS, updateTaskStatus,
} from './Tasks';
import { getDateKey } from '../utility/Utils';
import { pureTaskObject } from '../classes/Task.mock';
import Task from '../classes/Task';

describe('(Ducks) Tasks', () => {

  describe('Action Creators', () => {

    it('addTask returns the correct Action Type', () => {
      expect(addTask().type)
        .toBe(ADD_TASK);
    });

    it('deleteTask returns the correct Action Type', () => {
      expect(deleteTask().type)
        .toBe(DELETE_TASK);
    });

    it('updateTaskStatus returns the correct Action Type', () => {
      expect(updateTaskStatus().type)
        .toBe(UPDATE_TASK_STATUS);
    });

    it('updateTask returns the correct Action Type', () => {
      expect(updateTask().type)
        .toBe(UPDATE_TASK);
    });

  });

  describe('Reducer', () => {

    it('returns state even if action is unknown', () => {
      const state = { sampleProperty: 'sampleValue' };

      expect(Tasks(state, {
        type: 'UNKNOWN_ACTION'
      })).toBe(state);
    });

    describe('State modifications', () => {

      describe('data', () => {

        it('ADD_TASK add a new Task to data', () => {
          const date = new Date();
          const dateKey = getDateKey(date);

          const state = {
            data: []
          };

          const dateObject = Tasks(state, {
            type: ADD_TASK,
            date,
            task: {
              description: pureTaskObject.description,
              title: pureTaskObject.title,
            },
          }).data[dateKey];

          const taskObject = dateObject[Object.keys(dateObject)[0]];

          expect(dateObject).toBeDefined();
          expect(taskObject).toBeInstanceOf(Task);
        });

        it('DELETE_TASK removes the Task from data', () => {
          const date = new Date();
          const dateKey = getDateKey(date);

          const state = {
            data: {
              [dateKey]: {
                [pureTaskObject.id]: new Task(
                  pureTaskObject.id,
                  pureTaskObject.description,
                  pureTaskObject.title
                )
              }
            }
          };

          const dateObject = Tasks(state, {
            type: DELETE_TASK,
            date,
            id: pureTaskObject.id
          }).data[dateKey];

          const taskObject = dateObject[pureTaskObject.id];

          expect(taskObject).toBeUndefined();
        });

        it('UPDATE_TASK_STATUS updates Task status in data', () => {
          const date = new Date();
          const dateKey = getDateKey(date);

          const state = {
            data: {
              [dateKey]: {
                [pureTaskObject.id]: new Task(
                  pureTaskObject.id,
                  pureTaskObject.description,
                  pureTaskObject.title
                )
              }
            }
          };

          const dateObject = Tasks(state, {
            type: UPDATE_TASK_STATUS,
            date,
            id: pureTaskObject.id,
            done: true,
          }).data[dateKey];

          const taskObject = dateObject[pureTaskObject.id];
          expect(taskObject.done).toBe(true);
        });

        it('UPDATE_TASK updates Task properties in data', () => {
          const date = new Date();
          const dateKey = getDateKey(date);

          const state = {
            data: {
              [dateKey]: {
                [pureTaskObject.id]: new Task(
                  pureTaskObject.id,
                  pureTaskObject.description,
                  pureTaskObject.title
                )
              }
            }
          };

          const newDescription = `${pureTaskObject.description} changed`;
          const newTitle = `${pureTaskObject.title} changed`;

          const dateObject = Tasks(state, {
            type: UPDATE_TASK,
            date,
            id: pureTaskObject.id,
            task: {
              description: newDescription,
              title: newTitle,
            },
          }).data[dateKey];

          const taskObject = dateObject[pureTaskObject.id];

          expect(taskObject).toBeInstanceOf(Task);
          expect(taskObject.description).toBe(newDescription);
          expect(taskObject.title).toBe(newTitle);
        });

      });

    });

  });

});
