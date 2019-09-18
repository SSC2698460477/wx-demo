const paginationBev = Behavior({
  // 需要用到的数据
  data: {
    dataArray: [],
    total: null,
    loading:false,
    noneResult:false,
    noneMore:false
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
      this.data.total = total;
      if(total == 0){
        this.setData({
          noneResult:true
        })
      }
    },
    // 判断是否还有数据需要加载
    hasMore() {
      if (this.data.dataArray.length >= this.data.total) {
        // 没有更多数据需要加载
        this.setData({
          noneMore:true
        })
        return false;
      } else {
        this.setData({
          noneMore:false
        })
        return true;
      }
    },
    // 初始化数据
    initialize() {
      // this.data.dataArray = [];
      this.setData({
        dataArray:[],
        loading:false,
        noneResult:false,
        noneMore:false
      })
      this.data.total = null;
    },
    // 判断是否上锁
    isLocked() {
      return this.data.loading ? true : false
    },
    // 加锁
    locked() {
      // this.data.loading = true;
      this.setData({
        loading: true
      })
    },
    // 释放锁
    unLocked() {
      // this.data.loading = false;
      this.setData({
        loading: false
      })
    }
  }
})

export {
  paginationBev
}