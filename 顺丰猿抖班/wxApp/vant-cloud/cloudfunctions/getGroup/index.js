// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'trc-7gdo18rebec45a1b'

cloud.init()
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  const openId = cloud.getWXContext().OPENID
  // 查找user-group这个库里面是否具有该openId // 查找where() .get()
  // 按照这个openId把user-group里对应的数据取出
  // 去group这个库里面查找所有的_id和groupId相同的数据
  let groupList = await db.collection('user-group').where({//{data: []}
    userId: openId
  }).get()
  let returnResult = []
  for(let item of groupList.data){
    const oneGroup = await db.collection('group').where({
      _id: item.groupId,
      deleted: false
    }).get()
    if (oneGroup.data.length > 0) {
      const userInfo = await db.collection('user').where({
        openId: oneGroup.data[0].creatBy
      }).get()
      oneGroup.data[0].creatBy = userInfo.data[0]
      oneGroup.data[0].relateUserGroupId = item._id
      returnResult.push(oneGroup.data[0])
    }
  }
  return returnResult.sort((a, b) => a.creatTime < b.creatTime ? 1 : -1)
}