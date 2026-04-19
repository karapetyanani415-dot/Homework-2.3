let digits = [1, 2, 3];
let extraNumbers = {
  0: 1,
  1: 2,
  length: 2,
  [Symbol.isConcatSpreadable]: true,
};

let bonus = [4, 5];
bonus[Symbol.isConcatSpreadable] = true;
console.log(digits.concat(bonus));
