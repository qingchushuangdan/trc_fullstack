const Koa = require('koa')//读到koa的源码
// const fs = require('fs')
const router = require('koa-route')
const app = new Koa()


const about = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = '<a href="/">Index Page</a>'
}

const main = ctx => {
    ctx.response.body = 'hello world'  
}
app.user(main)

app.use(router.get('/about', about))
app.use(router.get('/about', main))
app.listen(3000, () => {
    console.log('3000端口已启动');
})
