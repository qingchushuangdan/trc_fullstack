function cb(func, context) {
  if (context === void 0) {
    return func
  }
  return function() {
    return func.apply(context, arguments)
  }
}

function sortedIndex(array, obj, iteratee, context) {
  iteratee = cb(iteratee, context)
  let left = 0
  let right = array.length
  while (left < right) {
    let middle = Math.floor((left + right) / 2)
    if (array[middle] < obj) {
      left = middle + 1
    } else {
      right = middle
    }
  }
  return right
}



console.log(sortedIndex([10, 20, 30], 25));
// 2