# 什么是XSS攻击  如何防范xss攻击
xss就是攻击者想进一切办法将可以执行的代码注入到网页中

xss类型：
   - 持久型
     攻击者的代码被服务端写进了数据库

   - 非持久型
     <!-- http://www.baidu.com?name=<script>alert(1)</script> -->



防范： 
   - 转译字符
   function escape(str) {
       str = str.replace(/&/g, '&amp;')
       str = str.replace(/</g, '&lt;')
       str = str.replace(/>/g, '&gt;')
       str = str.replace(/"/g, '&quto;')
       str = str.replace(/'/g, '&#39;')
       str = str.replace(/`/g, '&#69;')
       str = str.replace(/\/g, '&#x2f;')
       return str
   }

    const xss = require('xss')
    let html = xss('<h1>XSS Demo</h1>)


# CSP
开发者告诉浏览器哪些外部资源是可以加载和执行，如何拦截是由浏览器自己实现的。

通常有两种方式开启CSP
   1. 设置 HTTP Header 中的 Content-Security-Policy
   2. 设置 meta 标签 <meta http-equiv="Content-Security-Policy">

   <!-- Content-Security-Policy: default-src 'self' -->
   <!-- Content-Security-Policy: img-src https://* -->


# 什么是CSRF攻击？如何防范 CSRF？
跨站请求伪造

防范：
1. Get 请求不对数据进行修改
2. 不让第三方网站访问Cookie
3. 阻止第三方网站的请求接口
4. 请求时必须携带验证码或者Token