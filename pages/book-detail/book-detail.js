import {
  BookModel
} from "../../models/book.js"
import {
  StringUtil
}from "../../util/stringUtil.js"

// 实例化Bookmodel
const bookModel = new BookModel();
const stringUtil = new StringUtil();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    book: Object,
    pubInfo:Object,
    comments:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const bid = options.bid;
    console.log("书籍的id是：" + bid);
    bookModel.getBookById(bid).then(res => {
      console.log(res);
      const pubInfo = stringUtil.strToObj(res.bookInfo.pubInfo);
      this.setData({
        book:res.bookInfo,
        pubInfo:pubInfo,
        comments: res.bookShortComments
      })
     
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