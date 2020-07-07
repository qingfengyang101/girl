/**
 *  API common for project
 *  author: xuyinghao
 *  Date: 2018/6/30
 */

const API = {
  LOGIN_GET_USER_NAME: '/static/api/data/LOGIN_GET_USER_NAME.json',
  GET_WIFE_LIKE: '/static/api/data/WIFE_LIKE_HOBBY.json',
  WIFE_INFO_BASE: '/static/api/data/WIFE_INFO_BASE.json',
  WEATHER_LUOHE_REQUERST_API: 'https://free-api.heweather.net/s6/weather/now?location=yuanhui,luohe&key=56e9190d51af4ddabe4f40cf94573340',
  WEATHER_LUOHE_REQUERST_KEY: '56e9190d51af4ddabe4f40cf94573340'
}

const apiMap = {}

const api = {
  install (Vue) {
    for (let key in API) {
      if (API.hasOwnProperty(key)) {
        apiMap[key] = API[key]
      }
    }

    Vue.prototype.$api = apiMap;
  }
}

export default api;
export const install = api.install;

