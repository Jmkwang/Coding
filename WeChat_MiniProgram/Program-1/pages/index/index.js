Page({

  /**
   * 页面的初始数据
   */
  data: {
    bang_arr: [{
        id: 0,
        Superscript: "文件",
        text: "帮我送",
        text_choose: "content_center_title_choose",
        image_choose: true
      },
      {
        id: 1,
        Superscript: "快递",
        text: "帮我取",
        text_choose: "",
        image_choose: false
      },
      {
        id: 2,
        Superscript: "美食",
        text: "帮我买",
        text_choose: "",
        image_choose: false
      },
      {
        id: 3,
        Superscript: "",
        text: "全能帮手",
        text_choose: "",
        image_choose: false
      },
      {
        id: 4,
        Superscript: "",
        text: "帮排队",
        text_choose: "",
        image_choose: false
      },
    ],
    huxian_image_url: [
      "http://m.qpic.cn/psc?/V54X0fOa2SyvsH1daDEZ0wX06H445m6x/45NBuzDIW489QBoVep5mcWLw*NW5.IAQ0mXVVl59jBX9AiyjQbI82Zih9fQWDF.wEMkxp7IaBJ51zCooZA6W6TQjFAz1wWAfC91FDJKj3Vg!/b&bo=ogAqAAAAAAADF7o!&rf=viewer_4"
    ],
    give_take: 0,
    icon_image: [
      {
        name: "帮买美食",
        url: "http://m.qpic.cn/psc?/V54X0fOa2SyvsH1daDEZ0wX06H445m6x/ruAMsa53pVQWN7FLK88i5inREWC65Daxj*7OHfeJEjhtmEzPzqp8uBhFF48cH2DeB153YoZ8mGRNSAK.wTex6PCrOBDimC9ukkflBj0KFtE!/mnull&bo=fwBvAAAAAAADBzI!&rf=photolist&t=5"
      },
      {
        name: "帮买饮品",
        url: "http://m.qpic.cn/psc?/V54X0fOa2SyvsH1daDEZ0wX06H445m6x/ruAMsa53pVQWN7FLK88i5vXuOXkMMp4ufQ0OCJpdsVGtuNWMwg9rABgRwnm*FxRhnneo2l.NlBENuU04nZYTqtAsXuTrAsHu12BYdFrnZcU!/mnull&bo=hAB1AAAAAAADB9M!&rf=photolist&t=5"
      },
      {
        name: "挂号排队",
        url: "http://m.qpic.cn/psc?/V54X0fOa2SyvsH1daDEZ0wX06H445m6x/45NBuzDIW489QBoVep5mcSdNQNZWEXDAE3Wba.ec9o.i0oTDUdw8XHqcjDArMGcB8Id1Ej3kYLr2wMEOrEpG6yeXYDYQHp43BtNZs4lgTI4!/b&bo=iAB5AAAAAAADF8M!&rf=viewer_4"
      },
      {
        name: "派发传单",
        url: "http://m.qpic.cn/psc?/V54X0fOa2SyvsH1daDEZ0wX06H445m6x/45NBuzDIW489QBoVep5mcfdJ86Gg*HkUdcNSPpV8CTtEbNasYY553uov*Ur1ETHFPEtJ35k1nkrVUIaVI4XhN.GnXtaMMnGwXbPwS.MpEPE!/b&bo=tgCqAAAAAAADFy4!&rf=viewer_4"
      },
      {
        name: "搬运货物",
        url: "http://m.qpic.cn/psc?/V54X0fOa2SyvsH1daDEZ0wX06H445m6x/45NBuzDIW489QBoVep5mcSdqkWPNpi**SWW*1Y1H0uriRjZ4IxMGSpW1Q.FnU9oO6GlCaOYXMxIiiE.6*F0542kA1.xMJwpbkbiEWW1x7eE!/b&bo=hAB8AAAAAAADF8o!&rf=viewer_4"
      },
      {
        name: "异地代办",
        url: "http://m.qpic.cn/psc?/V54X0fOa2SyvsH1daDEZ0wX06H445m6x/45NBuzDIW489QBoVep5mcSdNQNZWEXDAE3Wba.ec9o8rY7y0iIEHru4VuIyElOVIZZvAAI7U2tRuvjROnaXWV4JLuOyG.KTLouALhKmlwTU!/b&bo=iwB8AAAAAAADF8U!&rf=viewer_4"
      },
      {
        name: "小时工",
        url: "http://m.qpic.cn/psc?/V54X0fOa2SyvsH1daDEZ0wX06H445m6x/45NBuzDIW489QBoVep5mcSdNQNZWEXDAE3Wba.ec9o8P8UzeYZXIazgA84hY3z8b02kDRanVrW3OU3YqANkheSD0pPSzDSvfF*EIHu0*B7g!/b&bo=ZQByAAAAAAADFyU!&rf=viewer_4"
      },
      {
        name: "帮忙溜宠物",
        url: "http://m.qpic.cn/psc?/V54X0fOa2SyvsH1daDEZ0wX06H445m6x/45NBuzDIW489QBoVep5mcSdqkWPNpi**SWW*1Y1H0up7atdbZB0bJjlSPYYmo*QPnbMr7mu8pcugtqL2jyoO5m*.a5*IN4QQpWR91p4d21c!/b&bo=dwBlAAAAAAADFyA!&rf=viewer_4"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 广州市点击跳转函数
   */
  top_onclick: function () {
    wx.navigateTo({
      url: '/pages/city/index',
    })
  },
  /**
   * 下面图标点击跳转函数
   */
  button_onclick: function () {
    wx.navigateTo({
      url: '/pages/User_information/index',
    })
  },

  /**
   * 用户收货信息函数
   */
  User_information_onclick: function () {
    wx.navigateTo({
      url: '/pages/User_information/index',
    })
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
   * 
   *  帮点击函数 
   */
  bang_onclick: function (e) {
    let bang_arr = this.data.bang_arr
    let give_take = this.data.give_take

    for (let value in bang_arr) {
      if (value === e.currentTarget.id) {
        bang_arr[e.currentTarget.id].text_choose = 'content_center_title_choose'
        bang_arr[e.currentTarget.id].image_choose = true
      } else {
        bang_arr[value].text_choose = ''
        bang_arr[value].image_choose = false
      }

      if (e.currentTarget.id === "0") {
        give_take = 0
      }
      if (e.currentTarget.id === "1") {
        give_take = 1
      }
    }

    this.setData({
      bang_arr: bang_arr,
      give_take: give_take
    })

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