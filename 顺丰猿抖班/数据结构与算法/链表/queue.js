var findNumbers = function (nums) {
  let count = 0
  let len = nums.length
  for (let i = 0; i < len; i++) {
      // if (String(nums[i]).length % 2 === 0) count++
      console.log(String(nums[i]).length);

  }
  return count
};
console.log(findNumbers([1, 11, 111, 1111]));