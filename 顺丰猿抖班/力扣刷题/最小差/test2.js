var smallestDifference = function(a, b) {
  let a1 = a.sort(function(c, d) {
    return c - d
  })
  let b1 = b.sort(function(c, d) {
    return c - d
  })
  return a1[0] - b1[0]
};

console.log(smallestDifference([1, 3, 15, 11, 2], [23, 127, 235, 19, 8]));