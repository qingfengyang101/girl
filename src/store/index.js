/**
 *  create store  index.js for project
 *  author: xuyinghao
 *  Date: 2018/6/30 16:02
 */
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state.js';
import * as getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';
import * as loginStore from './modules/loginStore';
import * as answerQuestion from './modules/answerQuestion';
import * as createLogger from 'vuex/dist/logger'; // modify log

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'; // 开发环境为true, 否则为false
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    loginStore,
    answerQuestion
  },
  plugins: debug ? [createLogger()] : [] // 开发环境显示vuex的状态修改
});









