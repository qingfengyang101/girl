/**
 *  commit some modify funtion
 *  author: xuyinghao
 *  Date: 2018/6/30 17:51
 */

  import * as types from './mutation-types';
  import Vue from 'vue';

  export default {
    [types.GET_USER_NAME] (state, payload) {
      Vue.prototype.eventBus.emit(types.GET_USER_NAME, payload)
    },

    [types.SET_USER_NAME] (state, name) {
      return state.name = name;
    }
  }
