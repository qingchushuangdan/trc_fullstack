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
 // cali()什么参数都不接的话，this一定指向window
Function.prototype.mycall = function(thisArg) {
  if (typeof this !== 'function') {
    throw new TypeError('error')
  }
  // 让 this 代表的这个函数 去到 thisArg里面生效
  const fn = Symbol('fn')  // 防止fn这个单词被占用
  // 把this代表的这个函数所拥有的参数先取到
  const args = [...arguments].slice(1)  // ['b', '1', '2']  slice(1, 3)//开始结束左闭右开，不影响原数组 splice(1, 3)//开始切，数量，影响原数组
  thisArg = thisArg || window
  // 将调用call函数的方法添加到thisArg的属性中
  thisArg[fn] = this
  const result = thisArg[fn](...args)
  delete thisArg[fn]
  return result  
}
a.mycall(b, 2, 2) // important
