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
}

export {
  BookModel
}