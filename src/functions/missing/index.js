// Проверка на простоту
function missing(arr) {
  const size = arr.length + 1;
  const total = ((1 + size) / 2) * size;
  const result = total - arr.reduce((sum, item) => sum + item, 0);

  return result === size || !result ? undefined : result;
}

module.exports = {
  missing,
};
