var checkIfExist = function(arr) {
  const s = new Set()
  for (let val of arr) {
    if (s.has(val * 2) || s.has(val / 2)) {
      return true
    }
    s.add(val)
  }
  return false
};