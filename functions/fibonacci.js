const nthNumberFibonacci = (n, cache = {}) => {
  if (n in cache) {
    return cache[n];
  }
  if (n < 2) {
    cache[n] = n;
  } else {
    cache[n] =
      nthNumberFibonacci(n - 1, cache) + nthNumberFibonacci(n - 2, cache);
  }

  return cache[n];
};

exports.nthNumberFibonacci = nthNumberFibonacci;
