// let array = [1, 2, 3, 2, 0, 5, '6'] // 可以取最大值和最小值，但是如果数组中存在一个不能转化为数值的，那就会报错
// console.log(Math.max(...array));//把array解构出来
// console.log(Math.min(...array));

// 原始方法
// let array = [1, 2, 3, 2, 0, 5, '6']

// function max(arr) {
//   let max = arr[0]
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i]
//     }
//   }
//   return max
// }
// console.log(max(array));

// // reduce
// function max(prev, next) {
//   return Math.max(prev, next)
// }
// console.log(array.reduce(max));

// 排序
let array = [1, 2, 3, 2, 0, 5, '6']
// array.sort(function(a, b) {
//   return b - a
// })
// console.log(array[0]);

// eval
let max = eval("Math.max(" + array +")")


// apply
Math.max.apply(null, array)
