let key1 = Symbol(1) //Symbol唯一值
let key2 = Symbol(1)

// console.log(key1 === key2);
// console.log(typeof(null));

// console.log('hello'.length);

// 0.1 + 0.2 == 0.3 //正确答案是0.300000000000000000000000000004,计算精度丢失，是bug，目前无法解决

// let obj = {
//     name: 'wn'
// }

// const a = [] // #001

// const b = a
// b.push(1)

// function test(person) {
//     person.age = 26
//     person = { // #002
//         name: 'yyy',
//         age: 30
//     }
//     return person
// }

// const p1 = { // #001
//     name: 'xxx',
//     age: 25,

// }
// const p2 = test(p1)
// console.log(p1);// xxx 26
// console.log(p2);

// 1. 函数传参是传递对象指针的副本
// 2. p1 和 person具有相同的指针，person被修改，p1也会被修改
// 3. person拥有了一个新的内存地址 (important)

// console.log(typeof({})); //万物皆对象，判断不出来{}是对象，判断不出来的都是对象



// console.log([] instanceof Array);//true

// console.log([] instanceof Object);//true

// console.log('hello' instanceof String);//false

// 让instanceof 也能判断原始类型
class PrimitiveString {
    static [Symbol.hasInstance] (x) {//Symbol.hasInstance 让我们定义instanceof的行为
        return typeof x === 'string'
    }
}
console.log('hello' instanceof PrimitiveString);