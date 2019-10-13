function isPalindrome(stroke) {
  stroke = stroke.replace(/ /g, '').toLowerCase();
  let index = 0;
  while (index < stroke.length / 2) {
    if (stroke[index] !== stroke[stroke.length - 1 - index]) return false;
    index++;
  }
  return true;
}

module.exports = {
  isPalindrome,
};
