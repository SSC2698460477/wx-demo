// 操作字符串的工具类
class StringUtil {
  // 将字符串转化成数组 例如：南派三叔/中国友谊出版公司/2007-1/26.80元
  strToObj(str){
    const obj = new Object();
    const arr = str.split("/");
    if(arr.length == 4){
      obj.author = arr[0];
      obj.publish = arr[1];
      obj.pubDate = arr[2];
      obj.price = arr[3];
      return obj;
    }else if(arr.length < 4){
      return null;
    }else{
      obj.author = arr[0];
      obj.publish = arr[arr.length-3];
      obj.pubDate = arr[arr.length-2];
      obj.price = arr[arr.length-1];
      return obj;
    }
  }
}

export {
  StringUtil
}