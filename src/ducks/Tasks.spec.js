import Tasks,
  {
    ADD_TASK, addTask,
    UPDATE_TASK, updateTask,
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

        it('UPDATE_TASK add a new Task to data', () => {
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
