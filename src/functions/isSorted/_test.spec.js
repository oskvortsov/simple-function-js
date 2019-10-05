const { isSorted } = require('./index');

describe('isSorted', () => {
  test('isSorted([])', () => {
    expect(isSorted([])).toBeTruthy();
  });

  test('isSorted([-Infinity, -5, 0, 3, 9])', () => {
    expect(isSorted([-Infinity, -5, 0, 3, 9])).toBeTruthy();
  });

  test('isSorted([9, 3, 1])', () => {
    expect(isSorted([9, 3, 1])).toBeTruthy();
  });

  test('isSorted([-1, -1, 1, 0])', () => {
    expect(isSorted([-1, -1, 1, 0])).toBeFalsy();
  });

  test('isSorted([0, 0, 0, -1])', () => {
    expect(isSorted([0, 0, 0, -1])).toBeTruthy();
  });

  test('isSorted([0, 0, 0, -1, 1])', () => {
    expect(isSorted([0, 0, 0, -1, 1])).toBeFalsy();
  });

  test('isSorted([3, 9, -3, 10])', () => {
    expect(isSorted([3, 9, -3, 10])).toBeFalsy();
  });
});
