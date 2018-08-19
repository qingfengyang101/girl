/**
 *  get common component index
 *  author: xuyinghao
 *  Date: 2018/6/30
 */
import commonDialog from './commonDialog';

const commonComponentMap = {
  install (Vue) {
    Vue.component('common-dialog', commonDialog);
  }
}

export default commonComponentMap;
export const install = commonComponentMap.install;
