
/**
 *  common constant for project
 *  author: xuyinghao
 *  Date: 2018/6/30 14:09
 */

const Constant = {
  WIFE_NAME: '赵换敏',
  WIFE_SEX: '女',
  WIFE_AGE: 26,

  /** telephone **/
  WIFE_TELEPHONE: 18567118887,
  WIFE_TELEPHONE_NEW: 18239536167,

  /** place **/
  WIFE_LIKE_EAT_FOOD: '麻辣尚席',
  WIFE_BOY: '许英豪',
  WOMAN: 1,
  WIFE_BOARD_MESSAGE_COLS: 30,
  WIFE_BOARD_MESSAGE_ROWS: 3,

  /** css opacity **/
  OVERLAY_OPACITY: 0.7,
  Z_INDEX_SHADE: 20141226,

  /** date **/
  WIFE_BIRTHDAY_DATE: 28,
  WIFE_BIRTHDAY_MONTH: 6,

  /** transition  **/
  TRANSITION_FADE: 'fade'
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


