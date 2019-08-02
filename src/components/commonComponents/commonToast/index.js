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
   *  create base class for color and width, style, this is basic class is very good move.
   *  you can use Basic class come to inherit, common basic class
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
     *  canvas addEventListener some event for common register for window.
     *  common write some canvas addEventLister in common function for
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

  /**
   * eraser
   */
  class Eraser extends Pencil {
    // eraser props width
    constructor(width) {
      super(width, '#fff')

      // eraser has some function
      this.name = 'eraser';
      this.dom = selector(`${this.name}`);
    }
  }

  // 线段类 拖动开始时先储存画布当前数据，之后每次拖动，先把画布数据铺上，再化线段
  class Line extends Basic {
    constructor (width = RATIO, color = '#000') {
      super(width, color)
      this.startPosition = {
        x: 0,
        y: 0
      }
      this.firstDot = ctx.getImageData(0, 0, canvasWidth, canvasHeight)
      this.name = 'line'
      this.dom = selector(`#${this.name}`)
    }
    begin (loc) {
      // 获取当前画布数据
      this.firstDot = ctx.getImageData(0, 0, canvasWidth, canvasHeight)
      saveImageData(this.firstDot)
      Object.assign(this.startPosition, loc)
      ctx.save()
      ctx.lineWidth = this.width
      ctx.strokeStyle = this.color
    }
    draw (loc) {
      // 铺上拖动开始时的画布数据，并绘制一条线段，之后每次触发都会县覆盖掉已绘制的线段，再绘制新线段
      ctx.putImageData(this.firstDot, 0, 0)
      ctx.beginPath()
      ctx.moveTo(this.startPosition.x, this.startPosition.y)
      ctx.lineTo(loc.x, loc.y)
      ctx.stroke()
    }
    end (loc) {
      ctx.putImageData(this.firstDot, 0, 0)
      ctx.beginPath()
      ctx.moveTo(this.startPosition.x, this.startPosition.y)
      ctx.lineTo(loc.x, loc.y)
      ctx.stroke()
      ctx.restore()
    }
    bindEvent () {
      canvas.addEventListener('touchstart', (e) => {
        e.preventDefault()
        if (!this.isSelect) {
          return false
        }
        this.drawing = true
        let loc = getTouchPosition(e)
        this.begin(loc)
      })
      canvas.addEventListener('touchmove', (e) => {
        e.preventDefault()
        if (!this.isSelect) {
          return false
        }
        if (this.drawing) {
          let loc = getTouchPosition(e)
          this.draw(loc)
        }
      })
      canvas.addEventListener('touchend', (e) => {
        e.preventDefault()
        if (!this.isSelect) {
          return false
        }
        let loc = getTouchPosition(e)
        this.end(loc)
        this.drawing = false
      })
    }
  }

  // 方形 记录初始坐标，根据鼠标坐标画正方形，和线段类似
  class Rect extends Basic {
    constructor (width = RATIO, color = '#000') {
      super(width, color)
      this.startPosition = {
        x: 0,
        y: 0
      }
      this.firstDot = ctx.getImageData(0, 0, canvasWidth, canvasHeight)
      this.name = 'rect'
      this.dom = selector(`#${this.name}`)
    }
    begin (loc) {
      this.firstDot = ctx.getImageData(0, 0, canvasWidth, canvasHeight)
      saveImageData(this.firstDot)
      Object.assign(this.startPosition, loc)
      ctx.save()
      ctx.lineWidth = this.width
      ctx.strokeStyle = this.color
    }
    draw (loc) {
      ctx.putImageData(this.firstDot, 0, 0)
      const rect = {
        x: this.startPosition.x <= loc.x ? this.startPosition.x : loc.x,
        y: this.startPosition.y <= loc.y ? this.startPosition.y : loc.y,
        width: Math.abs(this.startPosition.x - loc.x),
        height: Math.abs(this.startPosition.y - loc.y)
      }
      ctx.beginPath()
      ctx.rect(rect.x, rect.y, rect.width, rect.height)
      ctx.stroke()
    }
    end (loc) {
      ctx.putImageData(this.firstDot, 0, 0)
      const rect = {
        x: this.startPosition.x <= loc.x ? this.startPosition.x : loc.x,
        y: this.startPosition.y <= loc.y ? this.startPosition.y : loc.y,
        width: Math.abs(this.startPosition.x - loc.x),
        height: Math.abs(this.startPosition.y - loc.y)
      }
      ctx.beginPath()
      ctx.rect(rect.x, rect.y, rect.width, rect.height)
      ctx.stroke()
      ctx.restore()
    }
    bindEvent () {
      canvas.addEventListener('touchstart', (e) => {
        e.preventDefault()
        if (!this.isSelect) {
          return false
        }
        this.drawing = true
        let loc = getTouchPosition(e)
        this.begin(loc)
      })
      canvas.addEventListener('touchmove', (e) => {
        e.preventDefault()
        if (!this.isSelect) {
          return false
        }
        if (this.drawing) {
          let loc = getTouchPosition(e)
          this.draw(loc)
        }
      })
      canvas.addEventListener('touchend', (e) => {
        e.preventDefault()
        if (!this.isSelect) {
          return false
        }
        let loc = getTouchPosition(e)
        this.end(loc)
        this.drawing = false
      })
    }
  }

  // 圆形 均匀压缩法 根据起始坐标和结束坐标找一个方形，方形的长边作为圆的半径 画以长边为边的正方形的内切圆 再根据长边与窄边的比例，压缩为原方形的内切椭圆
  class Round extends Basic{
    constructor (width = RATIO, color = '#000') {
      super(width, color)
      this.startPosition = {
        x: 0,
        y: 0
      }
      this.firstDot = ctx.getImageData(0, 0, canvasWidth, canvasHeight)
      this.name = 'round'
      this.dom = selector(`#${this.name}`)
    }
    drawCalculate (loc) {
      ctx.save()
      ctx.lineWidth = this.width
      ctx.strokeStyle = this.color
      ctx.putImageData(this.firstDot, 0, 0)
      const rect = {
        width: loc.x - this.startPosition.x,
        height: loc.y - this.startPosition.y
      }
      const rMax = Math.max(Math.abs(rect.width), Math.abs(rect.height))
//    const rMin = Math.min(Math.abs(rect.width), Math.abs(rect.height))
      rect.x = this.startPosition.x + rect.width / 2
      rect.y = this.startPosition.y + rect.height / 2
      rect.scale = {
        x: Math.abs(rect.width) / rMax,
        y: Math.abs(rect.height) / rMax
      }
      ctx.scale(rect.scale.x, rect.scale.y)
      ctx.beginPath()
      ctx.arc(rect.x / rect.scale.x, rect.y / rect.scale.y, rMax / 2, 0, Math.PI * 2)
      ctx.stroke()
      ctx.restore()
    }
    begin (loc) {
      this.firstDot = ctx.getImageData(0, 0, canvasWidth, canvasHeight)
      saveImageData(this.firstDot)
      Object.assign(this.startPosition, loc)
    }
    draw (loc) {
      this.drawCalculate(loc)
    }
    end (loc) {
      this.drawCalculate(loc)
    }
    bindEvent () {
      canvas.addEventListener('touchstart', (e) => {
        e.preventDefault()
        if (!this.isSelect) {
          return false
        }
        this.drawing = true
        let loc = getTouchPosition(e)
        this.begin(loc)
      })
      canvas.addEventListener('touchmove', (e) => {
        e.preventDefault()
        if (!this.isSelect) {
          return false
        }
        if (this.drawing) {
          let loc = getTouchPosition(e)
          this.draw(loc)
        }
      })
      canvas.addEventListener('touchend', (e) => {
        e.preventDefault()
        if (!this.isSelect) {
          return false
        }
        let loc = getTouchPosition(e)
        this.end(loc)
        this.drawing = false
      })
    }
  }

  // 整合绘图工具 class Tool
  class Tool {
    // 构造器: constructor
    constructor () {
      this.pencil = new Pencil(RATIO, '#000');
      this.eraser = new Eraser(RATIO * 10);
      this.line = new Line();
      this.rect = new Rect();
      this.round = new Round();

      let allTools = [this.pencil, this.eraser, this.line, this.rect, this.round];

      // 设置监听watcher 改变工具时， 改变工具的isSelected属性, 通过Object.defineProperty
      // 这个监听, 要比传统的点击,循环， 判断， 过滤，然后， 在进行选择, 要方便的多。

      Object.defineProperty(this, 'selected', {
        set: function (value) {
          for (let item of allTools) {
            if (item.name === value) {
              item.isSelect = true;
              item.dom.style.color = '#foo';
            } else {
              item.isSelect = false;
              item.dom.style = '#000';
            }
          }
        },

        get: function () {
          for (let item of allTools) {
            if (item.isSelect) {
              return item.name;
            }
          }
        }
      })

    }
  }

})(window, Vue);



