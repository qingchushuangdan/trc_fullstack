let array = [1, 2, 3, 1, '1', '1']
function unique(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    for (var j = 0; j < res.length; j++) {
      if (arr[i] === res[j]) {
        break
      }
    }
    // 如果arr[i]是唯一的，那么执行循环
    if (j === res.length) {
      res.push(arr[i])
    }
  }
  return res
}
// console.log(unique(array));
export default unique

