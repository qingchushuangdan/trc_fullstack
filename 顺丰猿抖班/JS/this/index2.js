// function foo() {
//     console.log(this.a);
// }
// var bar = {
//     a: 2
// }
// foo.call(bar)


var a = {
    user: '蜗牛',
    fn :function(q, w) {
        console.log(this.user);
        console.log( q + w );
    }
}
var b = a.fn
b.call(null)// call 的传参方式


// var a = {
//     user: '蜗牛',
//     fn :function(q, w) {
//         console.log(this.user);
//         console.log( q + w );
//     }
// }
// var b = a.fn
// b.apply(a, [12, 34])// apply 的传参方式，用数组


// var a = {
//     user: '蜗牛',
//     fn :function(q, w) {
//         console.log(this.user);
//         console.log( q + w );
//     }
// }
// var b = a.fn()
// // b.bind(a) //返回的是一个函数
// var c = b.bind(a, 3, 5)
// c()
