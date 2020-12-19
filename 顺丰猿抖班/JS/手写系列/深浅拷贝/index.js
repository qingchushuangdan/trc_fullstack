// let a = 1
// let b = a
// a = 2
// console.log(b);

// let a = {
//   name: '酒神'
// }
// let b = a
// a.name = '叶大师'
// console.log(b);


// let arr = ['old', 1, true, null, undefined]
// let new_arr = arr.concat() //concat把上面的数组全部掏下来
// arr[0] = 'new'
// console.log(arr);
// console.log(new_arr);

// let arr = ['old', 1, true, null, undefined]
// let arr = [{old: 'old'}, 1, true, null, undefined]

// let new_arr = arr.slice()
// arr[0] = 'new'
// console.log(new_arr);

// let arr = [{old: 'old'}, 1, true, null, undefined]
// let new_arr = JSON.stringify(JSON.stringify(arr))
// arr[0].old = 'new'
// console.log(new_arr);

let arr = [function() {console.log('a');}, {b:function() {console.log('b');}}]
let new_arr = JSON.stringify(JSON.stringify(arr))