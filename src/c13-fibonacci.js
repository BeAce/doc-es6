function fibonacci(n) {
  return n < 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}
let nF = fibonacci(10);
console.log(nF);
