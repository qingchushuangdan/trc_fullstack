const router = require('koa-router')()
const userServer = require('../controllers/mySqlConfig')
router.prefix('/users')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })

// 注册
router.post('/userRegister', async (ctx) => {
  let _username = ctx.request.body.username;
  let _userpwd = ctx.request.body.userpwd;
  let _nickname = ctx.request.body.nickname;
  console.log(_username, _userpwd, _nickname);
  if (!_username || !_userpwd || !_nickname) {
    ctx.body = {
      code: '80001',
      mess: '用户名密码和昵称不能为空'
    }
    return
  }
  await userServer.findUser(_username).then(async (res) => {
    console.log(res);
    if (res.length) {
      ctx.body = {
        code: '80005',
        mess: '账号已经存在，请直接登录'
      }
    } else {
      await userServer.insertUser([_username, _userpwd, _nickname]).then(res => {
        console.log(res);
        let r = '';
        if (res.affectedRows != 0) {
          r = 'ok';
          ctx.body = {
            code: '80009',
            data: r,
            mess: '注册成功'
          }
        } else {
          r = 'error'
          ctx.body = {
            code: '80004',
            data: r,
            mess: '失败'
          }
        }
      })
    }
  })
})
// 查找

router.post('/findNoteListByType', async (ctx) => {
  // console.log(ctx);
  let _notetype = ctx.request.body.note_type
  await userServer.findNoteListByType(_notetype).then(res => {
    // console.log(res);
    let r = '';
    if (res.length) {
      r = 'ok';
      ctx.body = {
        code: '80000',
        data: res,
        mess: '查询成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80011',
        data: r,
        mess: '查询失败'
      }
    }
  })


})
// 登录
router.post('/userLogin', async (ctx, next) => {
  // console.log(ctx);
  let _username = ctx.request.body.username;
  let _userpwd = ctx.request.body.userpwd;

  // 把参数拿到数据库里查询
  await userServer.userLogin(_username, _userpwd).then(res => {
    console.log(res);
    let r = '';
    if (res.length) {
      r = 'ok';
      let result = {
        id: res[0].id,
        nickname: res[0].nickname,
        username: res[0].username
      }
      ctx.body = {
        code: '80000',
        data: result,
        mess: '登录成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80004',
        data: r,
        mess: '账号或密码错误'
      }
    }
  }).catch(err => {
    ctx.body = {
      code: '80002',
      data: err
    }
  })
})

// 查找文章详情
router.post('/findNoteDetailById', async (ctx, next) => {
  let _id = ctx.request.body.note_id;
  await userServer.findNoteDetailById(_id).then(res => {
    // console.log(res)
    let r = '';
    if (res.length) {
      r = 'ok';
      ctx.body = {
        code: '80000',
        data: res[0],
        mess: '查询成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80004',
        data: r,
        mess: '查询失败'
      }
    }
  })
})

// 发布笔记
router.post('/insertNote', async(ctx) => {
  
})

module.exports = router
