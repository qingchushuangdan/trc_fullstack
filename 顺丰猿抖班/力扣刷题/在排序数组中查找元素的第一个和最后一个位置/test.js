var searchRange = function (nums, target) {
  let res = []
  let a = -1, b = -1
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i] === target) {
      res.push(i)
    }
  }
  if (res == '') {
    return [a, b]
  } else {
    return [res[0], res[res.length - 1]]
  }
};
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));