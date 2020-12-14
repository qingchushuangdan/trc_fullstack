const { PassThrough } = require("stream");

let arr = [1, 2, 3]
arr.map((x, a) => {
  return x + 1
})
const add1 = (x, a) => {
  console.log(x, a);
  return x + 1
}
arr.map(add1) // 无参
console.log(arr.map(parseInt));
parseInt(1, 0) // => 0 => 10
parseInt(2, 1)  // => 1 => 进制不合法
parseInt(3, 2) // => 2 => 3 不合法
// parseInt: 把 xx 进制的 字符串转成 10进制 的 整型
parseInt('1100', 2)  // 12
parseInt('1100', 10) // 1100
// 2 - 36

