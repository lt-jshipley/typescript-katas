import { coinChanger } from './coinChanger'

describe('Coin Changer', () => {
  it('It returns a penny when asking for change from 1 cent', () => {
    const result = coinChanger(1);
    expect(result).toEqual([1]);
  });
})