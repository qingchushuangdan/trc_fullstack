var twoSum = function(numbers, target) {
  let a, b
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (target === numbers[i] + numbers[j]) {
        a = i
        b = j
      }
    }
  }
  return [a, b]
};
console.log(twoSum(2, 7, 11, 15),   9);