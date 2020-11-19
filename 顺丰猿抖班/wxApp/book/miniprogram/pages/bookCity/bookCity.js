// miniprogram/pages/bookCity/bookCity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotData: [],
    classifyData: []
  },
  getList() {
    wx.showLoading({
      title: '正在加载' // 数据展示之前先用图标加载
    })
    wx.cloud.callFunction({ //访问云函数
      name: 'getList',
      data: {}
    }).then(res => { //访问成功回调返回res
      // console.log(res);
      wx.hideLoading() // 把加载隐藏
      const result = res.result || {}
      this.setData({
        hotData: result.hotData,
        classifyData: result.classifyData
      })
      // console.log(this.data.classifyData)
    })
  },
  toReading(e) {
    console.log(e);
    let url = e.currentTarget.dataset.url //event事件中有这个地址
    wx.navigateTo({
      url: `../bookSection/bookSection?url=${url}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})