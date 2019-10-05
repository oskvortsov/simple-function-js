// Проверка на сортировку
function isSorted(arr) {
  if (arr.length < 2) return true;
  let index = 1;
  let direct = null;

  do {
    if (arr[index - 1] !== arr[index] && direct === null) {
      direct = arr[index - 1] <= arr[index];
    }

    if (arr[index - 1] < arr[index] !== direct && direct !== null) {
      return false;
    }

    index++;
  } while (arr.length > index);

  return true;
}

module.exports = {
  isSorted,
};
