/**
 *  project of language common
 *  author: xuyinghao
 *  Date: 2018/6/30 13: 52
 */
let Language = {
  /** label **/
  'LABEL_MY_WIFE_NAME': '赵换敏'
}

const LanguageMap = {}

const LanguageInstall = {
  install (Vue) {
    for (let key in Language) {
      if (Language.hasOwnProperty(key)) {
        LanguageMap[key] = Language[key];
      }
    }

    Vue.prototype.$LanguageMap = LanguageMap;
  }
};

export default LanguageInstall;
export const install = LanguageInstall.install;
