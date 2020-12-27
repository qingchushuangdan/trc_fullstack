var smallestDifference = function(a, b) {
  let item = Math.abs(a[0] - b[0])
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      k = Math.abs(a[i] - b[j])
      if (k < item) {
        item = k
      }
    }   
  }
  return item
  
};

console.log(smallestDifference([1, 3, 15, 11, 2], [23, 127, 235, 19, 8]));