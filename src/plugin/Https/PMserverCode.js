/**
 *  server code for template
 *  web request server callback code
 *  author: xyh
 *  Date: 2018/7/25
 */

 const RESPONSE_STATUS_LIST_ERROR = {
   /** 错误请求 **/
   ERROR_RESPONSE: 400,

  /** 未授权，请重新登录 **/
  ERROR_UNAUTHORIZED_AGAIN_LOGIN: 401,

  /** 拒绝访问 **/
  ERROR_ACCESS_DENIED: 403,

  /** 请求错误，未找到该资源 **/
  ERROR_RESPONSE__NOT_FOUND_DATA: 404,

  /** 请求方法未允许 **/
  ERROR_RESPONSE_NOT_ALLOW: 405,

  /** 请求超时 **/
  ERROR_REQUEST_TIMEOUT: 408,

  /** 服务器端出错 **/
  ERROR_SERVER_ERROR: 500,

  /** 网络未实现 **/
  ERROR_NETWORK_NOT_TRUE: 501,

  /** 网络错误 **/
  ERROR_NETWORK_ERROR: 502,

  /** 服务不可用 **/
  ERROR_SERVER_NOT_USE: 503,

  /** 网络超时 **/
  ERROR_NETWORK_TIMEOUT: 504,

  /** http版本不支持该请求 **/
  ERROR_HTTP_NOT_SUPPORT_REQUEST: 505,
}

export default RESPONSE_STATUS_LIST_ERROR;



