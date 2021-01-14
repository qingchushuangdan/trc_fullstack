var findPeakElement = function (nums) {
  let len = nums.length
  if (len === 1) {
    return 0
  }
  for (let i = 0; i < len; i++) {
    if ((nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) || (i == 0 && nums[i] > nums[i + 1]) || (i == nums.length - 1 && nums[i] > nums[i - 1])) return i
  }
}
console.log(findPeakElement([2, 1]));