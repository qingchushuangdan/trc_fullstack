var threeConsecutiveOdds = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0) return true
  }
  return false
};

console.log(threeConsecutiveOdds([2, 3, 5, 6]));
