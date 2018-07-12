/**
 *  board common init
 *  author: xuyinghao
 *  Date：2018/7/12 13:52
 */

;(function (w, vue, undefined) {

  /**
   *  write in css index.
   *  retina in compatibility of canvas
   *  model selector in function DOM
   *  @param {String} elemId
   */
  const selector = (select, parent) => {
    var parent = parent || document;

    if (select.indexOf('#') !== -1) {
      return parent.getElementById(select);
    } else if (select.indexOf('.') !== -1) {
      return parent.getElementsByClassName(select)[0];
    } else {
      return parent.getElementsByTagName(select)[0];
    }
  }

  /**
   *  const some must be params
   *  init canvas in HTML for some window
   *  canvas in getContent 2d
   */
  const canvas = selector('#canvas');
  const ctx = canvas.getContent('2d');
  ctx.globalCompositeOperation = 'source-atop';

  /**
   *  retina set canvas width and height 3 else some not clear
   * @type {number}
   */
  const RATIO = 3;
  let lastImageDate = [];
  const tool = selector('#tool');
  let toolHeight = tool.offsetHeight;
  let canvasOffset = canvas.getBoundingClientRect();







})(window, Vue);



