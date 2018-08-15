/**
 *  commit some modify funtion
 *  author: xyh
 *  Date: 2018/6/30 17:51
 */

  import * as types from './mutation-types';
  import Vue from 'vue';
  import UserModel from './model/User';
  const that = Vue.prototype;

  export default {
    [types.GET_USER_NAME] (state, payload) {
      Vue.prototype.eventBus.emit(types.GET_USER_NAME, payload)
    },

    [types.SET_USER_NAME] (state, name) {
      return state.name = name;
    },

    [types.GET_WIFE_LIKE] (state, payload) {
    },
    [types.USER_LOGIN_SYSTEM] (state, payload) {
      if (that.$lodash.isObject(payload)) {
         const userModel = new UserModel('User').initFromArray(payload);
         Vue.prototype.eventBus.emit(types.USER_LOGIN_SYSTEM, userModel);
      }
    }
  }
