/**
 *  common sass variable
 *  author: xuyinghao
 *  Date: 2018/6/28
 */

const SASS_COMMON_VALUE = {

  /** width and height pull in screen **/
  $widthPull: '100%',
  $heightPull: '100%',

  /** BIC box style **/
  $none: 'none',
  $block: 'block',
  $inlineBlock: 'inline-block',
  $flex: 'flex',
  $table: 'table',
  $tableCell: 'table-cell',

  /** Position style common **/
  $relative: 'relative',
  $absolute: 'absolute',
  $fixed: 'fixed',
  $static: 'static',

  /** color style common **/
  $red: '#cc6699',
  $blue: '##0088cc'

  /** clear **/

}


let $sassMap = {};

const $sass = {
  install (Vue) {
    for (let key in SASS_COMMON_VALUE) {
       $sassMap[key] = SASS_COMMON_VALUE[key];
    }

    Vue.prototype.$sassMap = $sassMap;
  },
}

export default  $sass;
export const install = $sass.install;