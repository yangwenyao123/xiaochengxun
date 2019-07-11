Page({
  data: {
    damoHeight: '150',//demo高度
    imgUrls: [//图片地址
      {
        url: 'http://g.ydbcdn.com/site/imgs/1.png'
      }, {
        url: 'http://g.ydbcdn.com/site/imgs/2.png'
      },
      {
        url: 'http://g.ydbcdn.com/site/imgs/3.png'
      }, {
        url: 'http://g.ydbcdn.com/site/imgs/4.png'
      }
    ],
    arry: [false, false, false, false],

  },
  onPageScroll: function (res) {
    
    var _this = this;
    var str = parseInt(res.scrollTop / _this.data.damoHeight);
    console.log(str)
    _this.data.arry[str] = true;
    _this.setData({
      arry: _this.data.arry
    })
  },
  onLoad: function () {
    let _this = this;
    console.log(wx.getSystemInfoSync().windowHeight)
    let num = Math.ceil(wx.getSystemInfoSync().windowHeight / 300);
    console.log(num)
    for (let i = 0; i < num; i++) {
      _this.data.arry[i] = true;
    };
    this.setData({
      arry: _this.data.arry
    })
  }
})