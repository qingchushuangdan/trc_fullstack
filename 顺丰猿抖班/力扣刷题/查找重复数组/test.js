var findDuplicate = function(nums) {
  let len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] === nums[j]) {
        return nums[i]
      }
    }
  }
};
console.log(findDuplicate([1,3,4,3,2]));