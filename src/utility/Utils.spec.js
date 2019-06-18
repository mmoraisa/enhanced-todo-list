import * as Utils from './Utils';

describe('Utils', () => {

  describe('(Function) getDateKey', () => {

    it('getDateKey brings date key in the right pattern', () => {
      const date = new Date();
      expect(Utils.getDateKey(date)).toMatch(/\d{4}-\d{2}-\d{2}/);
    });

  });

  describe('(Function) getOrdinalSup', () => {

    const ordinals = ['th', 'st', 'nd', 'rd'];

    it("getOrdinalSup returns one of ordinal strings ['th', 'st', 'nd', 'rd']", () => {

      [...new Array(31)].forEach((i, index) => {
        expect(ordinals).toContain(Utils.getOrdinalSup(index + 1));
      });

    });

  });

});
