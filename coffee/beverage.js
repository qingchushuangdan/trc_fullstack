var Beverage = function () {

}
Beverage.prototype.boilWater = function () {
  console.log('把水煮沸');
}
// 冲泡 空的方法
Beverage.prototype.brew = function () {

}
// 冲泡 倒进杯子
Beverage.prototype.pureInCup = function () {

}
Beverage.prototype.addCondiments = function(){

}
Beverage.prototype.init = function(){
  this.boilWater()
  this.brew()
  this.pureInCup()
  this.addCondiments()
}
var Coffee = function(){

}
// 原型继承
Coffee.prototype = new Beverage();
Coffee.prototype.brew = function(){
  console.log('用沸水冲泡咖啡');
}
Coffee.prototype.pureInCup = function(){
  console.log('把咖啡倒进杯子');
}
Coffee.prototype.addCondiments = function(){
  console.log('加糖和牛奶');
}
var oneCoffee = new Coffee();
oneCoffee.init();