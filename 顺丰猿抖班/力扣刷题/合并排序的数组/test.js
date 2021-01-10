var merge = function(A, m, B, n) {
  A.splice(m);
  B = B.splice(0, n);
  for (let i = 0; i < B.length; i++) {
    A.push(B[i]);
  }
  return A.sort((a, b) => a - b);
};
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
let A = [1,2,3,0,0,0]

console.log(A.splice(3));