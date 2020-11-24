let b = {
  name: '宜豪',
  // a: function() {
  //   console.log(this.name);
  // }
}
function a(e, r) {
  console.log(e + r);
  console.log(this.name);
}
Function.prototype.mybind = function(thisArg) {
  if (typeof this !== 'function') {
    throw new TypeError('error')
  }
  const args = [...arguments].slice(1) // [4, 5]
  const self = this
  const nop = function() {}
  // 绑定函数
  const bound = function() {
    return self.apply(
      this instanceof nop ? this : thisArg,
    )
  }
  if (this.prototype) {
    nop.prototype = this.prototype
  }
  bound.prototype = new nop()
  return bound
}
let res = a.mybind(b, 4, 5)// bind返回的是一个函数，需要加()执行
let newA = new res()
console.log(newA);