// push(x)
// pop()
// peek() // 返回首部的元素
// empty() // 返回队列是否为空

// var queue = new MyQueue()
// queue.push(1)
// queue.push(2)
// queue.peek() // 1
// queue.pop() // 1
// queue.empty() // false


const MyQueue = function() {
  // 想办法让栈底的元素优先被取出来 出栈序列被逆序
  this.stack1 = []
  this.stack2 = []
}

MyQueue.prototype.push = function(x) {
  this.stack1.push(x)
}
MyQueue.prototype.pop = function() {
  // 如果stack2为空， 就将stack1的元素转移进来
  if (this.stack2.length <= 0) {
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop())
    }
  }
}