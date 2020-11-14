http:超文本传输协议

输入url -> 看到页面

GET www.baidu.com HTTP/1.1
user-agent: XXX IE/chrome


上面这个格式 放到 传输层(TCP,http是基于TCP, 另外一个叫UDP)

拿到响应

HTTP/1.1 200 ok
content-type: text/html
key: value

<doctype html>
<html>
<body>
百度一下你就知道
</body>
</html>



块级
- 独占一行
- 能设置宽高
(BFC): 块级格式上下文
行内
- 水平方向都在一行上面
- 垂直方向: 以当前行的 base-line 对齐
- 非置换元素不能设置宽高 (错误的理论)
- 行内置换元素是能设置宽高的

img -> 行内 -> 能设置宽高

置换元素
内部内容不受css控制
```html
<img src=""/> src决定
<canvas /> 300*xxx
<input/>
<iframe src=""/>300*xxx
<script src=""/>
```
非置换元素:
```html
<div>
    <div></div>
</div>
<span>文字</span>

词法(静态)作用域: js c c++
动态作用域
