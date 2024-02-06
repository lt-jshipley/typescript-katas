// NOTE: this is the test file.

import { mathIt } from './06.testing-intro';

describe('When calling mathIt', () => {

  it('is able to add two number together', () => {
    // Arrange
    const valueA = 12;
    const valueB = 30;

    // Act
    const result = mathIt('add', valueA, valueB);

    // Assert
    expect(result).toBe(42);
  });

});