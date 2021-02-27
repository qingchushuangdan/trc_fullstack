const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();
// 协议 域名 端口
app.use(async(ctx) => {
    // 响应头/  响应首部字段
    // 表示允许来自所有域的请求('*')/具体域的请求('http://....')。
    ctx.set('Access-Control-Allow-Origin','http://127.0.0.1:8080');
    // 用于预检请求的响应。其指明了实际请求中允许携带的首部字段。
    ctx.set('Access-Control-Allow-Headers', 'content-type');
    // 让服务器把允许浏览器访问的头放入白名单,如自定义的'X-baidu',
    // 这样浏览器就能够通过getResponseHeader访问 X-baidu 响应头了
    ctx.set('Access-Control-Expose-Headers', 'X-baidu')
    // 非简单请求 发一个 请求方式 是options 的预检请求, 指定了preflight请求的结果能够被缓存多久
    ctx.set('Access-Control-Max-Age', 60 * 60)
    // 指定了当浏览器的credentials设置为true时是否允许浏览器读取response的内容
    ctx.set('Access-Control-Allow-Credentials', true)
    // GET POST DEL ...    其指明了实际请求所允许使用的 HTTP 方法。
    ctx.set('Access-Control-Allow-Methods', '*')

    // 请求首部字段
    // 用于预检请求。其作用是，将实际请求所使用的 HTTP 方法告诉服务器。
    ctx.set('Access-Control-Request-Method', '')
    // 用于预检请求。其作用是，将实际请求所携带的首部字段告诉服务器。
    ctx.set('Access-Control-Request-Headers', '')

    await next();
})
router.post('/', (ctx, next) => {
  // ctx.router available
  ctx.set('Content-Type', 'application/json')
  ctx.set('X-baidu', 'xxxx')
  console.log(ctx.cookies)
  ctx.body = {
      code: 0
  }
});

app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(9090, () => {
    console.log('9090端口启动')
})