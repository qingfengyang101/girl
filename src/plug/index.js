/**
 *  use common function
 *  Author: xuyinghao,
 *  Date: 2018/6/28
 */
import Vue from 'vue'
let PlUG = {};

const prototypeVue = Vue.prototype;

import SASS_COMMON_VALUE from './commonSassVariable';

  prototypeVue.$sass = {
      get: (value) => {
          return SASS_COMMON_VALUE.value;
      }
  }

  PlUG.sassPlug = prototypeVue.$sass;

  export default PlUG;
