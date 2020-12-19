let array = [1, 2, 1, 1, '1']
function unique(arr) {
  let res = arr.filter(function(item, index, arr) {
    // return arr.indexOf(item) === index
    return !index || item !== arr[index - 1]
  })
  return res
}
console.log(unique(array));

// es6
function unique2(arr) {
  // return Array.from(new Set(arr))
  return [...new Set(arr)]
}

let unique3 = (a) => [...new Set(a)]