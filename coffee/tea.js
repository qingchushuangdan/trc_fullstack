// 1. 把水煮开
// 2. 用沸水侵泡茶叶
// 3. 把茶水倒进杯子
// 4. 加柠檬
var Tea = function(type){
    this.type='龙井'
}
Tea.prototype.boilwater = function(){
    console.log('把水煮开');
}
Tea.prototype.brewTeaGriends = function(){
    console.log('用沸水浸泡茶叶');
}
Tea.prototype.pureInCup = function(){
    console.log('把茶水倒入杯子');
}
Tea.prototype.addLemon = function(){
    console.log('加柠檬');
}
Tea.prototype.init = function(){
    this.boilwater();
    this.brewTeaGriends();
    this.pureInCup();
    this.addLemon();
}
