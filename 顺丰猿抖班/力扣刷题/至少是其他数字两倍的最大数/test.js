var dominantIndex = function(nums) {
  let len = nums.length
  let sortNums = []
  let index
  sortNums = nums.sort((a, b) =>{
    return b - a
  })
  for (let i = 0; i < len; i++) {
    if (sortNums[0] === nums[i]) {
      index = 1
    } else {
      return -1
    }
  }
};
console.log(dominantIndex([3, 6, 1, 0]));