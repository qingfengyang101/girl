/**
 *  board common init
 *  author: xuyinghao
 *  Date：2018/7/12 13:52
 */

import Vue from 'vue';

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
  let lastImageData = [];

  const tool = selector('#tool');
  let toolHeight = tool.offsetHeight;
  let canvasOffset = canvas.getBoundingClientRect();
  const canvasHeight = canvas.height = (canvasOffset.height - toolHeight) * RATIO;
  const canvasWidth = canvas.width = (canvasOffset.width) * RATIO;

  canvas.style.height = canvasHeight / RATIO + 'px';
  canvasOffset = canvas.getBoundingClientRect();

  /**
   *  window offset coordinate change of canvas
   *  so get right coordinate canvas
   *  init window and canvas some coordinate
   *  windowToCanvas handle to change window and canvas
   *
   * @param x
   * @param y
   * @return {{x: number, y: number}}
   */

  const windowToCanvasCoordinate = (x, y) => {
    return {
      x: (x - canvasOffset.left) * (canvasWidth / canvasOffset.width),
      y: (y - canvasOffset.top) * (canvasHeight / canvasOffset.height)
    }
  }

  /**
   * get touch some position message
   * @param e
   * @return {{x: number, y: number}}
   */
  const getTouchPosition = (e) => {
    let touch = e.changedTouches[0]; // touch
    return windowToCanvasCoordinate(touch.clientX, touch.clientY);
  }

  /**
   *  save canvas data and for shift up data
   * @param data
   */
  const saveImageData = (data) => {
    (lastImageData.length == 5) && (lastImageData.shift())
    lastImageData.push(data);
  }

  /**
   *  create base class for color and width, style,
   *  you can use Basic class come to inherit
   *  drawing is draw in canvas
   *  isSelect is canvas in select
   */
  class Basic {
    constructor (width = RATIO, color = "#000") {
      this.width = width;
      this.color = color;
      this.drawing = false;
      this.isSelect = false;
    }
  }

  class Pencil extends Basic {
    constructor (width = RATIO, color = "#000") {
      super (width, color)
      this.name = 'pencil';
      this.dom = selector(`#${ this.name }`);
    }

    /**
     * canvas begin pencil
     * save() beginPath()，moveTo(), for begin
     * @param loc
     */
    begin (loc) {
      // save canvas imageData
      saveImageData(ctx.getImageData(0, 0, canvasWidth, canvasHeight));

      ctx.save();
      ctx.lineWidth = this.width;
      ctx.strokeStyle = this.color;
      ctx.beginPath();
      ctx.moveTo(loc.x, loc.y);
    }

    /**
     * draw lineTo()，stroke(), for draw();
     * stroke () ====> end for beginPath (),
     * @param loc
     */
    draw (loc) {
      ctx.lineTo(loc.x, loc.y);
      ctx.stroke();
    }

    /**
     *  lineTo (), stroke (), for end ()
     *  restore () ====> end()
     * @param loc
     */
    end (loc) {
      ctx.lineTo(loc.x, loc.y);
      ctx.stroke();
      ctx.restore();
    }

    /**
     *  canvas addEventListener some event for common register for window
     */
    bindEvent () {
      canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        if (!this.isSelect) return false;
        this.drawing = true;
        let loc = getTouchPosition(e);
        this.begin(loc);
      });

      canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        if (!this.isSelect) return false;

        if (this.drawing) {
          let loc = getTouchPosition(e);
          this.draw(loc);
        }
      });

      canvas.addEventListener('touchend', (e) => {
        e.preventDefault();
        if (!this.isSelect) return false;
        if (this.drawing) {
          let loc = getTouchPosition(e);
          this.end(loc);
          this.drawing = false;
        }

      })
    }

  }




})(window, Vue);



