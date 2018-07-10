<template>
    <div class="login-warp">
      <!-- 头部提示 -->
      <mu-appbar
        color="primary"
        class="title-message-style"
      >
        <mu-button icon slot="left">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
          {{ $LanguageMap.LABEL_TITLE_BREAKTHROUGH }}
        <mu-button flat slot="right">
          {{ $LanguageMap.LABEL_LOGIN }}
        </mu-button>
      </mu-appbar>
      <!-- 答题部分 -->
      <div class="img-box">
        <!-- 登录信息验证 -->
        <div class="login-wife-warp">
          <mu-text-field
            v-model="wifeName"
            :placeholder="$LanguageMap.HOLDER_WIFE_NAME"
            icon="comment"
            :errorText="wifeNameErrorText"
            @blur="handleWifeNameBlur"
            fullWidth
          >
          </mu-text-field>
          <mu-text-field
            v-model="wifeTelephone"
            :placeholder="$LanguageMap.HOLDER_WIFE_TELEPHONE"
            icon="phone"
            type="number"
            :errorText="wifeTelephoneErrorText"
            @blur="handleWifeTelephoneBlur"
            fullWidth
          >
          </mu-text-field>

            <mu-text-field
              v-model="wifeEatFood"
              :placeholder="$LanguageMap.LABEL_WIFE_LIKE_FOOD"
              icon="room"
              :errorText="wifeEatFoodErrorText"
              @blur="handleWifeEatFoodBlur"
              fullWidth
            >
            </mu-text-field>
            <mu-text-field
              v-model="wifeBoy"
              :placeholder="$LanguageMap.LABEL_WIFE_BOY"
              :errorText="wifeBoyErrorText"
              @blur="handleWifeBoyBlur"
              icon="favorite"
              fullWidth
            >
            </mu-text-field>
          <!-- 生日日期 -->
          <mu-date-input
            v-model="wifeBirthdayDate"
            :label="$LanguageMap.LABEL_MY_WIFE_BIRTHDAY_DATE"
            icon="today"
            :errorText="wifeBirthdayDateErrorText"
            @input="handleWifeBirthdayDate"
            :format="$LanguageMap.FORMAT_TIME"
            label-float
            fullWidth
          >
          </mu-date-input>

          <!-- 提交按钮 -->
          <mu-button
            color="primary"
            @click="handleSubmitAnswer"
            class="btn-submit-style"
            :disabled="loginDisabled"
          >
            {{ $LanguageMap.BTN_SUBMIT_ANSWER }}
          </mu-button>
        </div>
      </div>

      <!-- 右面展示 -->
      <div class="right-show-wife">
        <mu-expansion-panel
          :expand="panel === 'panel1'"
          @change="toggle('panel1')"
          class="common-wife-head"
        >
          <div slot="header" style="margin-left: 70px">
            <!-- 小公主简介 -->
            <mu-avatar size="100px">
              <img src="../assets/img/wife-head.png">
            </mu-avatar>
          </div>
          <!-- 具体内容 -->
          <div class="wife-info-text-content">
            <h4 class="message-board"> {{ $LanguageMap.LABEL_MY_WIFE_MESSAGE_BOARD }}</h4>
            <mu-text-field
              :placeholder="$LanguageMap.HOLDER_WIFE_HOBBY_BASE"
              solo
              full-width
            >
              {{ $LanguageMap.LABEL_WIFE_BASE_INFO }}
            </mu-text-field>
            <mu-divider></mu-divider>
            <mu-text-field placeholder="Input Two" solo full-width class="demo-divider-form"></mu-text-field>
            <mu-divider></mu-divider>
            <mu-text-field placeholder="Input Three" solo full-width class="demo-divider-form"></mu-text-field>
            <mu-divider></mu-divider>
            <mu-text-field placeholder="Input Four" solo full-width class="demo-divider-form"></mu-text-field>
            <mu-divider></mu-divider>
            <mu-text-field placeholder="Input Five" solo full-width class="demo-divider-form"></mu-text-field>
          </div>

        </mu-expansion-panel>
        <mu-expansion-panel
          :expand="panel === 'panel2'"
          @change="toggle('panel2')"
          class="common-wife-head"
        >
          <div slot="header">Panel 2</div>
        </mu-expansion-panel>
        <mu-expansion-panel
          :expand="panel === 'panel3'"
          @change="toggle('panel3')"
          class="common-wife-head"
        >
          <div slot="header">Panel 3</div>
        </mu-expansion-panel>
      </div>

      <!-- 弹框提示 -->
      <common-dialog
          :title="$LanguageMap.DIALOG_TITLE_TIP_GO"
          dialogContentClass="login-dialog-content-style"
          :dialogContentText="$LanguageMap.DIALOG_OVERLAY_CLOSE_MESSAGE"
          :showShade="isShowShade"
          :showDialog="isShowDialog"
          @handleBtnClick="handleBtnClick"
        >
          <mu-button
            color="primary"
            @click="handleBtnClick"
            class="button-start"
          >
            {{ $LanguageMap.BTN_GO }}
          </mu-button>
        </common-dialog>
      <!-- 成功闯关弹框提示 -->
      <mu-dialog
        :title="$LanguageMap.DIALOG_TITLE_SUCCESS_TIP"
        :esc-press-close="false"
        :overlayClose="openSuccess"
        :open.sync="openSuccess"
        :overlay="openSuccess"
        transition="slide-top"
        :overlayOpacity="$constant.OVERLAY_OPACITY"
      >
        {{ $LanguageMap.DIALOG_OVERLAY_CLOSE_MESSAGE }}

        <mu-button slot="actions" flat color="primary" @click="closeSuccessDialog">
          {{ $LanguageMap.BTN_GO }}
        </mu-button>
      </mu-dialog>
    </div>
