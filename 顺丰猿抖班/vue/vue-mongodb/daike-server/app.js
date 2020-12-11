const Koa = require('koa')
const app = new Koa()
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyParser')
const mongoose = require('mongoose') // 做mongodb的连接
// 建立mongodb的连接
mongoose.connect('')

app.use(cors()) // 解决跨域
app.use(bodyParser()) // 帮助koa解析参数

const user_router = require('./routes/api/user_router')

app.use(user_router.routes())



app.listen(3000)