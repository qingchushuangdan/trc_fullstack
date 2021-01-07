var search = function(nums, target) {
  let count = 0
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i] === target) {
      count ++
    }
  }
  return count
};
console.log(search([5,7,7,8,8,8,10], 8));