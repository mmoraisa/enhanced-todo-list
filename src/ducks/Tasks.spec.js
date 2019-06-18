import Tasks, { ADD_TASK, addTask } from './Tasks';
import { getDateKey } from '../utility/Utils';
import { pureTaskObject } from '../classes/Task.mock';
import Task from '../classes/Task';

describe('(Ducks) Tasks', () => {

  describe('Action Creators', () => {

    it('addTask returns the correct Action Type', () => {
      expect(addTask().type)
        .toBe(ADD_TASK);
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

      });

    });

  });

});
