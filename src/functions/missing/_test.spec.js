const { missing } = require('./index');

describe('missing', () => {
  test('missing([]) => undefined', () => {
    expect(missing([])).toBeUndefined();
  });

  test('missing([1, 4, 3]) => 2', () => {
    expect(missing([1, 4, 3])).toBe(2);
  });

  test('missing([2, 3, 4]) => 1', () => {
    expect(missing([2, 3, 4])).toBe(1);
  });

  test('missing([5, 1, 4, 2]) => 3', () => {
    expect(missing([5, 1, 4, 2])).toBe(3);
  });

  test('missing([1, 2, 3, 4]) => 3', () => {
    expect(missing([1, 2, 3, 4])).toBeUndefined();
  });
});
