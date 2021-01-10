var rangeSum = function (nums, n, left, right) {
  let array = [];
  let sum = 0
  for (var i = 0; i < n; i++) {
    array.push(nums[i]);
    let temp = nums[i];
    for (var j = i + 1; j < n; j++) {
      temp = temp + nums[j];
      array.push(temp);
    }
  }
  let res = []
  res = array.sort(function(a, b) {
    return a - b
  })
  for (let i = left - 1; i < right; i++) {
    sum += res[i]
  }
  return sum % 1000000007
};
console.log(rangeSum([1, 2, 3, 4], 4, 1, 5));