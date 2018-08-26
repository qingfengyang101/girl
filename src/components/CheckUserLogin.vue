<template>
    <div class="check-user-login">
      <!--  -->

      <div class="record-login-warp">
        <video id="recordVideo"
               autoplay
        >
        </video>
        <div style="width: 100%; margin-left: 100px;">
          <mu-button
            color="primary"
            class="button-start"
            @click="handleStart"
            :disabled="startRecordButton"
          >
            {{ $t('BTN_RECORD_START') }}
          </mu-button>
          <mu-button
            color="primary"
            class="button-start"
            @click="handleRecordStop"
            :disabled="stopRecordButton"
          >
            {{ $t('BTN_RECORD_STOP') }}
          </mu-button>
        </div>
      </div>
      <!-- 播放地址 -->
      <div class="record-play-box">
        <video id="playRecordVideo"
               autoplay
        >
        </video>
        <mu-button
          color="primary"
          @click="handlePlay"
          :disabled="playRecordButton"
        >
          {{ $t('BTN_RECORD_PLAY') }}
        </mu-button>
      </div>
    </div>
</template>
<script>
  import { MediaRecord } from "./commonComponents/mediaRecord";

  export default {
    name: "checkUserLogin",
    data () {
      return {
        startRecordFlag: true,
        playRecordFlag: true,
        stopRecordFlag: true,
        message:'',
        bufferGroup: [],
        streamPayload: null,
        streamInitFlag: false,
        commonAPI: null,
        videoMy: null,
        recordClassBo: null,
        recordClassBiz: null,
        COMMON_CONFIG: null
      }
    },
    computed: {
      startRecordButton: function () {
        return !this.startRecordFlag;
      },
      playRecordButton: function () {
        return !this.playRecordFlag;
      },
      stopRecordButton: function () {
        return !this.stopRecordFlag;
      }
    },
    mounted () {
      this.videoMy = document.getElementById('recordVideo');
      MediaRecord.init(this.videoMy, (API) => {
        this.commonAPI = API.mediaRecordBiz;
      });
    },
    methods: {
      handleStart: function () {
        this.commonAPI.mediaStartRecord();
        this.startRecordFlag = false;
      },
      handlePlay: function () {
        if (!this.stopRecordFlag) {
          this.videoMy = document.getElementById('playRecordVideo');
          this.commonAPI.mediaPlayRecord(this.videoMy);
          this.stopRecordFlag = true;
        }
      },
      handleRecordStop: function () {
        if (!this.startRecordFlag) {
          this.bufferGroup = this.commonAPI.mediaStopRecord(this.videoMy);
          this.startRecordFlag = true;
          this.stopRecordFlag = false;
        }
      }
    },
    watch: {
    }
  }
</script>

<style scoped lang="less">
.check-user-login {
  width: 100%;
  height: 100%;

  video {
    width: 500px;
    height: 500px;
    display: inline-block;

    margin-left: 50px;
  }

  .record-login-warp {
    display: inline-block;
    width: 600px;
    height: 700px;
  }

  .record-play-box {
    display: inline-block;
    width: 600px;
    height: 700px;
    margin-left: 200px;
    text-align: center;
  }


  .button-start {
    margin-left: 50px;
  }
}

</style>
