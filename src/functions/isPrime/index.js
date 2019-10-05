// Проверка на простоту
function isPrime(number) {
  let del = 2;
  while (del * del <= number && number % del !== 0) del += 1;
  return number > 2 && del * del > number;
}

module.exports = {
  isPrime,
};
