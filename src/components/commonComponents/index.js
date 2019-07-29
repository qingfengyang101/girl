/**
 *  get common component index
 *  author: xuyinghao
 *  Date: 2018/6/30
 */
import commonDialog from './commonDialog';
import commonWeather from './commonWeather';

const commonComponentMap = {
  install (Vue) {
    Vue.component('common-dialog', commonDialog);
    Vue.component('common-weather', commonWeather);
  }
}

export default commonComponentMap;
export const install = commonComponentMap.install;
