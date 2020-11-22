// var foo = 'bar'
// console.log(foo);
// foo = 'bar'

// const foo = 'bar'
// foo = 123  // 此行报错
// console.log(foo);

// let example = 'tom'
// const foo = 'this is' + example
// const foo = `this is ${example}`  // es6模板拼接


// es6 新增的数组的方法




// let arr = ['a', 'b', 'c']
// // console.log(Object.key(arr));
// let newArr = [...arr.keys()]
// console.log(newArr);

// let iter = arr.entries()
// for (let e of iter) {
//   console.log(e);
// }
// console.log(iter);

// function test(fruit) {
//   const redFruit = ['apple', 'strawberry', 'cherry']
//   if (redFruit.includes(fruit)) {
//     console.log('red');
//   }
// }
// test('cherry')

// let people = [
//   {name: '小陶', age: 20},
//   {name: '叶总', age: 18},
//   {name: '大陶', age: 21}

// ]
// function findFriend(person) {
//   return person.name === '叶总'
// }

// console.log(people.find(findFriend));

let test = ['a', 'b', 'c', 'd']
// function index(i) {
//   return i == 'd'
// }
// console.log(test.findIndex(index));//找数组某个执行元素的下标