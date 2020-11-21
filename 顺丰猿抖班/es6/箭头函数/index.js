// let foo = {
//   value: 1,
//   getValue: () => console.log(this.value) // 自动return 箭头函数里面没有this这个属性
// }
// foo.getValue()
// function Foo() {
//   this.value = 1
// }
// Foo.prototype.getValue = () => console.log(this.value); //打印出undefined
// let foo = new Foo()
// // foo = {
// //   value: 1,
// //   getValue: () => {
// //     console.log(this.value);
// //   }
// // }
// foo.getValue()

