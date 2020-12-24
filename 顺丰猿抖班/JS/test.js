var runningSum = function(nums) {
  let res = []
  for (var i = 0; i < nums.length; i++) {
    var count = 0
    for (var j = 0; j <= i; j++) {
      count = count + nums[j]
    }
    res.push(count)
  }
  return res
};
console.log(runningSum([1, 1, 1, 1]));