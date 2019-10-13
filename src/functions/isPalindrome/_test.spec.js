const { isPalindrome } = require('./index');

describe('isPalindrome', () => {
  test('isPalindrome("") => true ', () => {
    expect(isPalindrome('')).toBeTruthy();
  });

  test('isPalindrome("abcdcba") => true ', () => {
    expect(isPalindrome('abcdcba')).toBeTruthy();
  });

  test('isPalindrome("abcd") => true ', () => {
    expect(isPalindrome('abcd')).toBeFalsy();
  });

  test('isPalindrome("A man a plan a canal Panama") => true ', () => {
    expect(isPalindrome('A man a plan a canal Panama')).toBeTruthy();
  });
});
