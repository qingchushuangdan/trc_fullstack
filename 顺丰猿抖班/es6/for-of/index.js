Array.prototype.f = 'f'
let arr = ['a', 'b', 'c', 'd', 'e']
let obj = {
  name: '酒神',
  age: 18,
  sex: 'boy'
}
obj.height = 180
// console.log(Object.keys(obj)); // 拿到对象中的每一条数据
// for (let i = 0; i < arr.length; i++) { // 优点是可以取下标
//   console.log(obj[Object.keys(obj)[i]]);
// }
// for (let i of arr) {
//   console.log(i);
// }

// for (let i of obj) { // for-of不能遍历对象，因为数组天生自带迭代器，对象天生没有迭代器，所以不能被遍历
//   console.log(i);
// }

// for (let key in obj) { // 面试极大概率会问到 for-in 遍历对象 for-in 也可以拿来遍历数组(及其不建议使用，)
//   console.log(obj[key]);
// }

// for (let key in arr) { // 面试极大概率会问到 for-in 遍历对象 for-in 也可以拿来遍历数组(及其不建议使用，)
//   console.log(arr[key]);
// }

function Foo() {
  this[100] = 'test-100'
  this[1] = 'test-1'
  this['b'] = 'bar-B'
  this[50] = 'test-50'
  this[9] = 'test-9'
  this[8] = 'test-8'
  this[3] = 'test-3'
  this[5] = 'test-5'
  this['A'] = 'bar-A'
  this['C'] = 'bar-C'

}
let bar = new Foo()
// console.log(bar);
for (let key in bar) {
  console.log(`index:${key} value: ${bar[key]}`);
}

// ECMAScript 规范规定，数字属性应该按照索引值的大小升序排列，字符串属性根据创建时的顺序排列