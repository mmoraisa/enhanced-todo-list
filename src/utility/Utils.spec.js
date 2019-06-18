import * as Utils from './Utils';

describe('Utils', () => {

  describe('(Function) getDateKey', () => {

    it('getDateKey brings date key in the right pattern', () => {
      const date = new Date();
      expect(Utils.getDateKey(date)).toMatch(/\d{4}-\d{2}-\d{2}/);
    });

  });

});
