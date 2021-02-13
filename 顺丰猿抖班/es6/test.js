var sumOddLengthSubarrays = function(arr) {
  let result = 0
  for ( let i = 1; i <= arr.length; i += 2) { // i = 1 i = 3
    for (let j = 0; j < arr.length; j++) { // j = 0 j = 0
      if (arr[j + i -1] != null) {
        for (let k = 0; k < i; k++) { // k = 0
          result = result + arr[j + k]
        }
      }
    }
  }
  return result
}

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));

//