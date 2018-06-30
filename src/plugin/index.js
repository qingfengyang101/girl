/**
 *  use common function
 *  Author: xuyinghao,
 *  Date: 2018/6/28
 */
import Vue from 'vue'
import * as $sass from './CommonSassVariable';
import * as LanguageInstall from './Language';
import * as Constant from './Constant';
import * as API from '../../api/API';
import * as CommonFunc from './UnitFunction';

const PLUG = {
    install (Vue) {
        Vue.use($sass);
        Vue.use(LanguageInstall);
        Vue.use(Constant);
        Vue.use(API);
        Vue.use(CommonFunc);
    }
};

export default PLUG;
export const install = PLUG.install;
