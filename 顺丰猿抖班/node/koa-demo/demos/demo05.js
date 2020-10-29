const Koa = require('koa')//读到koa的源码
// const fs = require('fs')
const app = new Koa()

const main = ctx => {
    if (ctx.request.url !== '/'){
        ctx.response.type = 'html'
        ctx.response.body = '<a href="/">Index Page</a>'
    } else {
        ctx.response.body = 'hello world'
    }
    
    
}
app.user(main)
app.listen(3000, () => {
    console.log('3000端口已启动');
})
