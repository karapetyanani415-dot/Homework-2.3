function sum(a, b, c) {
  return a + b + c;
}
let arr = [10, 20, 30];
console.log(sum.apply(null, arr));
