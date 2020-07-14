// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';

window.getVuePrototype = (Vue) => {
  return (Vue && Vue.prototype);
}

const vuePrototype = window.getVuePrototype(Vue);

/** init use data for when app install */



/** use common function **/
import * as PLUG from "./plugin/index";

/** use common component.js **/
import commonComponentMap from './components/commonComponents/index';
import MuseUI from './external/index';
import Lodash from './external/lodash';
import store from './store/index.js';
import i18n from './plugin/Language/PMLanguage';
import Axios from 'axios';
import getDataLoad from './plugin/getDataLoad';

console.log(getDataLoad,'getDataLoad...')

vuePrototype.$axios = Axios;
vuePrototype.$lodash = Lodash;

Vue.use(PLUG);
Vue.use(commonComponentMap);
Vue.use(MuseUI);
Vue.use(getDataLoad);

Vue.config.productionTip = false;
/** requset to  */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
