var sortArrayByParityII = function (A) {
  let len = A.length
  let odd = []
  let even = []
  let res = []
  for (let i = 0; i < len; i++) {
    if (A[i] % 2 == 0) {
      odd.push(A[i])
    } else {
      even.push(A[i])
    }
  }
  for (let i = 0; i < len / 2; i++) {
    res.push(odd[i], even[i])
  }
  return res
};