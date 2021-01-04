var trimMean = function(arr) {
  let a = arr.sort((a, b) => a - b)
  let b = arr.length * 0.05
  let sum = 0
  for (let i = b; i < (arr.length - b); i++) {
    sum += a[i]
  }
  let average = sum / (arr.length * 0.9)
  return average
};
console.log(trimMean([9,7,8,7,7,8,4,4,6,8,8,7,6,8,8,9,2,6,0,0,1,10,8,6,3,3,5,1,10,9,0,7,10,0,10,4,1,10,6,9,3,6,0,0,2,7,0,6,7,2,9,7,7,3,0,1,6,1,10,3]));