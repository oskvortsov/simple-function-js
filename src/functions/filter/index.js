// свой фильтер
function filter(arr, predicate) {
  const result = [];
  arr.forEach(item => predicate && predicate(item) && result.push(item));
  return result;
}

module.exports = {
  filter,
};
