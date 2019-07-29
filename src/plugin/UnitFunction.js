/**
 *  common UnitFunction for project
 *  author: xuyinghao
 *  Date: 2018/6/30 14:28
 */

const CommonFunc = {
  /**
   *  the role is wife
   *  @param:
   *  @return {Boolean} true, false
   */
  isWife:  function (data) {
    return data;
  },


  /** 
   *  the judge for type function 
   *  @param: type { String }
   *  @return { Boolean } true or false
  */
  isType: function (type) {
    return function (target) {
      return `[object ${type}]` === Object.prototype.toString.call(target);
    }
  },

}

const CommonFuncMap = {};
const commonFunc = {
  install (Vue) {
    for (let key in CommonFunc) {
      if (CommonFunc.hasOwnProperty(key)) {
        CommonFuncMap[key] = CommonFunc[key]
      }
    }

    Vue.prototype.$commonFunc = CommonFunc;
  }
}

export default commonFunc;
export const install = commonFunc.install;


