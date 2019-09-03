// components/team/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    team:Object
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
      const teamId = this.data.team.teamId;
      wx.navigateTo({
        url: `/pages/nbaTeam-detail/nbaTeam-detail?teamId=${teamId}`,
      })
    }
  }
})
