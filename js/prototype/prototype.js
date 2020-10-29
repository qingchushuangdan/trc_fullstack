function Person(){
    //构造函数Person
}
Person.prototype.type = 'object named Person'
var person = new Person()

person.type = 'object named person'

res = person instanceof Person //检查 person 是否为Person 的实例
console.log(res);

res = person.type// 实例继承的属性
console.log(res);

res = person.__proto__ === Person.prototype
console.log(res);

res = Person.prototype.constructor === Person
console.log(res);

res = person.__proto__.constructor === Person
console.log(res);

res = Reflect.ownKeys(person)//尝试获取到自有属性
console.log(res);//person 对象本身并没有这个属性 []

res = person.type //通过原型链继续向上搜索
console.log(res);//打印原型上的属性 object named Person

function People(){}
Person.prototype = new Person()
p = new People()
res = [p instanceof Object, p instanceof Person, p instanceof People]
console.log(res);

res = p.type
console.log(res);
res = p.__proto__
console.log(res);

res = p.__proto__.__proto__
console.log(res);

res = p.__proto__.__proto__.__proto__
console.log(res);

res = p.__proto__.__proto__.__proto__.__proto__
console.log(res);