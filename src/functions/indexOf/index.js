function indexOf(arr, searchObj) {
  let index = 0;
  while (index < arr.length) {
    if (arr[index] === searchObj) return index;
    index++;
  }
  return -1;
}

module.exports = {
  indexOf,
};
