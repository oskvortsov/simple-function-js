const { fibonacci } = require('./index');

describe('fibonacci', () => {
  test('fibonacci(0)', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('fibonacci(1)', () => {
    expect(fibonacci(1)).toBe(1);
  });

  test('fibonacci(10)', () => {
    expect(fibonacci(10)).toBe(55);
  });

  test('fibonacci(20)', () => {
    expect(fibonacci(20)).toBe(6765);
  });

  test('fibonacci(77)', () => {
    expect(fibonacci(77)).toBe(5527939700884757);
  });
});
