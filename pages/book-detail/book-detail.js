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
    comments:[],
    posting:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 加载
    wx.showLoading({
      title: '拼命加载中...',
    })
    const bid = options.bid;
    console.log("书籍的id是：" + bid);
    const bookInfo = wx.getStorageSync(this._getKey(bid));
    if(!bookInfo){
      // 缓存中没有数据 从服务器查询
      bookModel.getBookById(bid).then(res => {
        console.log(res);
        const pubInfo = stringUtil.strToObj(res.bookInfo.pubInfo);
        this.setData({
          book: res.bookInfo,
          pubInfo: pubInfo,
          comments: res.bookShortComments
        })
        wx.setStorageSync(this._getKey(res.bookInfo.id), res);
        wx.hideLoading();
      })
    }else{
      // 直接从缓存中获取
      const res = wx.getStorageSync(this._getKey(bid));
      const pubInfo = stringUtil.strToObj(res.bookInfo.pubInfo);
      this.setData({
        book: res.bookInfo,
        pubInfo: pubInfo,
        comments: res.bookShortComments
      })
      wx.hideLoading();
    }
    
  },

  onFakePost(event){
    this.setData({
      posting: true
    })
  },

  onCancle(event){
    this.setData({
      posting:false
    })
  },

  // 短评提交
  onPost(event){
    const comment = event.detail.value.comment;
    if(!comment){
      return;
    }
    // 限制输入评论长度
    if(comment.length > 100){
       wx.showToast({
         title:"短评不能超过100字",
         icon:""
       }) 
    }
    console.log("bid:" + this.data.book.id + "comment:" + comment);
    // 短评提交到服务器
    bookModel.postComment(this.data.book.id,comment).then(res => {
      this.data.comments.unshift({
        shortComment:comment
      })
      this.setData({
        comments:this.data.comments,
        posting:false
      })
    })
  },

  // 生成缓存中key
  _getKey(index){
    return "book-"+index;
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