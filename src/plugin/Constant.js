
/**
 *  common constant for project
 *  author: xuyinghao
 *  Date: 2018/6/30 14:09
 */

const Constant = {
  'WOMAN': 1
}

const ConstantMap = {};

const constant = {
  install (Vue) {
    for (let key in Constant) {
      if (Constant.hasOwnProperty(key)) {
        ConstantMap[key] = Constant[key];
      }
    }

    Vue.prototype.$constant = ConstantMap;
  }
}

export default constant;
export const install = constant.install;


