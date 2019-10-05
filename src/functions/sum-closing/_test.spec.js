const { sumClosing } = require('./index');

describe('sumClosing', () => {
  test('sumClosing(1)(2)(3)', () => {
    expect(+sumClosing(1)(2)(3)).toBe(6);
  });

  test('summCloser(0)(-2)(1)', () => {
    expect(+sumClosing(0)(-2)(1)).toBe(-1);
  });
});
