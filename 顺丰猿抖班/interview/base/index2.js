// 1 == '1'
// 1.两者类型是否相同，如果类型相同的话就比大小
// 2.如果类型不同，那么就进行类型转换
// 3.会先判断是否在对比null和undefined，是的话就会返回true
// 4.判断两者是否是string和number，是的话就将string转为number
// 5.判断其中一方是否为boolean，是的话就把boolean转为number
// 6.判断其中一方是否为object，且另一方为string，number，Symbol，是的话就把object转为原始类型再进行判断

// '1' == true

// '1' == 1
// 1 == 1

// '1' == { name: 'ok'} // false

// '1' == "[object Object]"  // false

// [] == [] //false //引用类型是判断指针是否相同

// [] == ![] //true
// [] == !true
// [] == false
// [] == 0
// '' == 0
// 0 == 0


// 闭包
// function A() {//函数声明
//     let a = 1
//     window.B = function() { //函数表达式
//         console.log(a);

//     }
// }
// A()
// B()

// function test(){
//     var arr = []
//     for (var i = 0; i < 10; i++){
//         arr[i] = function() {
//             console.log(i);
//         }
//     }
//     return arr
// }
// var myArr = test()
// for(var j = 0; j < 10; j++){
//     myArr[j]()
// }   
for (var i = 1; i <= 5; i++) {
    function A(i) {
        setTimeout(function() {
            console.log(i)
        }, i * 1000)
    }
    A(i)
}

