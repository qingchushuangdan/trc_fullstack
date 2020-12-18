const User_col = require('../models/user')
const Password_col = require('../models/password')
const passport = require('../utils/passport');
// const { db } = require('../models/user');
const { v1: uuidv1 } = require('uuid');
const config = require('../../config')
// 登录
const login = async (ctx) => {
  console.log(ctx.request.body);
  let req = ctx.request.body
  // 连接数据库去数据库里查找是否存在该条数据
  // 查找语句
  // 获取用户的userId
  const user = await User_col.findOne({// 只要找到一条就够了
    account: req.username
  })
  if (!user) {
    ctx.status = 200
    ctx.body = {
      code: 0,
      msg: '账号不存在'
    }
    return
  }

  // 能找到这个账号
  const userId = user.userId

  // 查密码
  const pass = await Password_col.findOne({
    userId
  },
    {
      hash: 1
    })
  // 如果在密码表里面找到了账号相同的id
  // 判断该id对应的密码和前端传过来的密码是否匹配
  // 解密操作
  const match = await passport.validate(req.password, pass.hash)
  ctx.status = 200
  if (match) {
    ctx.body = {
      code: 1,
      msg: '登录成功',
      data: user
    }
    return
  }
  ctx.body = {
    code: 0,
    msg: '密码错误'
  }
}
// 注册
const register = async (ctx) => {
  console.log(ctx.request.body);
  let req = ctx.request.body
  // 判断当前账号是否存在
  const user = await User_col.findOne({// 只要找到一条就够了
    account: req.username
  })
  if (!user) {
    const userId = uuidv1()
    const newUser = await User_col.create({
      userId,
      account: req.username
    })
    if (newUser) {
      // 密码的插入
      const hash = await passport.encrypt(req.password, config.saltTimes)
      const result = await Password_col.create({
        userId,
        hash
      })
      if (result) {
        ctx.body = {
          code: 1,
          msg: '注册成功',
          data: {
            userId: newUser.userId,
            account: newUser.account
          }
        }
        
      }
    }
    
  } else {
    // this.$toast('账号已存在，请直接登录')
    ctx.body = {
      code: 0,
      msg: '账号已存在'
    }
    return
  }
}
module.exports = {
  login,
  register
}