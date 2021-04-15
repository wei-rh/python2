// pages/run/run.js
//index.js
var app = getApp()
Page({
  data: {
    msgList: [{
        url: "url",
        title: "东风快递，使命必达——二炮"
      },
      {
        url: "url",
        title: "你好，我是快递员。您的快递到了～"
      },
      {
        url: "url",
        title: "爱情就像快递，爱上只在一瞬间，更多的是等待"
      }
    ],

    imgUrls: [
      '/images/run-image/1.jpg',
      '/images/run-image/2.jpg',
      '/images/run-image/3.png'
    ],
    indicatorDots: true, // 是否显示面板指示点
    autoplay: true, // 是否自动切换
    circular: true, // 是否采用衔接滑动
    interval: 3000, // 自动切换时间间隔
    duration: 1000, // 滑动动画时长
  },
  bindrun3(){
    wx.navigateTo({
      url: '../index/runExpress/runExpress',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  bindrun4(){
    wx.navigateTo({
      url: '../index/sendExpress/sendExpress',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})