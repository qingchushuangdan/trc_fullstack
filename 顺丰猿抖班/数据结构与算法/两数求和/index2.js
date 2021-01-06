// 双指针法

// 给定两个有序的整数数组nums1 和 nums2, 请将nums2 合并到 nums1 中
// 使得nums1 成为一个有序的数组

let nums1 = [1, 2, 3, 0, 0, 0 ], m = 3
let nums2 = [2, 5, 6], n = 2
// [1, 2, 2, 3, 5, 6]

// 1. 定义两个指针， 分别指向两个数组生效的部分的尾部
// 2. 每次只对指针所指的元素进行比较，取其中较大值元素,把1它从nums1的末尾往前填补

const merge = function(nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1
  while (i >= 0 && j >= 0) {
    if(nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i]
      i--
      k--
    } else {
      nums[k] = nums2[j]
      j--
      k--
    }
  }
  // nums2 有剩余
  while (j >= 0) {
    nums1[k] = nums2[j]
    k--
    j--
  }
}