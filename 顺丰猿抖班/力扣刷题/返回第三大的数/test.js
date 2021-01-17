var thirdMax = function(nums) {
  let res = nums.sort((a, b) => {
    return b - a
  })
  let result = Array.from(new Set(res))
  let len = result.length
  if (len < 3) {
    return result[0]
  } else {
    return result[2]
  }
};
console.log(thirdMax([1, 2, 1]));