// function myPerson(name, age){
//     var that = {}
//     that.name = name
//     that.age = age
//     return that
// }
// var person1 = myPerson('wn', 18)
// var person2 = myPerson('蜗牛', 20)
// console.log(person1);
// console.log(person2);

function Car(color){
    this.color = color
    this.name = 'BMW'
    return [] //return个数组它就是数组，return个对象就是个对象
}
var car = new Car('red')
console.log(car);