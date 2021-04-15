//index.js
var app = getApp()
Page({

  onLoad(e) {
    console.log(e.title)
    this.setData({
      msgList: [
        { url: "url", title: "东风快递，使命必达——二炮" },
        { url: "url", title: "你好，我是快递员。您的快递到了～" },
        { url: "url", title: "爱情就像快递，爱上只在一瞬间，更多的是等待" }]
    });
  },
  data: {
    routers: [
      {
        name: '寄快递',
        url: 'sendExpress/sendExpress',
        icon: '/images/index-image/kuaidi.png',
        code: '10'
      },
      {
        name: '跑腿',
        url: 'runExpress/runExpress',
        icon: '/images/index-image/paotui.png',
        code: '11'
      },
      {
        name: '超市',
        url: '/pages/add/add',
        icon: '/images/index-image/chaoshi.png',
        code: '10'
      },
      {
        name: '打印',
        url: '/pages/compile/compile',
        icon: '/images/index-image/dayin.png',
        code: '11'
      },
      {
        name: '订餐',
        url: '/pages/compile/compile',
        icon: '/images/index-image/dingcan.png',
        code: '10'
      },
      {
        name: '订票',
        url: '/pages/compile/compile',
        icon: '/images/index-image/dingpiao.png',
        code: '11'
      },
      {
        name: '闲置',
        url: '/pages/compile/compile',
        icon: '/images/index-image/xianzhi.png',
        code: '10'
      },
      {
        name: '拼车',
        url: '/pages/compile/compile',
        icon: '/images/index-image/pinche.png',
        code: '11'
      },
      {
        name: '其他',
        url: '/pages/my/index/index',
        icon: '/images/index-image/qita.png',
        code: '10'
      }
    ],
    imgUrls: [
      '/images/index-image/1.png',
      '/images/index-image/2.png',
      '/images/index-image/3.png'
    ],
    indicatorDots: true, // 是否显示面板指示点
    autoplay: true,      // 是否自动切换
    circular: true,      // 是否采用衔接滑动
    interval: 3000,      // 自动切换时间间隔
    duration: 1000,      // 滑动动画时长
  },
  getCoupons: function () {
    var that = this;
    WXAPI.coupons().then(function (res) {
      if (res.code == 0) {
        that.setData({
          coupons: res.data
        });
      }
    })
  }
})

