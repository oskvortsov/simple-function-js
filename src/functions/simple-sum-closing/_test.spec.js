const { simpleSumClose } = require('./index');

describe('simpleSumClose', () => {
  test('simpleSumClose(1)(2)(3)()', () => {
    expect(simpleSumClose(1)(2)(3)()).toBe(6);
  });

  test('simpleSumClose(0)(-2)(1)()', () => {
    expect(simpleSumClose(0)(-2)(1)()).toBe(-1);
  });
});
