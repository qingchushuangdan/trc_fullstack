var findDuplicates = function (nums) {
  let len = nums.length
  let result = []
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] === nums[j]) {
        result.push(nums[i])
      }
    }
  }
  return result
};
console.log(findDuplicates([4,3,2,7,8,2,3,1]));