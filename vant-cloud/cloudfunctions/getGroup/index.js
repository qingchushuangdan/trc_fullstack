// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'lm-lesson'

cloud.init()
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  const openId = cloud.getWXContext().OPENID
  // 查找user-group这个库里面是否具有该openId // 查找where() .get()
  // 按照这个openId把user-group里对应的数据取出
  // 去group这个库里面查找所有的_id和groupId相同的数据

}