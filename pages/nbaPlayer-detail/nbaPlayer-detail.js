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
    playerInfo: Object
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: '拼命加载中...',
    })
    const playerId = options.playerId;
    console.log("playerId:" + playerId);
    const playerReq = nbaModel.getPlayerById(playerId);

    playerReq.then(res =>{
      console.log(res);
      this.setData({
        playerInfo:res
      })
      wx.hideLoading();
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