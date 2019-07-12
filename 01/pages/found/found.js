// pages/found/found.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cards: [

    ],
   cards_test:[
     {
       text: "当清晨的一缕阳光透过窗帘上的空隙映照在沉睡的脸庞时，微微张开的双眼朦胧地注视着周遭的一切，新的一天悄然而至。",
       coverImg: "/pages/imags/found/0.jpg",
       id: null

     },
     {
       text: "当清晨的一缕阳光透过窗帘上的空隙映照在沉睡的脸庞时，微微张开的双眼朦胧地注视着周遭的一切，新的一天悄然而至。",
       coverImg: "/pages/imags/found/0.jpg",
       id: null

     },
   ],
    loading: 'false',
    haveMore: 'true',
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;

    this.setData({
      loading: 'true'
    }),
     

// 上滑加载更多
    setTimeout(() => {
      
      var temp = this.data.cards_test.slice(0, 4);

      let cards = this.data.cards.concat(temp);
    
      var haveMore = 'false';

      if (cards.lenght < this.data.cards_test.length) {
        haveMore = 'true';
      }

      that.setData({
        cards: cards,
        loading: 'false'
      })
    }, 1000)
  },
  zan: function (e) {
    var i = e.target.dataset.index
    this.data.cards[i].id = i
    this.data.cards_test[i].id = i

    // 原数据
    this.setData({ ["cards_test[" + i + "]"]: this.data.cards_test[i] })

    // 新数据
    this.setData({ ["cards[" + i + "]"]: this.data.cards[i]})
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;

    if (this.data.haveMore == 'false') {
      return;
    }

    this.setData({
      loading: 'true'
    })

    setTimeout(function () {
      let length = that.data.cards.length;

      let temp = that.data.cards_test.slice(length, length + 4);

      let cards = that.data.cards.concat(temp);

      if (cards.length >= that.data.cards_test.length) {
        that.setData({
          haveMore: 'false'
        })
      }

      that.setData({
        cards: cards,
        loading: 'false'
      })

    }, 2000)

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})