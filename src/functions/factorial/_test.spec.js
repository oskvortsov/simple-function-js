const { factorial } = require('./index');

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
