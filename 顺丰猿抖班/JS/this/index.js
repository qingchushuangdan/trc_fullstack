// function identify(context) {
//   return context.name.toUpperCase()
// }

// function speak(context) {
//   var greeting  = "hello i am" + identify(context)
//   console.log(greeting);
// }
// var me = {
//   name: 'wn'
// }
// var you = {
//   name: 'yangbao'
// }
// speak(me)
// function identify() {
//   return this.name.toUpperCase()
// }

// function speak() {
//   var greeting  = "hello i am" + identify.call(this)
//   console.log(greeting);
// }
// var me = {
//   name: 'wn'
// }
// var you = {
//   name: 'yangbao'
// }
// speak.call(you)
// function foo(){
//   let person = {
//     name: 'wn',
//     age: 18
//   }
//   console.log(this);
// }
// function bar(){
//   let person = {
//     name: 'wn',
//     age: 20
//   }
//   foo()
// }
// bar()
// function foo(){
//   console.log(this.a);
// }
// var a = 2
// (function(){
//   'use strict'
//   foo()//在严格模式下，foo的调用，与位置无关
// })
// foo()

// function foo(){
//   console.log(this.a);
// }
// var obj2 = {
//   a: 3,
//   foo: foo
// }
// var obj1 = {
//   a: 2,
//   obj2: obj2
// }

// obj1.obj2.foo()

function foo(){
  console.log(this.a);
}
var obj = {
  a: 3
  
}