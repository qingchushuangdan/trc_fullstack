// 什么是浅拷贝？如何实现一个浅拷贝？什么是深拷贝？如何实现一个深拷贝？

let a = {
    age: 1         
}
// let b = JSON.parse(JSON.stringify(a)) //深拷贝
// a.age = 2
// console.log(b.age); // 做深拷贝做的更多
let b = Object.assign({}, a)
a.age = 2
console.log(b.age);





// a -> {age: 1}
// b -> {age: 1}

// a -> {age: 2}
// b -> {age: 2} 指向的是指针

let c = {
    age: 1,
    jobs: {
        first: 'coding'
    }
}
// let d = {...c}//浅拷贝
let d = JSON.parse(JSON.stringify(c)) //深拷贝
// c.age = 2
c.jobs.first = 'waiter'
console.log(d.jobs.first);//既能实现浅拷贝也能实现深拷贝的方法，同意叫成浅拷贝

let obj = {
    a: 1,
    b: {
        c: 2,
        d: 3
    }
}
obj.c = obj.b
obj.e = obj.a
obj.b.c = obj.c
obj.b.d = obj.b
obj.b.e = obj.b.c
let newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj);


let test = {
    age: undefined,
    sex: Symbol('man'),
    jobs: function() {},
    name: 'wn'
}
let o = JSON.parse(JSON.stringify(test))
console.log(o);