// pages/index/sendExpress/sendExpress.js
Page({
  data: {
    addressee: '', //设置收件人
    addresseeAddress: '', //设置收件人地址
    recipientTelephone: '', //设置收件人电话
    sender: '', //设置发件人
    senderAddress: '河南省开封市龙亭区西郊乡商丘学院应用科技学院', //设置发件人地址
    senderTelephone: '', //设置发件人电话
    telephone: '', // 联系人电话
    idnumber: '', //设置身份证
    remarks: '',  //设置备注
  },
  //设置收件人
  onTitleBlur: function (event) {
    this.setData({
      addressee: event.detail.value
    })
  },
  //设置收件人地址
  onEndPlacek: function (event) {
    this.setData({
      addresseeAddress: event.detail.value
    })
  },
  //设置收件人电话
  onOrderPhoneBlurk: function (event) {
    this.setData({
      recipientTelephone: event.detail.value
    })
  },
  //设置发件人
  onStartPlace: function (event) {
    this.setData({
      sender: event.detail.value
    })
  },
  //设置发件人地址
  onEndPlace: function (event) {
    console.log(data.senderAddress)
    this.setData({
      senderAddress: event.detail.value
    })
  },
  //设置发件人电话
  onOrderPhoneBlur: function (event) {
    this.setData({
      senderTelephone: event.detail.value
    })
  },
  // 联系人电话
  onOrderPhoneBlur1: function (event) {
    console.log(event)
    this.setData({
      telephone: event.detail.value
    })
    // 判断手机号输入是否规范
    var re = /^1\d{10}$/
    if (re.test(event.detail.value)) {
      console.log("手机号是合法的")
      this.setData({
        orderPhone: event.detail.value,
      })
    } else {
      wx.showToast({
        title: '手机号输入不合法',
        icon: 'none',
        duration: 2500
      })
    }
  },
  //设置身份证
  onPickUpCodeID: function (event) {

    this.setData({
      idnumber: event.detail.value
    })
  },

  sumbitOrder: function () {
    if (this.data.addressee == "" ||
      this.data.addresseeAddress == "" ||
      this.data.recipientTelephone == "" ||
      this.data.sender == "" ||
      this.data.senderAddress == "" ||
      this.data.senderTelephone == "" ||
      this.data.telephone == "" ||
      this.data.idnumber == "" ||
      this.data.remarks == "") {
      wx.showModal({
        title: '提示',
        content: '输入框不能为空',
        success: function (res) {
          if (res.confirm) { //这里是点击了确定以后
            console.log('用户点击确定')
          } else { //这里是点击了取消以后
            console.log('用户点击取消')
          }
        }
      })
    } else {
      var that = this;
      wx.request({
        url: getApp().globalData.url + "/user/addpackorder",
        data: {
          sendname: that.data.sender,
          sendadd: that.data.senderAddress,
          sendphone: that.data.senderTelephone,
          receivename: that.data.addressee,
          receiveadd: that.data.addresseeAddress,
          receivephone: that.data.recipientTelephone,
          link: that.data.telephone,
          idcard: that.data.idnumber,
          usersay: that.data.remarks
        },
        header: getApp().globalData.header,
        success(res) {
          console.log(res)
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
    // 页面初始化 options为页面跳转所带来的参数
  }
});