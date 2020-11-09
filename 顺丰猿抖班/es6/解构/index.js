let a = 1
let b = 2
let c = 3

let [a, [b, c]] = [1, [2, 3]]

console.log(b);

let [ , , c] = [1, 2, 3] //3

// ...arguements

let [a, b, ...c] = [1, 2, 3, 4, 5, 6]    //[3, 4, 5, 6]

let [a, b, ...c] = [1] //空数组

let [a] = 1 //报错，等号的右边必须是要可遍历的

let [a] = false //报错，等号的右边必须是要可遍历的


console.log(c);

set

let arr = [1, 2, 2, 5, 3, 4, 5, 4]
let newArr = new Set(arr)
console.log(newArr);

let [x, y, z] = {a: 'a', b: 'b', c: 'c'}
console.log(x);
let [x, y, z] = new Set(['a', 'b', 'c']) //set对象可以被解构
console.log(x);

let [foo = true] = [false] //中括号有值就执行中括号，没有值就执行默认值
console.log(foo);

let [x, y = 'b'] = ['a', undefined] //设置成undefined就跟没赋值时一样的，设置成Null则执行Null
console.log(y);

let {x, y, z} = {x: 'aaa', y: 'bbb'} //对象也是可以结构的， 数组严格一一对应，对象不用一一对应（根据key值来对应的）
console.log(z);

let { log, sin, cos, abs} = Math // == Math.log ......
console.log(abs(-2));
const {log} = console // == console.log
log(123)

let {foo: baz} = { foo: 'aaa', bar: 'bbb'}
console.log(foo);

let obj = {
    p: ['hello', {y: 'world'}]
}
let {p: [x, {y}]} = obj
console.log(x + y);

const [a, b, c, d, e] = 'hello'
console.log(c);
