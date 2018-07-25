/**
 *  commit some modify funtion
 *  author: xuyinghao
 *  Date: 2018/6/30 17:51
 */

  import * as types from './mutation-types';
  import * as API from '../../static/api/API';
  import Vue from 'vue';
  const that = Vue.prototype;

  export default {
    [types.GET_USER_NAME] ({commit}, payload) {
      that.$https.get(types.GET_USER_NAME, that.$api.LOGIN_GET_USER_NAME);
      commit(types.GET_USER_NAME, payload);
    }
  }
