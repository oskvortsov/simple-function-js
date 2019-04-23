const summRec = a => b => (!!b && summRec(a + b)) || a;

function summCloser(a) {
  let current = a;

  function f(b) {
    current += b;
    return f;
  }

  f.toString = () => current;
  f.valueOf = () => current;

  return f;
}

function isPrime(number) {
  let del = 2;
  while (del * del <= number && number % del !== 0) del += 1;
  return number > 2 && del * del > number;
}

function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) result *= i;
  return result;
}

function fib(number) {
  let a = 1;
  let b = 1;

  for (let i = 2; i < number; i++) {
    const c = a;
    a = b;
    b = c + b;
  }

  return number !== 0 ? b : 0;
}

function isSorted(arr) {
  if (arr.length < 2) return true;
  const direct = arr[0] < arr[1] ? 'up' : 'down';
  return !arr.some((_, index) => {
    const isDirect = arr[index - 1] < arr[index];
    return index > 1 && ((!isDirect && direct === 'up') || (isDirect && direct === 'down'));
  });
}

function filter(arr, predicate) {
  const result = [];
  arr.forEach(item => predicate && predicate(item) && result.push(item));
  return result;
}

function reduce(arr, fn, acc = null) {
  arr.forEach((item, index) => {
    acc = fn(acc, item, index);
  });

  return acc;
}


module.exports = {
  summRec,
  summCloser,
  isPrime,
  factorial,
  fib,
  isSorted,
  filter,
  reduce,
};