const { indexOf } = require('./index');

describe('indexOf', () => {
  test('indexOf([1, 2, 3], 1)  => 1', () => {
    expect(indexOf([1, 2, 3], 1)).toBe(0);
  });

  test('indexOf([1, 2, 3], 4)  => -1', () => {
    expect(indexOf([1, 2, 3], 4)).toBe(-1);
  });
});
