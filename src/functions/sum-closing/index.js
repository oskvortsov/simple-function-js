function sumClosing(a) {
  let current = a;

  function f(b) {
    current += b;
    return f;
  }

  f.toString = () => current;
  f.valueOf = () => current;

  return f;
}

module.exports = {
  sumClosing,
};
