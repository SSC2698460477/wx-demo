// 封装发送请求的方法 主体是wx.request方法 这里用的是promise方式进行封装

import {
  config
} from '../config.js'

const tips = {
  1:"抱歉，出现了一个小错误",
  404:"找不到页面",
  500:"程序中有错误"
}

// 创建HTTP类 
class HTTP {
  // 请求接口地址方法 promise写法 防止回调地狱
  request({
    url,
    data = {},
    method = "GET"
  }) {
    // resolve：请求成功回调函数 reject：请求失败回调函数
    return new Promise((resolve, reject) => {
      // 创建方法 执行具体的逻辑
      this._request(url, resolve, reject, data, method);
    });
  }

  _request(url, resolve, reject, data = {}, method = "GET") {
    wx.request({
      url: config.api_base_url + url,
      method: method,
      data: data,
      header: {
        "content-type": "application/json"
      },
      success: (res) => {
        // 接口请求成功
        // 获取请求状态码 本身是number类型需要转换成string类型
        const code = res.statusCode.toString();
        // startsWith endWith es6中新方法
        if(code.startsWith("2")){
          // 请求成功 用resolve回调函数传递数据
          resolve(res.data);
        }else{
          // 通知promise状态改变
          reject();
          // 获取错误状态码
          const err_code = res.data.err_code;
          // 进行错误处理
          this.error_code(err_code);
        }
      },
      fail:(err)=>{
        // 接口请求失败 通知promise当前状态改变
        reject();
        this._show_error(1);
      }
    })
  }
  // 错误信息的处理
  _show_error(error_code){
    if(!error_code){
      error_code = 1;
    }

    const tip = tips[error_code];
    // 错误信息提示框
    wx.showToast({
      title: tip?tip:tips[1],
      icon:none,
      duration:2000
    })
  }
}

export {
  HTTP
};