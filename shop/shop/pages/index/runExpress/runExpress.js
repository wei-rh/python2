// pages/index/runExpress/runExpress.js
Page({
  data: {
    focus: false,
    inputValue: '',
    Link: "",
    End: "",
    usersay: ""
  },

  onTitleBlur: function (event) {
    this.setData({
      Link: event.detail.value
    })
  },
  onEndPlace: function (event) {
    this.setData({
      End: event.detail.value
    })
  },
  onDetailIntroBlur: function (event) {
    this.setData({
      usersay: event.detail.value
    })
  },

  sumbitOrder: function () {
    if (this.data.Link == "" || this.data.End == "" || this.data.usersay == "") {
      wx.showModal({
        title: '提示',
        content: '输入框不能为空',
        success: function (res) {
          if (res.confirm) {//这里是点击了确定以后
            console.log('用户点击确定')
          } else {//这里是点击了取消以后
            console.log('用户点击取消')
          }
        }
      })

    } else {
      var that = this;
      wx.request({
        url: getApp().globalData.url + "/user/addrunorder",
        data: {
          link: that.data.Link,
          end: that.data.End,
          usersay: that.data.usersay
        },
        header: getApp().globalData.header,
        success(res) {
          console.log(res)
          that.data.rid = res.data.rid
          if (res.data.code == "success") {
            wx.navigateTo({
              url: '../zhifu/zhifu?id=1&oid=' + res.data.rid,
              success: function (res) { },
              fail: function (res) { },
              complete: function (res) { },
            })
          }
        }
      })
    }

  },
  onLoad: function (options) {
    console.log(getApp().globalData.header)
  }
})