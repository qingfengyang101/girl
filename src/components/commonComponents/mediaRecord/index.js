/**
 *  This is use to record media for back show media
 *  lib common to use sdk
 *  author: xyh
 *  Date: 2018/8/15 9:48
 */

export const MediaRecord = window.MediaRecord || (function () {

  /**
   *  init some need params top, we need to design print.
   *  cell web rtc about API to template some record. we should to check some API support.
   *  MediaRecordBase Class governed about params and props
   *  checkSupportAPI: for some different webkit to support.
   *  get(): to get the needed to API.
   */
  class MediaRecordBase {
    constructor (mediaSource, mediaRecorder, mediaGetUserMedia) {

      this.checkSupportAPI({
        mediaSource: MediaSource,
        mediaRecorder: MediaRecorder,
        mediaGetUserMedia: navigator.mediaDevices.getUserMedia
      });

      this.mediaSource = mediaSource;
      this.mediaRecorder = mediaRecorder;
      this.mediaGetUserMedia = mediaGetUserMedia;
    }

    checkSupportAPI (mediaAPI) {
      for (let key in mediaAPI) {
        if (mediaAPI.hasOwnProperty(key)) {
          if (typeof mediaAPI[key] === 'function') {
            return true;
          } else {
            new Error(`${key}` + 'is not your brower not support! need to support!');
          }
        }
      }
    }

    get (mediaAPI) {
      if (typeof mediaAPI === 'function') return mediaAPI;
    }
  }

  /**
   * create class MediaRecordBo to governed some props
   *  recodedBlobs
   *  sourceBuffer
   *  recordVideo
   *  recordedButton: operator button.
   *
   */

  class MediaRecordBo extends MediaRecordBase {
    constructor (mediaSource, mediaRecorder, mediaGetUserMedia, options) {
      super (mediaSource, mediaRecorder, mediaGetUserMedia);
      this.recodedBlobs = options.recodedBlobs;
      this.sourceBuffer = options.sourceBuffer;
      this.recordVideo = options.recordVideo;
    }
  }

  /**
   *  mediaRecordBiz class governed to function and operator
   *  mediaStartRecord()
   *  mediaPlayRecord()
   *  mediaStopRecord()
   *  mediaPlayGetUrl()
   *  mediaCheckOriginSecure()
   *  init()
   */

  class MediaRecordBiz extends MediaRecordBase {
    constructor (mediaSource, mediaRecorder, mediaGetUserMedia, options) {
      super(mediaSource, mediaRecorder, mediaGetUserMedia);
      this.mimeType = options.mimeType;
      this.mediaBoClass = options.mediaBoClass;
    }

    mediaStartRecord () {

      try {
        this.mediaRecorder(window.streamData, this.mimeType);
        this.mediaRecorder.ondataavailable = this.handleDataAvailable;
        this.mediaRecorder.start(10);

      } catch (e) {}
    }

    handleDataAvailable (event) {
      if (event.data && event.data.size > 0) this.mediaBoClass.recodedBlobs.push(event.data);
    }

    mediaStopRecord () {
      this.mediaRecorder.stop();
    }

    mediaPlayRecord () {
      this.mediaBoClass.sourceBuffer = new Blob(this.mediaBoClass.recodedBlobs, {type: 'video/webm'});
      this.mediaBoClass.recordVideo.src = window.URL.createObjectURL(this.mediaBoClass.sourceBuffer);

      this.mediaBoClass.recordVideo.addEventListener('loadedmetadata', () => {
        if (this.mediaBoClass.recordVideo.duration === Infinity) {
          this.mediaBoClass.currentTime = 1e101;
          this.mediaBoClass.recordVideo.ontimeupdate = function() {
            this.mediaBoClass.recordVideo.currentTime = 0;
            this.mediaBoClass.recordVideo.ontimeupdate = function() {
              delete this.mediaBoClass.recordVideo.ontimeupdate;
              this.mediaBoClass.recordVideo.play();
            };
          };
        } else {
          this.mediaBoClass.recordVideo.play();
        }
      });
    }

    mediaPlayGetUrl () {
      return window.URL.createObjectURL(this.mediaBoClass.sourceBuffer);
    }
    handleSourceOpen (event) {
      this.mediaBoClass.sourceBuffer = this.mediaSource.addSourceBuffer('video/webm; codecs="vp8"');
    }
  }

  function _init () {
    /**
     * check the origin secure for https or localhost.
     */
    mediaCheckOriginSecure();

    window.streamData = null;
    navigator.mediaDevices.getUserMedia({audio: true, video: true}).then(function (stream) {
      window.streamData = stream;
      _initAPI();
    });
  }

  function mediaCheckOriginSecure () {
    try {
      if (location.protocol !== 'https:' || location.hostname !== 'localhost') {
        new Error(`${location.protocol || location.hostname}` + 'getUserMedia() must be run from a secure origin: HTTPS or localhost.\n\nChanging protocol to HTTPS');
      }
    } catch (e) {
      location.protocol = 'HTTPS';
    }
  }

  function _initAPI () {
    let mimeType = null;

    /**
     * check type to some video webm
     * @type {{mediaSource: MediaSource, mediaRecorder: MediaRecorder, mediaGetUserMedia: (constraints: MediaStreamConstraints) => Promise<MediaStream>, mimeTypeGroup: string[]}}
     */
    const mimeTypeGroup = [
      'video/webm;codecs=vp9',
      'video/webm;codecs=vp8',
      'video/webm'
    ];

    if (typeof MediaRecorder === 'function') {
      mimeTypeGroup.map((item) => {
        if (!MediaRecorder.isTypeSupported(item)) {
          new Error(`${item}` + 'is not supported');
        } else {
          mimeType = item;
        }
      });
    }
    const COMMON_API = {
      mediaSource: new MediaSource(),
      mediaRecorder: new MediaRecorder(window.streamData, {mimeType: mimeType}), // TODO：MediaRecorder params to steamData
      mediaGetUserMedia: navigator.mediaDevices.getUserMedia
    }
    const mediaRecordBase = new MediaRecordBase(COMMON_API.mediaSource, COMMON_API.mediaRecorder, COMMON_API.mediaGetUserMedia);
    const mediaRecordBo = new MediaRecordBo(COMMON_API.mediaSource, COMMON_API.mediaRecorder, COMMON_API.mediaGetUserMedia,{
      recodedBlobs: [],
      sourceBuffer: null,
      recordVideo: null
    });
    const mediaRecordBiz = new MediaRecordBiz(COMMON_API.mediaSource, COMMON_API.mediaRecorder, COMMON_API.mediaGetUserMedia, {
      mimeType: mimeType,
      mediaBoClass: mediaRecordBo
    });

    const RecorderAPI = {
      mediaRecordBase,
      mediaRecordBo,
      mediaRecordBiz
    }

    return RecorderAPI;
  }

  return {
    init: _init,
    RecorderAPI: _initAPI
  }

}());

