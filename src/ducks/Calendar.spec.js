import Calendar, { CHANGE_DATE, changeDate } from './Calendar';

describe('(Ducks) Calendar', () => {

  describe('Action Creators', () => {

    it('changeDate returns the correct Action Type', () => {
      expect(changeDate().type)
        .toBe(CHANGE_DATE);
    });

  });

  describe('Reducer', () => {

    it('returns state even if action is unknown', () => {
      const state = { sampleProperty: 'sampleValue' };

      expect(Calendar(state, {
        type: 'UNKNOWN_ACTION'
      })).toBe(state);
    });

    describe('State modifications', () => {

      describe('selectedDate', () => {

        it('CHANGE_DATE sets selectedDate', () => {
          const date = new Date();

          const state = {
            selectedDate: null
          };

          expect(Calendar(state, {
            type: CHANGE_DATE,
            selectedDate: date,
          }).selectedDate).toBe(date);
        });

      });

    });

  });

});
