// 处理搜索的类
import {
  HTTP
}from "../util/http.js"

class KeywordModel extends HTTP{

  key = "q";
  maxLength = 10;

  // 获取历史搜索记录
  getHistory(){
    const words = wx.getStorageSync(this.key);
    if(!words){
      return [];
    }
    return words;
  }

  // 将搜索结果加入缓存中
  addToHistory(keyword){
    let words = this.getHistory();
    if(!words.includes(keyword)){
      const length = words.length;
      // 删除末尾的Word 只保留maxLength个记录
      if(length >= this.maxLength){
        words.pop();
      }
      words.unshift(keyword);
      wx.setStorageSync(this.key, words);
    }
  }
}

export {KeywordModel}