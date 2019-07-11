

Page({
  data: {

    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    videoimage: "block", //默认显示封面

    markers: [{
      iconPath: "/resources/others.png",
      id: 0,
      latitude: 20.331989,
      longitude: 110.191319,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 110.191319,
        latitude: 20.331989
      }, {
          longitude: 110.191319,
          latitude: 20.331989
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/pages/imags/index/wz.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    video:"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400}"
  },

  //点击播放按钮，封面图片隐藏,播放视频
  bindplay: function (e) {
    this.setData({
      tab_image: "none"
    }),
      this.videoCtx.play()
  },
  onReady() {
    this.videoCtx = wx.createVideoContext('myVideo')
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})