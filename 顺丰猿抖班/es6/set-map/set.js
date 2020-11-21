// let arr = [1, 2, 3, 2, 4, 1]

// let newArr = [...new Set(arr)]
// console.log(newArr); //set 去重

// function test(color) {
//   switch (color) {
//     case 'rea':
//       return ['apple', 'strawberry']
//     case 'yellow':
//       return ['banana', 'pear']
//     case 'green':
//       return ['watermelon']
//     default:
//       return []
//   }
// }
// console.log(test('yellow'));

// const fruitColor = {
//   red: ['apple', 'strawberry'],
//   yellow: ['banana', 'pear'],
//   green: ['watermelon']
// }

// let obj = new Map()
// let a = 1
// obj.set(a, 123) // obj.a = 123 ==> obj.'a' = 123
// console.log(obj.get(a)); // map也是可以拿来创建一个对象的,

// const fruitColor = new Map()
// .set('red', ['apple', 'strawberry'])
// .set('yellow', ['banana', 'strawberry'])


// function test(color) {
//   return fruitColor.get(color)
// }
// test('yellow')