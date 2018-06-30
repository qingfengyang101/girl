/**
 *  get common component index
 *  author: xuyinghao
 *  Date: 2018/6/30
 */
import LoginCommon from './loginCommon';


const commonComponentMap = {
  install (Vue) {
    Vue.component('login-common', LoginCommon);
  }
}

export default commonComponentMap;
export const install = commonComponentMap.install;
