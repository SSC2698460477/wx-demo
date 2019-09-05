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
    const pageIndex = 1;
    const pageNum = 100;
    const key = this._getKey(pageIndex, pageNum);
    //从缓存中获取数据
    const books = wx.getStorageSync(key);
    if(!books){
      // 缓存中没有数据
      // 调取接口的书籍接口
      bookModel.getBookList(pageIndex, pageNum).then(res => {
        this.setData({
          books: res.list
        })
        // console.log(res);
        wx.setStorageSync(this._getKey(res.pageNum,res.pageSize), res.list);  
      })
    }else{
      this.setData({
        books: books
      })
    }
  },

  // 自动生成缓存中key
  _getKey(index,num) {
    const key = "books-" + index + "-" + num;
    return key;
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