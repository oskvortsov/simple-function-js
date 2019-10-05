const { reduce } = require('./index');

describe('reduce', () => {
  test('reduce([1, 2, 3, 4], (a, b) => a + b, 0)', () => {
    expect(reduce([1, 2, 3, 4], (a, b) => a + b, 0)).toBe(10);
  });

  test('reduce([1, 2], (a, b) => a + b)', () => {
    expect(reduce([1, 2], (a, b) => a + b)).toBe(3);
  });

  test('reduce(["a", "b", "c", "d"], (obj, name, index) => , obj[name] = index, {})', () => {
    function predicate(obj, name, index) {
      obj[name] = ++index;
      return obj;
    }

    expect(reduce(['a', 'b', 'c', 'd'], predicate, {})).toEqual({
      a: 1,
      b: 2,
      c: 3,
      d: 4,
    });
  });

  test('reduce([1, 2, 3, 4], (acc, item) => predicate, [4, 16])', () => {
    function predicate(acc, item) {
      if (item % 2 === 0) acc.push(item * item);
      return acc;
    }

    expect(reduce([1, 2, 3, 4], predicate, [])).toEqual([4, 16]);
  });
});
