// 思想: 从第一个元素开始，重复比较相邻的两项， 若第一项比第二项大，则交换两者的位置，反之则不动



//
let arr = [5, 3, 2, 4, 1]

// 35241
// 32541
// 32451
// 32415

// 23415
// 23415
// 23145
// 23145

// 23145
// 21345
// 21345
// 21345

// 12345
// 12345
// 12345
// 12345

// 12345
// 12345
// 12345
// 12345

function bubbleSort(arr) {
  const len = arr.length
  for (let i = 0; i < len; i++) { // 让思想重复五次
    let flag = false
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) { // 前后对比四轮
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        flag = true
      }
    }
    if (flag == false) return arr
  }
  return arr
}