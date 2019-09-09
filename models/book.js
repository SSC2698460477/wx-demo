import {
  HTTP
} from "../util/http.js"
// 创建书籍相关的查询接口类
class BookModel extends HTTP {
  getBookList(page, rows) {
    return this.request({
      url: "api/book/queryBookList",
      data: {
        page: page,
        rows: rows
      }
    });
  }

  // 搜索书籍
  search(start,q){
    return this.request({
      url:"api/book/searchBooks",
      data:{
        q:q,
        start:start
      }
    })
  }

  // 根据id 查询书籍信息 
  getBookById(bid){
    return this.request({
      url:`api/book/queryBookInfoById/${bid}`,
    })
  }

  // 短评提交方法
  postComment(bid,comment){
    return this.request({
      url:"api/book/addShortComment",
      method:"POST",
      data:{
        bookId:bid,
        shortComment:comment
      }
    })
  }
}

export {
  BookModel
}