// 思想：循环遍历数组，每次都找当前范围内的最小值，把它放在当前范围的头部，然后缩小范围直至数组完全有序为止
let arr = [5, 3, 2, 4, 1]

// 0 - n-1  0 - 4

[1, 3, 2, 4, 5] // [1, 4]
[1, 2, 3, 4, 5] // [2, 4]

function selectSort(arr) {
  const len = arr.length
  // minIndex用来缓存区间内最小值的索引
  let minIndex
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    // i是区间的左界， j是区间的右界
    for (let j = i; j < len; j++) {
      if (arr[j] > arr[minIndex]) {
        minIndex = j
      }
    }
    // 如果minIndex对应的元素不是目前数组的头部元素，就交换位置
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}