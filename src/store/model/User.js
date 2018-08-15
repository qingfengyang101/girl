/**
 *  user about data info to login for check
 *  author: xyh
 *  Date: 2018/8/15 11:48
 */

  import ModelBase from './ModelBase';
  import Vue from 'vue';
  let vuePrototype = Vue.prototype;

  class UserModel extends ModelBase {
    constructor (modelName) {
      super(modelName)
    }

    data () {
      return {
        USER_ID: null,
        USER_NAME: '',
        USER_ROLE: '',
        USER_PERMISSION: [],
        USER_STATUS: null,
      }
    }
  }

  export default UserModel;

