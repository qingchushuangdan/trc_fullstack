function simplify(fn) {
  const a = 1
  const b = 2
  return function(c) {
    const d = fn(a, b, c);
    return a + b + c + d;
  }
}
const f1 = simplify((a, b, c) => a * b * c);
const f2 = simplify((a, b, c) => a + b + c);
const f3 = simplify((a, b, c) => a - b + c);
const f4 = simplify((a, b, c) => a + b - c);
console.log(f1(4) === func1(4));