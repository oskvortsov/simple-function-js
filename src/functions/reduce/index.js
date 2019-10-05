// совй редьюс
function reduce(arr, fn, acc = null) {
  arr.forEach((item, index) => {
    acc = fn(acc, item, index);
  });

  return acc;
}

module.exports = {
  reduce,
};
