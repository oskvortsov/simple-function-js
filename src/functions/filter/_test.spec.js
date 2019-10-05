const { filter } = require('./index');

describe('filter', () => {
  test('filter([1, 2, 3, 4, 5, 6, 7, 8], n => n < 3))', () => {
    expect(filter([1, 2, 3, 4, 5, 6, 7, 8], n => n < 3)).toEqual([1, 2]);
  });

  test('filter([1, 2, 3, 4, 5, 6, 7, 8], n => n % 2 === 0))', () => {
    expect(filter([1, 2, 3, 4, 5, 6, 7, 8], n => n % 2 === 0)).toEqual([
      2,
      4,
      6,
      8,
    ]);
  });
});
