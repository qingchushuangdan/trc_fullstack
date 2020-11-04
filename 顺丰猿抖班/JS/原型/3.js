// Person.prototype.lastName = 'Liu'
// function Person(name){
//     this.name = name
// }
// var person = new Person('zhipeng')

// console.log(person.lastName);

// person.lastName = 'Wang'//没有改动原型属性，只是在自己的对象中添加了一个属性，原型里面还是'Liu'
// Person.prototype.lastName = 'Wang'//只能在原型上进行修改
// console.log(person.lastName);
// console.log(person);

// delete person.lastName
// console.log(person.lastName);
// function Bus() {

// }
// Car.prototype = {
//     constructor: Bus
// }
function Car(){

}
var car = new Car()
console.log(car.constructor); // function Car(){}
// constructor 指向的是Car,目的是让Car()构造出来的对象想要找到它自己的来历时能找到
// car.constructor