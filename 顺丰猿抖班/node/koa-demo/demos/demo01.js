const Koa = require('koa')

const app = new Koa()

app.listen(3000, () => {
    console.log('项目启动成功');
})