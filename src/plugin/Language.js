/**
 *  project of language common
 *  author: xuyinghao
 *  Date: 2018/6/30 13: 52
 */
let Language = {
  /** label **/
  'LABEL_MY_WIFE_NAME': '赵换敏',
  LABEL_TITLE_BREAKTHROUGH: '第一关',
  LABEL_TITLE_BREAKTHROUGH_SECOND: '第二关',
  LABEL_MY_WIFE_BIRTHDAY_DATE: '输入小公主的生日月份和日期， 不限年数 (阴历)',
  LABEL_WIFE_LIKE_FOOD: '输入小公主最喜欢的漯河火锅名称',
  LABEL_WIFE_BOY: '输入小公主的老公名字',
  LABEL_LOGIN: 'LOGIN',
  LABEL_WIFE_BASE_INFO: '基本爱好',


  /** placeholder **/
  HOLDER_WIFE_NAME: '输入小公主姓名',
  HOLDER_WIFE_TELEPHONE: '输入小公主电话',
  HOLDER_WIFE_HOBBY_BASE: '爱好生活',

  /** title **/
  TITLE_HOME_PHOTO: '猜照片',

  /** dialog **/
  DIALOG_TITLE_TIP_MESSAGE: '温馨提示',
  DIALOG_TITLE_TIP_GO: '亲， 今天是小公主的生日， 你需要闯关通过，你才能看到神秘的生日礼物！祝你成功哦！',
  DIALOG_OVERLAY_CLOSE_MESSAGE: '能参加小公主的生日， 想必是小公主的最亲近的人， 那一定对小公主的生活各个方面都比较了解，请仔细回想， 认真闯关哦！',
  DIALOG_TITLE_SUCCESS_TIP: '恭喜亲，闯关成功! 确认过眼神, 下一关，继续加油哦！',
  DIALOG_TITLE_TIP_SECOND: '欢迎亲，来到第二关, 确认过眼神，你是小公主亲近的人， 这一关，更要考验你和小公主的亲密度， 加油哦！ 祝你闯关成功！',

  /** button **/
  BTN_GO: '开始吧',
  BTN_SUBMIT_ANSWER: '提交答案',

  /** date **/
  FORMAT_TIME: 'YYYY 年 MM 月 DD 日',

  /** error text **/
  WIFE_NAME_ERROR_TEXT: '小公主的姓名， 输入错误！ 你完了！',
  WIFE_TELEPHONE_ERROR_TEXT: '小公主的电话， 输入错误！ 两个号码， 一个都记不住， 你完了！',
  WIFE_LIKE_EAT_FOOD_ERROR_TEXT: '喜欢吃的火锅，输入错误! 你难道没有请过小公主吃过火锅吗？你完了！',
  WIFE_BOY_ERROR_TEXT: '小公主老公姓名，输入错误！亲， 你完了！小公主会怪你的！',
  WIFE_BIRTHDAY_DATE_ERROR_TEXT: '小公主的生日，输入错误！ 亲，你来干啥？ 你真的完了！',
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
