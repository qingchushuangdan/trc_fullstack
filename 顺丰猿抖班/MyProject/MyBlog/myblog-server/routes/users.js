const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')

router.prefix('/users')

router.post('/userLogin', async (ctx, next) => {
  let _username = ctx.request.body.username
  let _userpwd = ctx.request.body.userpwd

  // 把参数拿到数据库中查询
  await userService.userLogin(_username, _userpwd).then(res => {
    console.log(res);
  })
})
module.exports = router