</template>

<script>
    export default {
      name: "Login",
      components: {
      },
      data () {
        return {
          wifeName: '',
          wifeTelephone: null,
          wifeBirthdayDate: null,
          wifeEatFood: '',
          wifeBoy: '',
          wifeNameErrorText: '',
          wifeTelephoneErrorText: '',
          wifeEatFoodErrorText: '',
          wifeBoyErrorText: '',
          wifeBirthdayDateErrorText: '',
          errorShowText: '',
          openSuccess: false,
          isShowShade: true,
          isShowDialog: true,
          panel: '',
        }
      },
      methods: {
        handleBtnClick: function () {
          this.isShowShade = false;
          this.isShowDialog = false;
        },
        handleWifeNameBlur: function () {
          this.wifeName === this.$constant.WIFE_NAME
                              ? this.wifeNameErrorText = ''
                              : this.wifeNameErrorText = this.$LanguageMap.WIFE_NAME_ERROR_TEXT
        },
        handleWifeTelephoneBlur: function () {
          (parseInt(this.wifeTelephone) === this.$constant.WIFE_TELEPHONE
                              || parseInt(this.wifeTelephone) === this.$constant.WIFE_TELEPHONE_NEW)
                                  ? this.wifeTelephoneErrorText = ''
                                  : this.wifeTelephoneErrorText = this.$LanguageMap.WIFE_TELEPHONE_ERROR_TEXT
        },
        handleWifeEatFoodBlur: function () {
          this.wifeEatFood === this.$constant.WIFE_LIKE_EAT_FOOD
                                  ? this.wifeEatFoodErrorText = ''
                                  : this.wifeEatFoodErrorText = this.$LanguageMap.WIFE_LIKE_EAT_FOOD_ERROR_TEXT
        },
        handleWifeBoyBlur: function () {
          this.wifeBoy === this.$constant.WIFE_BOY
                                  ? this.wifeBoyErrorText = ''
                                  : this.wifeBoyErrorText = this.$LanguageMap.WIFE_BOY_ERROR_TEXT
        },
        handleWifeBirthdayDate: function () {
          this.handleFormatDate(this.wifeBirthdayDate)
                                  ? this.wifeBirthdayDateErrorText = ''
                                  : this.wifeBirthdayDateErrorText = this.$LanguageMap.WIFE_BIRTHDAY_DATE_ERROR_TEXT
        },
        handleFormatDate: function (date) {
          let wifeBirthdayDateGet = parseInt(date.getDate());
          let wifeBirthdayMonthGet = parseInt(date.getMonth() + 1);

          return (wifeBirthdayDateGet === this.$constant.WIFE_BIRTHDAY_DATE &&
                                          wifeBirthdayMonthGet === this.$constant.WIFE_BIRTHDAY_MONTH)
        },
        handleSubmitAnswer: function () {
          this.openSuccess = true;
        },
        toggle: function (panel) {
          this.panel = panel === this.panel ? '' : panel;
        },
        closeSuccessDialog: function () {
          this.$router.push({
            path: '/home'
          });
        }
      },
      computed: {
        loginDisabled: function () {
          return !(
                    this.wifeName.length > 0 &&
                    this.wifeTelephone &&
                    this.wifeEatFood.length > 0 &&
                    this.wifeBoy.length > 0 &&
                    this.wifeBirthdayDate &&
                    this.errorShow
                  )
        },
        errorShow: function () {
          return (
                  !this.wifeNameErrorText &&
                  !this.wifeTelephoneErrorText &&
                  !this.wifeEatFoodErrorText &&
                  !this.wifeBoyErrorText &&
                  !this.wifeBirthdayDateErrorText
                )
        }
      },
      watch: {

      }
    }
</script>

<style scoped lang="less">
  @import "../assets/common_variable.less";

  .login-warp {
    width: 100%;
    height: 1014px;

    .title-message-style {
      width: 100%;
      text-align: center;
    }

    .login-dialog-title-style {
      width: 300px;
      height: 54px;
      line-height: 54px;
      text-align: left;
      font-weight: 400;
      color: @color-ffffff;
      background-color: #0eb3fc;
    }

    .login-dialog-content-style {
      width: 300px;
      color: @color-ffffff;
      font-size: 16px;
      padding-left: 12px;
      padding-right: 12px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .button-start {
      float: right;
      margin-right: 20px;
      margin-top: 20px;
    }

    .img-box {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: 100%;

      position: relative;

      .login-wife-warp {
        width: 100%;
        max-width: 660px;
        height: 660px;
        padding-left: 153px;

        .dialog-style {
          width: 600px;
          max-width: 80%;
          border-radius: 5px;
          font-size: 16px;
        }

        .btn-submit-style {
          float: right;
          margin-top: 20px;
        }
      }
    }

    .right-show-wife {
      width: 350px;
      height: 100%;
      background-color: @color-ffffff;
      box-shadow: 0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12);

      position: absolute;
      top: 80px;
      bottom: 0;

      .common-wife-head {
        width: 100%;
        padding-top: 20px;
        padding-left: 10px;

        .wife-info-text {
          display: inline-block;
          vertical-align: middle;
          margin-bottom: 60px;
          margin-left: 10px;
        }

        .wife-info-text-content {
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
      }
    }

  }


</style>
