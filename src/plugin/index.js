/**
 *  use common function
 *  Author: xuyinghao,
 *  Date: 2018/6/28
 */
import Vue from 'vue'
import * as $sass from './commonSassVariable';

const PLUG = {
    install (Vue) {
        Vue.use($sass);
    }
};

export default PLUG;
export const install = PLUG.install;
