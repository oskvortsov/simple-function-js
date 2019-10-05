const { isPrime } = require('./index');

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
