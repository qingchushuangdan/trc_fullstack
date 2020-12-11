const login = async (ctx) => {
  console.log(ctx.request.body);
  // 连接数据库去数据库里查找是否存在该条数据
  // 获取用户的userId
}
module.exports = {
  login
}