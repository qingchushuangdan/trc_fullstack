var missingNumber = function(nums) {
  sum = 0
  sum1 = 0
  let len = nums.length
  for (let i = 0; i < len; i++) {
    sum += nums[i]
    sum1 += i
  }
  sum1 += len
  let res = sum1 - sum
  return res
};
console.log(missingNumber([3,0,1]));