var maxProduct = function(nums) {
  let len = nums.length
  let sortNums = nums.sort(function(a, b) {
    return b - a
  })
  let res = (sortNums[0] - 1) * (sortNums[1] - 1)
  return res
};
console.log(maxProduct([3,4,5,2]));