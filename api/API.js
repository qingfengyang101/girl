/**
 *  API common for project
 *  author: xuyinghao
 *  Date: 2018/6/30
 */
const API = {
  'LOGIN_API': 'https://www.baidu.com'
}

const apiMap = {}

const api = {
  install (Vue) {
    for (let key in API) {
      if (API.hasOwnProperty(key)) {
        apiMap[key] = API[key]
      }
    }

    Vue.prototype.$api = apiMap
  }
}

export default api;
export const install = api.install;

