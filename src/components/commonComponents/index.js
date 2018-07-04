/**
 *  get common component index
 *  author: xuyinghao
 *  Date: 2018/6/30
 */
import loginCommon from './loginCommon';
import commonDialog from './commonDialog';

const commonComponentMap = {
  install (Vue) {
    Vue.component('login-common', loginCommon);
    Vue.component('common-dialog', commonDialog);
  }
}

export default commonComponentMap;
export const install = commonComponentMap.install;
