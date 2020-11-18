// function doSomething(a) {
//     function doSomethingElse(c) {
//     return c - 1
// }
//     b = a + doSomethingElse(a * 2)
//     var b;
//     console.log(b * 3);
// }

// doSomething(2)

// var a = 2
// function foo(){
//     var a = 3
//     console.log(a);
// }       
// foo()
// console.log(a);

// var a = 2;
// (function () {
//     var a = 3
//     console.log(a);
// })()
// console.log(a);



//块级作用域
// for (let i = 0; i < 10; i++) {// let 和 var的声明机制是不一样的
//     console.log(i);
// }
// console.log(i);


// var a = 1
// var a; //变量声明 声明提升
// a = 1

// console.log(a);
// // var a = 2 //var a 会去到全局
// const a = 2

//let声明变量，const声明常量

var foo = true
if (foo) {
    var a = 2
}
console.log(a);