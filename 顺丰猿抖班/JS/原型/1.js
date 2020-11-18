// Person.prototype ---原型  
// console.log(Person.prototype);//函数被定义出来的那一刻，就一定具备prototype属性
Person.prototype.name = '蜗牛'
Person.prototype.say = function() {
    console.log('hahaha');
}
function Person(name){
    // this.name = name
}
var person = new Person()//实例化，继承构造函数中的属性
console.log(person);

//它定义了构造函数制造出来的对象的公共祖先。
var person1 = new Person()
// console.log(person1.name);

// person.say()//调用打印hahaha