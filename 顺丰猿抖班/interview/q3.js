// [[3, 2, 1].reduce(Math.pow), [].reduce(Math.pow)] // 该数组展示结果
// 
// console.log([[3, 2, 1].reduce(Math.pow), [].reduce(Math.pow)]);
let arr = [3, 2, 1]
let pow = function (a, b) {
  console.log(a, b);
  return a ** b // 9
}
arr.reduce(pow)