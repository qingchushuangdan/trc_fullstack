var findMedianSortedArrays = function(nums1, nums2) {
  let nums = []
  let res
  nums = nums.concat(nums1, nums2).sort((a, b) => {
    return a - b
  })
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if (len % 2 == 0) {
      res = (nums[Math.floor((len - 1) / 2)] + nums[Math.ceil((len - 1) / 2)]) / 2
    } else {
      res = nums[(len - 1) / 2]
    }
  }
  return res
};
console.log(findMedianSortedArrays([], [1]));