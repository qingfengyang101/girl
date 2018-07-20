/**
 *  get common component index
 *  author: xuyinghao
 *  Date: 2018/6/30
 */
import loginCommon from './loginCommon';
import commonDialog from './commonDialog';
import commonFire from './commonFire';

const commonComponentMap = {
  install (Vue) {
    Vue.component('login-common', loginCommon);
    Vue.component('common-dialog', commonDialog);
    Vue.component('common-fire', commonFire);
  }
}

export default commonComponentMap;
export const install = commonComponentMap.install;
