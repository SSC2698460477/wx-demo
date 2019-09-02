import {
  BookModel
} from "../../models/book.js"

// 实例化BookModel
const bookModel = new BookModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 定义数组
    books:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 调取接口的书籍接口
    bookModel.getBookList(1, 50).then(res => {
      this.setData({
        books:res.list
      })
      // console.log(res.list);
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