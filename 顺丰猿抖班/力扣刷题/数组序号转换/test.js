// var arrayRankTransform = function(arr) {
//   let len = arr.length
//   let result = []
//   let res = arr.sort((a, b) => {
//     return a - b
//   })
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j ++) {
//       if (arr[i] === res[j]) {
//         result.push(j + 1)
//       }
//     }
//   }
//   return result
// };
// console.log(arrayRankTransform([40,10,20,30]));
// // res = 10, 20, 30, 40
// // arr = 40, 10, 20, 30
var missingTwo = function(nums) {
  var len = nums.length
  let res = []
  for (let i = 1; i <= len + 2; i++) {
    if (nums.indexOf(i) == -1) {
      res.push(i)
    }
  }
  return res
};
console.log(missingTwo([1]));