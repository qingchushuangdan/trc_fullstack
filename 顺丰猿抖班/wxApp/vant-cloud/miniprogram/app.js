//app.js
App({
  onLaunch: function (options) {
    const self = this
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        env:'trc-7gdo18rebec45a1b' ,
        traceUser: true,
      })
    }
    // this.globalData.shareParam = options.query
    //查看是否授权登录
    wx.getSetting({
      success(settingRes) {
        // 应经授权
        // console.log(settingRes);
        if (settingRes.authSetting['scope.userInfo']) {
          wx.getUserInfo({ // 获取用户信息
            success(infoRes) {
              console.log(infoRes);
              self.globalData.userInfo = infoRes.userInfo
              wx.cloud.callFunction({
                name: 'createUser',
                data: {
                  avatarUrl: infoRes.userInfo.avatarUrl,
                  name: '',
                  nickName: infoRes.userInfo.nickName,
                  sex: infoRes.userInfo.gender
                }
              })
            }
          })
        } else {
          wx.redirectTo({
            url: `pages/login/login?back=${options.path.split('/')[1]}`
          })
        }
      }
    })
    this.globalData = {}
  }
})
