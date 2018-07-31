<template>
    <div class="boy">
      <mu-appbar
        color="primary"
        class="title-message-style"
      >
        <mu-button icon slot="left">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        {{ $t('LABEL_TITLE_BREAKTHROUGH_LAST_QUESTION') }}
        <mu-button flat slot="right">
          {{ $t('LABEL_LOGIN') }}
        </mu-button>
      </mu-appbar>
      <!-- 右面展示 -->
      <div class="right-show-wife">
        <mu-appbar
          color="primary"
          class="title-message-style"
        >
          <mu-button icon slot="left">
            <mu-icon size="36" value="favorite" color="#f06292"></mu-icon>
          </mu-button>
          {{ $t('LABEL_WIFE_BASE_INFO_SHOW') }}
          <mu-button flat slot="right">
            <mu-icon size="36" value="voicemail" color="#f06292"></mu-icon>
          </mu-button>
        </mu-appbar>

        <mu-expansion-panel
          :expand="panel === 'panel1'"
          @change="toggle('panel1')"
          class="common-wife-head"
        >
          <div slot="header" style="margin-left: 70px">
            <!-- 小公主简介 -->
            <mu-avatar size="100px">
              <img src="../assets/img/wife_last_head.jpg">
            </mu-avatar>
          </div>
          <!-- 具体内容 -->
          <div class="wife-info-text-content">
            <h4 class="message-board"> {{ $t('LABEL_MY_WIFE_MESSAGE_BOARD') }}</h4>
            <mu-text-field
              v-model="wifeHobby"
              full-width
              style="color: #2196f3;"
            >
              {{ $t('LABEL_WIFE_BASE_INFO') }}
            </mu-text-field>
            <mu-text-field
              v-model="wifeConstellation"
              full-width
              class="demo-divider-form"
              style="color: #2196f3;"
            >
              {{ $t('LABEL_WIFE_BASE_INFO_CONSTELLATION') }}
            </mu-text-field>
            <mu-text-field
              v-model="wifeBoolType"
              full-width
              class="demo-divider-form"
              style="color: #2196f3;"
            >
              {{ $t('LABEL_WIFE_BASE_INFO_BLOOD') }}
            </mu-text-field>
            <mu-text-field
              v-model="wifeHometown"
              full-width
              class="demo-divider-form"
              style="color: #2196f3;"
            >
              {{ $t('LABEL_WIFE_BASE_INFO_HOMETOWN') }}
            </mu-text-field>
            <mu-text-field
              v-model="wifeLove"
              full-width
              class="demo-divider-form"
              style="color: #2196f3;"
            >
              {{ $t('LABEL_WIFE_BASE_INFO_LOVE') }}
            </mu-text-field>
          </div>

        </mu-expansion-panel>
        <mu-expansion-panel
          :expand="panel === 'panel2'"
          @change="toggle('panel2')"
          class="common-wife-head"
        >
          <div slot="header" style="margin-left: 70px">
            <mu-avatar size="100px">
              <img src="../assets/img/wife_last_head_two.jpg">
            </mu-avatar>
          </div>
          <!-- 具体内容 -->
          <div class="wife-info-text-content">
            <h4 class="message-board"> {{ $t('LABEL_WIFE_BASE_INFO_SIGNATURE') }}</h4>
            <mu-text-field
              v-model="wifeLikeWords"
              full-width
              style="color: #2196f3;"
            >
              {{ $t('LABEL_WIFE_BASE_INFO_WORDS') }}
            </mu-text-field>
            <mu-text-field
              v-model="wifeAphorism"
              full-width
              class="demo-divider-form"
              style="color: #2196f3;"
            >
              {{ $t('LABEL_WIFE_BASE_INFO_APHORISM') }}
            </mu-text-field>
            <mu-text-field
              v-model="wifeLikeLove"
              full-width
              class="demo-divider-form"
              style="color: #2196f3;"
            >
              {{ $t('LABEL_WIFE_BASE_INFO_LIKE_LOVE') }}
            </mu-text-field>
            <mu-text-field
              v-model="wifeLife"
              full-width
              class="demo-divider-form"
              style="color: #2196f3;"
            >
              {{ $t('LABEL_WIFE_BASE_INFO_LIKE_LIFE') }}
            </mu-text-field>
          </div>
        </mu-expansion-panel>
        <mu-expansion-panel
          :expand="panel === 'panel3'"
          @change="toggle('panel3')"
          class="common-wife-head"
        >
          <div slot="header">
            <mu-avatar size="100px" style="margin-left: 70px">
              <img src="../assets/img/wife_last_head_three.jpg">
            </mu-avatar>
          </div>
          <!-- 留言板 -->
          <div class="wife-info-text-content">
            <h4 class="message-board"> {{ $t('LABEL_WIFE_BASE_INFO_SEND_MESSAGE_BORD') }}</h4>
            <div class="send-message-bord">
              <mu-button
                large fab
                color="primary"
                @click="openSheet"
                style="margin-left: 80px"
              >
                <mu-icon value="edit"></mu-icon>
              </mu-button>
              <span style="vertical-align: middle; margin-left: 20px">
                {{ $t('BTN_SEND_MESSAGE') }}
              </span>
              <!-- 底部显示区 -->
              <mu-bottom-sheet :open.sync="openBottomSheetFlag">
                <mu-list @item-click="closeSheet">
                  <mu-sub-header>
                    {{ $t('HOLDER_WIFE_HOBBY_BASE_SEND_MESSAGE') }}
                  </mu-sub-header>
                  <mu-list-item button>
                    <mu-list-item-action>
                      <mu-icon value="chat" color="primary"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>
                    </mu-list-item-title>

                  </mu-list-item>
                </mu-list>
                <textarea
                  style="width: 100%; height: 200px; margin-left: 10px; padding: 20px 20px;
                     border-color: #2196f3; outline: none; color: #2196f3;"
                  :placeholder="getLang('HOLDER_WIFE_HOBBY_BASE_SEND_MESSAGE_TITLE')"
                  v-model="wifeBoardMessage"
                  :cols="$constant.WIFE_BOARD_MESSAGE_COLS"
                  :rows="$constant.WIFE_BOARD_MESSAGE_ROWS"
                  @keyup="wifeBoardMessageUp"
                >
                  </textarea>
              </mu-bottom-sheet>
            </div>
          </div>

        </mu-expansion-panel>
      </div>
      <!-- 照片区 -->
      <div class="wife-boy-photo">
        <mu-carousel interval="4000" transition="fade">
          <mu-carousel-item>
            <img :src="wifeAndBoyOne">
          </mu-carousel-item>
          <mu-carousel-item>
            <img :src="wifeAndBoyTwo">
          </mu-carousel-item>
          <mu-carousel-item>
            <img :src="wifeAndBoyFour">
          </mu-carousel-item>
          <mu-carousel-item>
            <img :src="wifeAndBoyFive">
          </mu-carousel-item>
        </mu-carousel>
      </div>

      <div class="wife-last-question-warp">
        <!-- 提问区 -->
        <h3 style="text-align: center; margin-top: 50px; color: #2196f3;">{{ $t('LABEL_WIFE_BASE_INFO_LAST_QUESTION') }}</h3>
        <mu-date-input
          v-model="wifeBoyLiveDate"
          :label="getLang('LABEL_MY_WIFE_LIVE_DATE')"
          icon="today"
          :errorText="wifeBoyLiveDateErrorText"
          @input="handleWifeBoyLiveDate"
          :format="getLang('FORMAT_TIME')"
          label-float
          style="width: 560px; display: block; margin-left: 255px;"
        >
        </mu-date-input>
        <!-- 提交按钮 -->
        <mu-button
          color="primary"
          @click="handleSubmitLastAnswer"
          class="btn-submit-style"
          :disabled="LastQuestionDisabled"
        >
          {{ $t('BTN_SUBMIT_ANSWER') }}
        </mu-button>
      </div>
      <!-- 成功闯关弹框提示 -->
      <common-dialog
        :title="getLang('DIALOG_TITLE_SUCCESS_TIP_LAST_BOY')"
        :dialogContentText="getLang('DIALOG_OVERLAY_OVERLAY_CLOSE_MESSAGE_LAST')"
        :showShade="isShowShade"
        :showDialog="isShowDialog"
        @handleBtnClick="handleBtnClick"
      >
        <mu-button
          color="primary"
          @click="handleBtnClick"
          class="button-start"
        >
          {{ $t('BTN_GO') }}
        </mu-button>
      </common-dialog>
    </div>
