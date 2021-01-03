var smallerNumbersThanCurrent = function(nums) {
  let res = []
  for (let i = 0; i < nums.length; i++) {
    res[i] = 0
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        res[i] ++
      }
    }
  }
  return res
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));