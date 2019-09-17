const paginationBev = Behavior({
  // 需要用到的数据
  data: {
    dataArray: [],
    total: null
  },
  // 需要提供的方法
  methods: {
    // 加载更多数据的方法
    setMoreData(dataArray) {
      const tempArray = this.data.dataArray.concat(dataArray);
      this.setData({
        dataArray: tempArray
      })
    },
    // 获取当前数据的总条数
    getCurrentStart() {
      return this.data.dataArray.length;
    },
    // 设置查询数据的总条数
    setTotal(total) {
      this.data.total = total
    },
    // 判断是否还有数据需要加载
    hasMore() {
      if (this.data.dataArray.length >= this.data.total) {
        console.log(this.data.total)
        return false;
      } else {
        return true;
      }
    },
    // 初始化数据
    initialize() {
      this.data.dataArray = [];
      this.data.total = null;
    }
  }
})

export {
  paginationBev
}