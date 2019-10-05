// Фибоначи
function fibonacci(number) {
  let a = 1;
  let b = 1;

  for (let i = 2; i < number; i++) {
    const c = a;
    a = b;
    b = c + b;
  }

  return number !== 0 ? b : 0;
}

module.exports = {
  fibonacci,
};
