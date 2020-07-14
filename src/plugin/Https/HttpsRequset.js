/**
 *  http quest for Browser to use vue-axios
 *  common quest error and common success model
 *  common server error code or success code for to handle
 *  `post`
 *  `get`
 *  `all`
 *   author: xyh
 *   Date: 2018/7/24 16:58
 */

  import Vue from 'vue';
  import PMServerCode from './PMserverCode';
  import EventBus from '../EventBus.js';

  const that = Vue.prototype;

  export function post (methods, url, params) {
    that.$Assert.isString(methods);
    that.$Assert.isString(url);
    that.$Assert.isObject(params);

    fetch(url, params)
      .then((response) => {
        if (that.$Assert.isObject(response)) {
          return commonRequestSuccess(methods, response);
        }
    })
      .catch((error) => {
        if (that.$Assert.isObject(error)) {
          return commonRequestError(methods, error);
        }
      })
  }

  export function get (methods, url, params) {
    that.$Assert.isString(methods);
    that.$Assert.isString(url);
    if (params) {
      let payload = [];
      that.$lodash.map(params, function (v, k) {
        payload.push(k + '=' + v + '&');
      });

      url += ('?' + payload.join('')).slice(0 , url.length - 1);
    }

    console.log(fetch, 'fetch...')
    fetch(url)
      .then(response => response.json())
      .then( data => {
        
          if (that.$lodash.isObject (data)) {
            commonRequestSuccess(methods, data);
            return data;
          }
      })
      .catch((error) => {
        if (that.$lodash.isObject(error)) {
          commonRequestError(methods, error);
          return error;
        }
      })
  }

  export function commonRequestSuccess (methods, res) {
    Vue.prototype.EventBus.emit(methods, res);
  }

  export function commonRequestError (methods, error) {
    Vue.prototype.EventBus.emit(methods, error);
  }


  export default {
    post,
    get,
  }
