/**
 *  commit some modify funtion
 *  author: xuyinghao
 *  Date: 2018/6/30 17:51
 */

  import * as types from './mutation-types';

  export default {
    [types.GET_USER_NAME] (state, name) {
      return state.name;
    },

    [types.SET_USER_NAME] (state, name) {
      return state.name = name;
    }
  }
