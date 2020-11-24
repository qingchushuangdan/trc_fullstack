Person.prototype.say = function() {
  console.log('hahaha');
}
function Person(name, age) {
  this.name = name
  this.age = age
  // return {}  // return string 和 number都可以, 但是不能返回object，否则就失效
}
// let person = new Person('小敏', '18') //new的存在让函数干这个事情
// console.log(person); 

function myNew() {
  let obj = {}
  // 取到外部传入的构造器

  // arguments// myNew接收到的所有的参数
  let Constructor = Array.prototype.shift.call(arguments)
  // 实现一个继承
  obj.__proto__ = Constructor.prototype

  let result = Constructor.apply(obj, arguments)


  // console.log(arguments);
  return typeof result === 'object' ? result : obj
}

let person = myNew(Person, '小敏', '18')
console.log(person);
person.say()