const { reverse } = require('./index');

describe('reverse', () => {
  test('reverse("abs") => "sba', () => {
    expect(reverse('abs')).toBe('sba');
  });

  test('reverse("") => "', () => {
    expect(reverse('')).toBe('');
  });
});
