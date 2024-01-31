import { fizzBuzz } from './fizzBuzz'

describe('fizzBuzz', () => {
  it.each([
    1, 2, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14
  ])('should return the numeric value when the number is not divisible by 3 or 5', (given: number) => {
    const actual = fizzBuzz(given);
    expect(actual).toEqual(given);
  });

  it('should return fizz when the number is divisible by 3', () => {
    const actual = fizzBuzz(3);
    expect(actual).toEqual('fizz');
  });

  it('should return buzz when the number is divisible by 5', () => {
    const actual = fizzBuzz(5);
    expect(actual).toEqual('buzz');
  });

  it('should return fizzbuzz when the number is divisible by 3 and 5', () => {
    const actual = fizzBuzz(15);
    expect(actual).toEqual('fizzbuzz');
  });
});