// сумма через замыкание summRec(a)(b)()
const summRec = a => b => (!!b && summRec(a + b)) || a;

// сумма через замыкание summCloser(a)(b)
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

// Проверка на простоту
function isPrime(number) {
  let del = 2;
  while (del * del <= number && number % del !== 0) del += 1;
  return number > 2 && del * del > number;
}

// Факториал
function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) result *= i;
  return result;
}

// Фибоначи
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


// Проверка на сортировку
function isSorted(arr) {
  if (arr.length < 2) return true;
  let index = 1;
  let direct = null;

  do {
    if (arr[index - 1] !== arr[index] && direct === null) {
      direct = arr[index - 1] <= arr[index];
    }

    if ((arr[index - 1] < arr[index]) !== direct && direct !== null) {
      return false;
    }

    index++;
  } while (arr.length > index);

  return true;
}

// свой фильтер
function filter(arr, predicate) {
  const result = [];
  arr.forEach(item => predicate && predicate(item) && result.push(item));
  return result;
}


// совй редьюс
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
