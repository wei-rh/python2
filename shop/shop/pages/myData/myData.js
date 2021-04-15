// pages/myData/myData.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //触发事件
  bindmyData1: function() {
    wx.navigateTo({
      url: 'huiyuanziliao/huiyuanziliao?id=' + this.data.userInfo.nickName,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  bindmyData2: function() {
    wx.navigateTo({
      url: 'shoucang/shoucang',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  bindmyData3: function () {
    wx.navigateTo({
      url: 'dizhi/dizhi',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  bindmyData4: function () {
    wx.navigateTo({
      url: 'hongbao/hongbao',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  bindmyData5: function () {
    wx.navigateTo({
      url: 'daijinquan/daijinquan',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  bindmyData6: function () {
    wx.navigateTo({
      url: 'huiyuanka/huiyuanka',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  bindmyData7: function () {
    wx.navigateTo({
      url: 'login/login',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  bindmyData8: function () {
    wx.navigateTo({
      url: 'lingquan/lingquan',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },


























  getUserInfo: function() {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res.code)
        if (res.code) {
          wx.request({
            url: getApp().globalData.url + '/user/login',
            data: {
              code: res.code
            },
            success(res) {
              // 获取到用户的 sid
              console.log(res);
              //取sessionI
              getApp().globalData.header.Cookie = 'JSESSIONID=' + res.data.sessionId;
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              app.globalData.userInfo = res.userInfo
              console.log(res.userInfo)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (app.userInfoReadyCallback) {
                app.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  }
})