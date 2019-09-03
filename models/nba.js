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

  // 根据teamId获取球队以及该球队球员信息
  getTeamInfoById(teamId){
    return this.request({
      url:`api/nba/queryTeamById/${teamId}`,
    })
  }
  // 根据teamId 查询球员信息列表
  getPlayersByTeamId(teamId) {
    return this.request({
      url: "api/nba/queryPlayersByTeamId",
      data: {
        teamId: teamId
      }
    })
  }
}

export {
  NBAModel
}