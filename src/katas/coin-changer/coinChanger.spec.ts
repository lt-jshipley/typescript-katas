import { coinChanger } from './coinChanger'

describe('Coin Changer', () => {

  describe('When dealing with single coin returns', () => {
    it('It returns a penny when asking for change from 1 cent', () => {
      // Act
      const result = coinChanger(1);
  
      // Expect
      expect(result).toEqual([ 1 ]);
    });
  });

  describe('When dealing with multiple coin returns', () => {  
    it('It returns the correct change when asking for change from 6 cent', () => {
      // Act
      const result = coinChanger(6);
  
      // Expect
      expect(result).toEqual([ 5, 1 ]);
    });
  });

});