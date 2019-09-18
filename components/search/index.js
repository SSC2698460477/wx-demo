import {
  KeywordModel
} from "../../models/keyword.js"

import {
  BookModel
} from "../../models/book.js"

import {
  paginationBev
} from "../behaviors/pagination.js"

// 实例化
const keywordModel = new KeywordModel();
const bookModel = new BookModel();

Component({
  /**
   * 组件的behavior列表
   */
  behaviors: [paginationBev],
  /**
   * 组件的属性列表
   */
  properties: {
    more: {
      type: String,
      observer: 'loadMore'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    historyWords: [],
    // dataArray: [],
    searching: false,
    // loading: false, // 充当锁的角色
    loadingCenter: false
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
    loadMore() {
      if (!this.data.q) {
        return;
      }
      if (this.isLocked()) {
        return;
      }

      if (this.hasMore()) {
        this.locked();
        bookModel.search(this.getCurrentStart(), this.data.q).then(res => {
          this.setMoreData(res.list);
          this.unLocked();
        }, () => {
          // 请求失败需要释放锁
          this.unLocked();
        })

      }
    },
    onCancel(event) {
      this.initialize();
      // 交给页面处理
      this.triggerEvent("cancel", {}, {})
    },
    // 清除搜索记录
    onDelete(event) {
      this.initialize();
      this._hideResult();
    },
    // 搜索功能方法
    onConfirm(event) {
      this._showLoadingCenter();
      this._showResult();
      // 初始化behavior中的数据
      this.initialize();
      const keyword = event.detail.value || event.detail.text;
      bookModel.search(0, keyword).then(res => {
        this.setMoreData(res.list);
        this.setTotal(res.total);
        this.setData({
          // dataArray: res.list,
          q: keyword
        })
        keywordModel.addToHistory(keyword);
        this._hideLoadingCenter();
      }, () => {
        this._hideLoadingCenter();
      })
    },
    // 显示加载图标
    _showLoadingCenter(){
      this.setData({
        loadingCenter:true
      })
    },
    // 隐藏加载图标
    _hideLoadingCenter(){
      this.setData({
        loadingCenter:false
      })
    },
    // 显示搜索结果
    _showResult() {
      this.setData({
        searching: true
      })
    },
    // 隐藏搜索结果
    _hideResult() {
      this.setData({
        searching: false,
        q:''
      })
    },

  }
})