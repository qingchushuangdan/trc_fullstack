const router = require('koa-router')();
const userModel = require('../lib/mysql.js')

const controller = require('../controller/c-signup.js')

router.get('/signup', async (ctx, next) => {
  await ctx.render('signup', {
    session: ctx.session
  })
})

// 点击注册按钮的响应事件
router.post('/signup', controller.postSignup)
module.exports = router