</template>

<script>
    // 引入图片
    import wifeAndBoyOne from '../assets/img/wife_boy_four.jpg';
    import wifeAndBoyTwo from '../assets/img/wife_boy_two.jpg';
    import wifeAndBoyFour from '../assets/img/wife_last_head.jpg';
    import wifeAndBoyFive from '../assets/img/wife_last_head_two.jpg';

    export default {
      name: "Boy",
      data () {
        return {
          panel: '',
          openBottomSheetFlag: false,
          wifeBoardMessage: '',
          wifeAndBoyOne,
          wifeAndBoyTwo,
          wifeAndBoyFour,
          wifeAndBoyFive,
          wifeBoyLiveDate: null,
          wifeBoyLiveDateErrorText: '',
          isShowShade: true,
          isShowDialog: true,
          wifeHobby: this.$t('HOLDER_WIFE_HOBBY_BASE'),
          wifeConstellation: this.$t('LABEL_WIFE_CONSTELLATION'),
          wifeBoolType: this.$t('LABEL_WIFE_BASE_INFO_BLOOD_TYPE'),
          wifeHometown: this.$t('LABEL_WIFE_BASE_INFO_WIFE_HOMETOWN'),
          wifeLove: this.$t('LABEL_WIFE_BASE_INFO_WIFE_LOVE'),
          wifeLikeWords: this.$t('LABEL_WIFE_BASE_INFO_LIKE_WORDS'),
          wifeAphorism: this.$t('LABEL_WIFE_BASE_INFO_WIFE_APHORISM'),
          wifeLikeLove: this.$t('LABEL_WIFE_BASE_INFO_WIFE_LIKE_LOVE'),
          wifeLife: this.$t('LABEL_WIFE_BASE_INFO_WIFE_LIFE'),
        }
      },
      methods: {
        handleBtnClick: function () {
          this.isShowDialog = false;
          this.isShowShade = false;
        },
        openSheet: function () {
          this.openBottomSheetFlag = true;
          this.wifeBoardMessage = window.localStorage.getItem('borderMessage');
        },
        wifeBoardMessageUp: function () {
          window.localStorage.setItem(
            'borderMessage', this.wifeBoardMessage
          );
        },
        closeSheet: function () {
        },
        handleWifeBoyLiveDate: function () {
          this.handleFormatDate(this.wifeBoyLiveDate)
            ? this.wifeBoyLiveDateErrorText = ''
            : this.wifeBoyLiveDateErrorText = this.$t('WIFE_BOY_LOVE_DATE_ERROR_TEXT');
        },
        handleFormatDate: function (date) {
          let wifeBirthdayDateGet = parseInt(date.getDate());
          let wifeBirthdayMonthGet = parseInt(date.getMonth() + 1);

          return (wifeBirthdayDateGet === this.$constant.WIFE_BOY_LOVE_DATE &&
            wifeBirthdayMonthGet === this.$constant.WIFE_BOY_LOVE_MONTH)
        },
        handleSubmitLastAnswer: function () {
          this.$router.push({
            path: '/wife'
          })
        },
        toggle: function (bool) {
        }
      },
      computed: {
        LastQuestionDisabled: function () {
          return !(this.wifeBoyLiveDate && !this.wifeBoyLiveDateErrorText)
        }
      },
      watch: {
      }
    }
</script>

<style scoped lang="less">
  @import "../assets/common_variable";

  .boy {
    width: 100%;
    height: 1014px;
    position: relative;

    .title-message-style {
      text-align: center;
    }

    .right-show-wife {
      width: 350px;
      height: 700px;
      background-color: @color-ffffff;
      box-shadow: 0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12);

      position: absolute;
      top: 100px;
      left: 20px;

      .message-board {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 7px;
        color: @color-ffffff;
        background-color: @color-2196f3;
      }
    }

    .wife-boy-photo {
      width: 1100px;
      height: 500px;
      margin-left: 450px;
      margin-top: 40px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .wife-last-question-warp {
      margin-left: 450px;
      padding-left: 40px;

      .btn-submit-style {
        float: right;
        margin-right: 270px;
        margin-top: 40px;
      }
    }

    .button-start {
      float: right;
      margin-right: 20px;
      margin-top: 40px;
    }
  }

</style>
