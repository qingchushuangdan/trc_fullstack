var saleOffices = {} // 售楼处  发布者 楼价多少？
// 如果售楼处 有消息出来的时候， 
// addEventListener  如何？ 
saleOffices.clientList = []; //买房的人 订阅者
// document.body.addEventListener()
saleOffices.listen = function(fn) {
  this.clientList.push(fn);
}
saleOffices.trigger = function(price, squareMeter) {
  for (var i = 0; i < this.clientList.length; i++) {
		// console.log(this.clientList[i]);
    this.clientList[i](price, squareMeter);
  }
}
// document.body    callback 
saleOffices.listen(
  function(price, squareMeter) {
    if (price> 18000) {
      console.log('我的菜')
    } else {
      console.log('只买贵的 不买对的')
    }
    console.log('价格:' + price);
    console.log('面积：' + squareMeter);
  }
)


saleOffices.listen(
  function(price, squareMeter) {
  if (squareMeter < 120) {
    console.log('不是我的菜')
  } else {
    console.log('内心的宽广有地方安放')
  }
  console.log('价格:' + price);
  console.log('面积：' + squareMeter);
}
)


saleOffices.trigger(20000, 88);