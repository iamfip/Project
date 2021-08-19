function x(n) {
  if (n == 1) {
    return 1;
  }
  return n * x(n - 1);
}

console.log(3);
