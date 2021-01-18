// var plusOne = function (digits) {
//   let len = digits.length
//   if (digits[len - 1] == 9) {
//     digits[len - 2] =  digits[len - 2] + 1
//     digits[len - 1] = 0
//   } else {
//     digits[len - 1] = digits[len - 1] + 1
//   }
//   return digits
// };

var plusOne = function (digits) {
  const len = digits.length;
  for (let i = len - 1; i > -1; i--) {
    digits[i]++;
    digits[i] = digits[i] % 10;
    if (digits[i] !== 0) return digits;
  }
  digits[0] = 1;
  digits.push(0);
  return digits;
};
console.log(plusOne([9]));

