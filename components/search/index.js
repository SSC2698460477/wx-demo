import {
  KeywordModel
}from "../../models/keyword.js"

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

  },

  /**
   * 组件的初始数据
   */
  data: {
    historyWords:[],
    dataArray:[],
    searching:false
  },

  // 组件初始化时候加载的方法
  attached(){
    this.setData({
      historyWords: keywordModel.getHistory()
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCancel(event){
      // 交给页面处理
      this.triggerEvent("cancel",{},{})
    },
    // 清除搜索记录
    onDelete(event){
      this.setData({
        dataArray:[],
        searching:false
      })
    },
    // 搜索功能方法
    onConfirm(event){
      this.setData({
        searching:true
      })
      const keyword = event.detail.value || event.detail.text;
      console.log(keyword);
      bookModel.search(0,keyword).then(res => {
        this.setData({
          dataArray:res.list,
          q:keyword
        })
        keywordModel.addToHistory(keyword);
      })
    }
  }
})
