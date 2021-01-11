var findRepeatNumber = function(nums) {
  let res = nums.sort((a, b) => {
    return a - b
  })
  for (let i = 0; i < nums.length; i ++) {
    if (res[i] == res[i + 1]) {
      return res[i]
    }
  }
};
console.log(findRepeatNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 14, 15]));