// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'trc-7gdo18rebec45a1b'

cloud.init()
const db = cloud.database({ env }) // 指明云函数生效的环境

// 云函数入口函数
exports.main = async (event, context) => {
  const userInfo = event.userInfo // event不仅包含前端传递的参数，还会自动携带用户信息
  return await db.collection('group').add({
    data: {
      name: event.groupName,
      createBy: userInfo.openId,
      createTime: new Date(),
      deleted: false,
      updateTime: new Date()
    }
  })
  .then(res => {
    return db.collection('user-group').add({
      data: {
        groupId: res._id,
        userId: userInfo.openId,
        invalid: false
      }
    })
  })
}