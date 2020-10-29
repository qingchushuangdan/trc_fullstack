const Koa = require('koa')

const app = new Koa()

const main = (ctx) => {
    ctx.response.body = 'Hello world'
}
app.use(main) 
app.listen(3000, () => {
    console.log('项目启动成功');
})