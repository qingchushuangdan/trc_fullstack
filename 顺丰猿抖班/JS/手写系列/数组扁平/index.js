let arr = [1, [2, [3, 4]]]

// function faltten(arr) {
//   let res = []
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       res = res.concat(faltten(arr[i]))
//     } else {
//       res.push(arr[i])
      
//     }
//   }
//   return res
// }
// console.log(faltten(arr)); // [1, 2, 3, 4]

// console.log(arr.toString());

// reduce
// function faltten(arr) {
//   return arr.reduce(function(prev, next){
//     return prev.concat(Array.isArray(next) ? faltten(next) : next)
//   }, [])
// }

let arr = [1, [2, [3, 4]]]
function faltten(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  } 
  return arr
}
console.log([].concat(...arr));


