import {
  KeywordModel
} from "../../models/keyword.js"

import {
  BookModel
} from "../../models/book.js"

// 实例化
const keywordModel = new KeywordModel();
const bookModel = new BookModel();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    more: {
      type: String,
      observer: '_load_more'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    historyWords: [],
    dataArray: [],
    searching: false,
    loading: false // 充当锁的角色
  },

  // 组件初始化时候加载的方法
  attached() {
    this.setData({
      historyWords: keywordModel.getHistory()
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 加载更多搜索结果的处理函数
    _load_more() {
      if (!this.data.q) {
        return;
      }
      if (this.data.loading) {
        return;
      }
      console.log(123123);
      const length = this.data.dataArray.length;
      this.data.loading = true;
      bookModel.search(length, this.data.q).then(res => {
        const tempArray = this.data.dataArray.concat(res.list);
        this.setData({
          dataArray: tempArray
        })
      })
      this.data.loading = false;
    },
    onCancel(event) {
      // 交给页面处理
      this.triggerEvent("cancel", {}, {})
    },
    // 清除搜索记录
    onDelete(event) {
      this.setData({
        dataArray: [],
        searching: false
      })
    },
    // 搜索功能方法
    onConfirm(event) {
      wx.showLoading({
        title: '拼命加载中...',
      })
      this.setData({
        searching: true
      })
      const keyword = event.detail.value || event.detail.text;
      // console.log(keyword);
      bookModel.search(0, keyword).then(res => {
        this.setData({
          dataArray: res.list,
          q: keyword
        })
        keywordModel.addToHistory(keyword);
        wx.hideLoading();
      })
    }
  }
})