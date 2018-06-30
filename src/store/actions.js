/**
 *  commit some modify funtion
 *  author: xuyinghao
 *  Date: 2018/6/30 17:51
 */

  import * as types from './mutation-types';

  export default {
    getUserName ({commit}, {age, name}) {
      commit(types.GET_USER_NAME, name);
    }
  }
