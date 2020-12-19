let array1 = [1, 2, '1', 2, 1]
let array2 = [1, 2, '1', 2, 1]
function unique(array, isSorted, iteratee) {
  let res = []
  let seen
  for (let i = 0, len = array.length; i < len; i++) {
    let value = array[i]
    let computed = iteratee ? iteratee(value, i, array) : value;
    if (isSorted) {
      if (!i || seen !== computed) {
        res.push(value)
      }
      seen = computed
    } else if(iteratee) {
      if (seen.indexOf(computed) === -1) {
        seen.push(computed)
        res.push(value)
      }
    } else if (res.indexOf(value) === -1) {
      res.push(value)
    }
  }
  return res
}
// console.log(unique(array1));
// console.log(unique(array2));
console.log(unique(array2, false, function(item){
  return typeof item == 'string' ? item.toLowerCase : item
}));
