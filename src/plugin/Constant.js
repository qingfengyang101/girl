
/**
 *  common constant for project
 *  author: xuyinghao
 *  Date: 2018/6/30 14:09
 */

const Constant = {
  WIFE_NAME: '赵换敏',
  WIFE_SEX: '女',
  WIFE_AGE: 26,
  WIFE_TELEPHONE: 18567118887,
  WIFE_TELEPHONE_NEW: 18239536167,
  WIFE_LIKE_EAT_FOOD: '麻辣尚席',
  WIFE_BOY: '许英豪',
  WOMAN: 1,
  OVERLAY_OPACITY: 0.7,
  WIFE_BIRTHDAY_DATE: 28,
  WIFE_BIRTHDAY_MONTH: 6
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


