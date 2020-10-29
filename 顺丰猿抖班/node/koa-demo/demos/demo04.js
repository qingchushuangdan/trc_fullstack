const Koa = require('koa')//读到koa的源码
const fs = require('fs')
const app = new Koa()

const main = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./template.html')
}
app.user(main)
app.listen(3000, () => {
    console.log('3000端口已启动');
})
