import {
  NBAModel
} from "../../models/nba.js"

// 实例化
const nbaModel = new NBAModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    teamInfo: Object, // 球队信息
    players: [] // 球员信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const teamId = options.teamId;
    console.log("teamId是:" + teamId);
    nbaModel.getTeamInfoById(teamId).then(res =>{
      this.setData({
        teamInfo: res
      })
       console.log(res)
    })
    nbaModel.getPlayersByTeamId(teamId).then(res =>{
      this.setData({
        players: res
      })
       console.log(res)
    })
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
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})