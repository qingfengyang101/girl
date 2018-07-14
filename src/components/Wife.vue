<template>
  <div class="wife">
    <common-player
      autoplay
      :music = "{
        title: 'Preparation',
        artist: 'Hans Zimmer/Richard Harvey',
        src: '../assets/audio/wife_brithday.mp3',
      }"
    >
    </common-player>
    <!-- 成功闯关弹框提示 -->
    <common-dialog
      :title="$LanguageMap.DIALOG_TITLE_SUCCESS_TIP_LAST_BOY"
      :dialogContentText="$LanguageMap.DIALOG_OVERLAY_OVERLAY_CLOSE_MESSAGE_LAST_BOY"
      :showShade="isShowShade"
      :showDialog="isShowDialog"
      @handleBtnClick="handleBtnClick"
    >
      <mu-button
        color="primary"
        @click="handleBtnClick"
        class="button-start"
      >
        {{ $LanguageMap.BTN_GO_LAST }}
      </mu-button>
    </common-dialog>
  </div>
</template>

<script>
    import WifeAudio from '../assets/audio/wife_brithday.mp3';
    import commonPlayer from 'vue-aplayer';

    export default {
      name: "Wife",
      components: {
        commonPlayer
      },
      data () {
        return {
          isShowShade: true,
          isShowDialog: true,
          WifeAudio
        }
      },
      methods: {
        handleBtnClick: function () {
          this.isShowShade = false;
          this.isShowDialog = false;
        }
      }

    }
</script>

<style scoped lang="less">
  .wife {
    width: 100%;
    height: 100%;

    .button-start {
      float: right;
      margin-right: 20px;
      margin-top: 40px;
    }

  }
</style>
