// var productExceptSelf = function (nums) {
//   let len = nums.length
//   let sum = 1
//   let res = []
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//       if (i !== j) {
//         sum = sum * nums[j]
//       }
//     }
//     res.push(sum)
//     sum = 1
//   }
//   return res
// };
// console.log(productExceptSelf([1, 2, 3, 4]));
// var productExceptSelf = function (nums) {
//   let len = nums.length
//   let sum = 1
//   let res = []
//   for (let i = 0; i < len; i++) {
//     sum *= nums[i]
//   }
//   for (let i = 0; i < len; i++) {
//     sum /= nums[i]
//     res.push(sum)
//     sum = 24
//   }
//   return res
// };
// console.log(productExceptSelf([1, 2, 3, 4]));

var productExceptSelf = function (nums) {
  let num = 1, res = [1], len = nums.length
  for (let i = 1; i < len; i++) {
    num *= nums[i - 1]
    res[i] = num // 对应数字的前缀数组
  }
  num = 1
  for (let i = len - 1; i > 0; i--) {
    num *= nums[i] // 对应数组的后缀数
    res[i - 1] *= num // 前缀数乘后缀数
  }
  return res
};

