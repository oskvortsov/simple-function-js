const {
  summRec,
  summCloser,
  isPrime,
  factorial,
  fib,
  isSorted,
  filter,
  reduce,
} = require('../simple-functions');

describe('summRec', () => {
  test('summRec(1)(2)(3)()', () => {
    expect(summRec(1)(2)(3)()).toBe(6);
  });

  test('summRec(0)(-2)(1)()', () => {
    expect(summRec(0)(-2)(1)()).toBe(-1);
  });
});

describe('summCloser', () => {
  test('summCloser(1)(2)(3)', () => {
    expect(+summCloser(1)(2)(3)).toBe(6);
  });

  test('summCloser(0)(-2)(1)', () => {
    expect(+summCloser(0)(-2)(1)).toBe(-1);
  });
});

describe('isPrime', () => {
  test('isPrime(0)', () => {
    expect(isPrime(0)).toBeFalsy();
  });

  test('isPrime(1)', () => {
    expect(isPrime(1)).toBeFalsy();
  });

  test('isPrime(17)', () => {
    expect(isPrime(17)).toBeTruthy();
  });

  test('isPrime(10000000000000)', () => {
    expect(isPrime(10000000000000)).toBeFalsy();
  });
});

describe('factorial', () => {
  test('factorial(0)', () => {
    expect(factorial(0)).toBe(1);
  });

  test('factorial(1)', () => {
    expect(factorial(1)).toBe(1);
  });

  test('factorial(6)', () => {
    expect(factorial(6)).toBe(720);
  });
});


describe('fib', () => {
  test('fib(0)', () => {
    expect(fib(0)).toBe(0);
  });

  test('fib(1)', () => {
    expect(fib(1)).toBe(1);
  });

  test('fib(10)', () => {
    expect(fib(10)).toBe(55);
  });

  test('fib(20)', () => {
    expect(fib(20)).toBe(6765);
  });

  test('fib(77)', () => {
    expect(fib(77)).toBe(5527939700884757);
  });
});

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

  test('isSorted([3, 9, -3, 10])', () => {
    expect(isSorted([3, 9, -3, 10])).toBeFalsy();
  });
});

describe('filter', () => {
  test('filter([1, 2, 3, 4, 5, 6, 7, 8], n => n < 3))', () => {
    expect(filter([1, 2, 3, 4, 5, 6, 7, 8], n => n < 3)).toEqual([1, 2]);
  });

  test('filter([1, 2, 3, 4, 5, 6, 7, 8], n => n % 2 === 0))', () => {
    expect(filter([1, 2, 3, 4, 5, 6, 7, 8], n => n % 2 === 0)).toEqual([2, 4, 6, 8]);
  });
});

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
      a: 1, b: 2, c: 3, d: 4,
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
