# cookie  localStorage  sessionStorage  indexDB
- cookie
    可设置过期时间
    4k
    每次携带在header中，影响请求的性能
    value: 保存用户登录状态，值应该加密
    httpOnly: 不能通过js访问，防止xss攻击
    secure: 只在传输协议为https的请求中携带
    sameSite: 规定浏览器不能在跨域请求中携带cookie，减少CSRF攻击

- localStorage
    需手动清除
    5M
    不参与

- sessionStorage
    关闭页面消失
    5M
    不参与

- indexDB
    需手动清除
    无限
    不参与


# 什么是 Service Worker    (例子：Service-worker.js)
运行在浏览器背后的独立线程，一般用来实现缓存的功能，传输协议必须是HTTPS





