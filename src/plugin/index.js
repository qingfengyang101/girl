/**
 *  use common function
 *  Author: xuyinghao,
 *  Date: 2018/6/28
 */
import Vue from 'vue'
import * as $sass from './CommonSassVariable';
import * as Constant from './Constant';
import * as API from '../../static/api/API';
import * as CommonFunc from './UnitFunction';
import * as Assert from './PMAssert';
import * as Https from './Https/index';

const PLUG = {
    install (Vue) {
        Vue.use($sass);
        Vue.use(Constant);
        Vue.use(API);
        Vue.use(CommonFunc);
        Vue.use(Assert);
        Vue.use(Https);
    }
};

export default PLUG;
export const install = PLUG.install;
