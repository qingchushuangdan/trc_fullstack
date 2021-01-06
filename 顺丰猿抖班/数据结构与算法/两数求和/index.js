// 给定一个整数数组nums 和一个目标值 target,
// 在该数组钟找出和为target的两个整数，并返回它们的下标

// let nums = [2, 7, 11, 15]
// let target = 9
// [0, 1]

// var twoSum = function(nums, target) {
//   for ( let i = 0; i < nums.length; i++) {
//     for ( let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
// }

// var twoSum = function (nums, target) {
//   const diffs = {}
//   const len = nums.length
//   for (let i = 0; i < len; i++) {
//     if (diffs[target - nums[i]] !== undefined) {
//       return [diffs[target - nums[i]], i]
//     }
//     diffs[nums[i]] = i
//   }
// }

console.log(twoSum([2, 7, 11, 15], 9));
