// components/player/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    player:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(event){
      // console.log(this.data.player.id)
      wx.navigateTo({
        url: `/pages/nbaPlayer-detail/nbaPlayer-detail?playerId=${this.data.player.id}`,
      })
    }
  }
})
