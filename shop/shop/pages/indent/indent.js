// pages/indent/indent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    card:[
      { end: "2323", usersay:"【快递超市】您的中通快递快递已到南大门菜鸟驿站，请凭编号C445六点前领取，有问题请联系18039499592。"},
      {
        end: "2321", usersay:"【快递超市】您的中通快递快递已到南大门菜鸟驿站，请凭编号E679六点前领取，有问题请联系18039499592。"
      }
    ]
  },
  onLoad: function (options) {
    var that = this
    wx.request({
      url: getApp().globalData.url + "/user/getallpackorder",
      header: getApp().globalData.header,
      success(res) {
        console.log(res.data)
        that.setData({
          card: res.data
        })
      }
    })

  },
  onClick(event) {
    wx.showToast({
      title: `点击标签 ${event.detail.name}`,
      icon: 'none'
    });
  }
})