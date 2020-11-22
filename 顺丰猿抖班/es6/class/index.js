// class Foo {
//   constructor() {

//   }
//   static bar() {
//     this.baz()
//   }
//   static baz() { // static只能被自己的对象使用
//     console.log('hello');
//   }
//   // baz() {
//   //   console.log('world');
//   // }
// }
// let foo = new Foo()
// foo.baz()


class Shape {
  constructor (width, height) {
    this._width = width
    this._height = height
    // this.area = width * height
  }
  get area() {  // 加get会自动执行掉
    return this._width * this._height
  }
}
const square = new Shape(10, 10)
console.log(square.area);