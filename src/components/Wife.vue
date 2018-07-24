<template>
  <div class="wife">
    <div v-if="isShowFireOrInfo">
      <common-info></common-info>
      <audio :src="WifeAudio" loop autoplay v-if="WifeAudio"></audio>
      <common-fire></common-fire>
    </div>
    <!-- 成功闯关弹框提示 -->
    <common-dialog
      :title="getLang('DIALOG_TITLE_SUCCESS_TIP_LAST_BOY')"
      :dialogContentText="getLang('DIALOG_OVERLAY_OVERLAY_CLOSE_MESSAGE_LAST_BOY')"
      :showShade="isShowShade"
      :showDialog="isShowDialog"
      @handleBtnClick="handleBtnClick"
    >
      <mu-button
        color="primary"
        @click="handleBtnClick"
        class="button-start"
      >
        {{ $t('BTN_GO_LAST') }}
      </mu-button>
    </common-dialog>
  </div>
</template>

<script>
    import WifeAudio from '../assets/audio/wife_brithday.mp3';
    import CommonInfo from "./commonComponents/commonInfo";

    export default {
      name: "Wife",
      components: {
        CommonInfo
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
      },
      mounted (){
      },
      watch:{
      },
      computed: {
        isShowFireOrInfo () {
          return (!this.isShowDialog && !this.isShowShade);
        }
      }

    }
</script>

<style scoped lang="less">
  @import "../assets/common_variable";
  .wife {
    width: 100%;
    height: 793px;
    background-color: @color-2196f3;

    .button-start {
      float: right;
      margin-right: 20px;
      margin-top: 40px;
    }

  }
</style>
