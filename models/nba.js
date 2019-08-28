import {
  HTTP
} from "../util/http.js"

class NBAModel extends HTTP {

  // 获取NBA球队列表信息
  getAllTeamList() {
    return this.request({
      url: "api/nba/queryAllTeam"
    })
  }
}

export {
  NBAModel
}