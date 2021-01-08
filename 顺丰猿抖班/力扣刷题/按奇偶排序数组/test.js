var sortArrayByParity = function(A) {
  let odd = []
  let even = []
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      even.push(A[i])
    } else {
      odd.push(A[i])
    }
  }
  let res = []
  res = res.concat(even ,odd)
  return res
};
console.log(sortArrayByParity([3,1,2,4]));