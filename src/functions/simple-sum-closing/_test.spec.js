const { simpleSumClosing } = require('./index');

describe('simpleSumClosing', () => {
  test('simpleSumClosing(1)(2)(3)()', () => {
    expect(simpleSumClosing(1)(2)(3)()).toBe(6);
  });

  test('simpleSumClosing(0)(-2)(1)()', () => {
    expect(simpleSumClosing(0)(-2)(1)()).toBe(-1);
  });
});
