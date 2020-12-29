# 浏览器接收到html文件
1. 词法分析 =》 标记 =》 node解构 =》Dom树 =》

# 浏览器接收到css文件
步骤同上 =》 CSSOM树
递归CSSOM树确定具体的元素到底是什么样式

# 渲染树
Dom树 + CSSOM树 = render树

渲染树只包含需要显示的节点

# 回流  (浏览器拿到渲染树之后开始在浏览器上布局)
根据render树绘制页面布局

# 为什么操作DOM性能很差
本身浏览器存在渲染引擎和执行引擎，操作DOM结构的话
1. 造成多线程通信
2. 可能引起重绘和回流

# 什么情况下会阻塞渲染
html, css
浏览器是从上往下执行
<script src="vue.js"></script>

# 重绘和回流(百分之一万会问)
回流: 节点的几何信息发生变化
重绘: 节点更改不影响布局的信息

回流一定会重绘，重绘不一定会回流

会导致性能问题的操作
1. 改变window大小
2. 改变字体大小
3. display: none

# 减少重绘和回流
1. 用visibility 代替 display: none
2. 不要把节点的属性值放在一个循环里面当成循环的变量
for (let i = 0; i < 1000; i++) {
  console.log(document.querySelector('.test').style.offsetTop);
}
3. 尽量不用table布局