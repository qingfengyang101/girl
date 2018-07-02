// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/** use common function **/
import * as PLUG from "./plugin/index";

/** use common component.js **/
import * as commonComponentMap from './components/commonComponents/index';
import MuseUI from './external/index';

/** use plugin **/
Vue.use(PLUG);

/** use common component **/
Vue.use(commonComponentMap);
Vue.use(MuseUI);


import store from './store/index.js';
console.log(store, 'store');

Vue.config.productionTip = false;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
