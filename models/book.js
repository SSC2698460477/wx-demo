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

  // 根据id 查询书籍信息 
  getBookById(bid){
    return this.request({
      url:`api/book/queryBookInfoById/${bid}`,
    })
  }


}

export {
  BookModel
}