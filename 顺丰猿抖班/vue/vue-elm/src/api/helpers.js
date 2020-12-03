import axios from "axios";

// 跨越：浏览器为了安全起见设置的一种机制
const baseUrl = '';
 
export function get(url) {
  return function(params = {}) {
    return axios.get(baseUrl + url, {
      params
    }).then((res) => {
      const { errno, data } = res.data
      if (errno === 0) {
        return data
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}