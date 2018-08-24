/**
 *  Again write Lib Function Js Capture
 *  to record screen and web screen.
 *  canvas to write image
 *  author: xyh
 *  Date: 2018/8/24 10:28
 */

  import Vue from 'vue';
  import Whammy from './whammy';

console.log(Whammy, 'whammy');
const vuePrototype = window.getVuePrototype();

  /**
   *  ConfigBo class save and stick of it.
   *  init some params to recode. const Params
   *  bufferElem
   *  video
   *  canvas
   */

  class ConfigBo {
    constructor (configs) {
      /**
       *  init params to constructor for new ConfigBo configs.
       *  some to init
       *
       */
      this.assertConfigs(configs);
      this.configs = configs;
      this.isRecording = configs.isRecording;
      this.screenWidth = configs.screenWidth;
      this.screenHeight = configs.screenHeight;
      this.initialized = configs.initialized;
      this.stream = configs.stream;
      this.video = configs.video;
      this.canvas = configs.canvas;
      this.bufferElems = configs.bufferElems;
      this.encoder = configs.encoder;
      this.scale = configs.scale || 1;
      this.process = configs.process || [];
      this.frameRate = configs.frameRate || 32;
      this.delay = configs.delay || 0;
      this.duration = configs.duration || Infinity;
      this.x = configs.x || 0;
      this.y = configs.y || 0;
      this.done = configs.done || function () {};
      this.fail = configs.fail || function () {}; // {Function}
    }

    assertConfigs (configs) {
      if (!vuePrototype.$lodash.isObject(configs)) {
        return null;
      }

      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;

      if (!vuePrototype.$lodash.isFunction(navigator.getUserMedia)) {
        return null;
      }
    }

    setConfig (configKey, configValue) {
      vuePrototype.$lodash.forEach(this.configs, (v, k) => {
        if (!vuePrototype.$lodash.isUndefined(v)) {
           if (configKey === key) {
             this.configs[key] = configValue;
             return this.configs[key];
           }
        }
      });
    }

    getConfig (configKey) {
      if (vuePrototype.$lodash.isObject(configKey) && this.configs.hasOwnProperty(configKey)) {
        return this.configs[configKey];
      }
    }
  }

  class RecordBiz extends ConfigBo {
    constructor (configs) {
      super(configs);
    }
    capture (config) {
      this.handleInitialized( () => {
        if (vuePrototype.$lodash.isFunction(config.done)) {
          setTimeout( () => {
            this.handleCaptureFrame(config);
            config.done(this.canvas.toDataURL())
          }, config.delay);
        }
      }, config);
    }

    handleInitialized (success, config) {
      // init flag
      if (this.initialized) {
        if (vuePrototype.$lodash.isFunction(success)) {
          success(this.stream);
        }
      } else {
        window.RecordPromise.then((stream) => {
          this.stream = stream;
          this.initialized = true;
          this.video = this.handleInitElement('video', config);
          console.log(this.video, 'this.video的值 +++ ');
          this.canvas = this.handleInitElement('canvas', config);
          this.video.src = URL.createObjectURL(this.stream);
          this.video.oncanplay = function () {
            success(this.stream);
          }
        }).catch((error) => {
          console.log(error, 'error stream');
        })
      }
    }

    handleInitElement (element, config) {
      let el = this.bufferElems[element];
      if (!el) {
        el = document.createElement(element);
        document.body.appendChild(el);
        this.bufferElems[element] = el;
      }

      el.width = this.screenWidth * config.scale;
      el.height = this.screenHeight * config.scale;
      el.style.position = 'absolute';
      el.style.top = (-this.screenHeight * config.scale) + 'px';
      el.style.left = (-this.screenWidth * config.scale) + 'px';
      if (element === 'video') {
        el.setAttribute('autoplay', true);
      }
      return el;
    }

    handleCaptureFrame (config) {
      let context = this.canvas.getContext('2d');
      this.canvas.width = config.screenWidth * config.scale;
      this.canvas.height = config.screenHeight * config.scale;
      config.process.forEach((cb) => {
        cb(context, this.canvas);
      });
      context.drawImage(this.video, -config.x * config.scale, -config.y * config.scale,
        this.screenWidth * config.scale,
        this.screenHeight * config.scale);
    }
    _record (current, timeout, config) {
      if (current >= config.duration){
        return this.stopRecording(config.done);
      }

      this.handleCaptureFrame(config);
      setTimeout(() => {
        this.encoder.add(this.canvas);
      }, 0);

      setTimeout(() => {
        this._record(current + timeout, timeout, config);
      }, timeout);
    }
    recording (config) {
      if (typeof Whammy === 'undefined') {
        throw new Error('Whammy is required as dependency for screen recording');
      }
      let that = this;
      this.handleInitialized( () => {
        that.encoder = new Whammy.Video (config.frameRate);
        that.isRecording = true;
        setTimeout(() => {
          that._record(0, (1 / config.frameRate ) * 1000, config);
        }, config.delay);
      }, config);
    }

    stopRecording (done) {
      if (this.isRecording) {
        let result = this.encoder.compile();
        console.log(result, 'result 结果');
        this.isRecording = false;
        if (vuePrototype.$lodash.isFunction(done)) {
          done(result);
        }
      }
    }
  }
  const RecordClass = {
    ConfigBo: ConfigBo,
    RecordBiz: RecordBiz
  }

  export default RecordClass;
