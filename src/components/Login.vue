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

      <!-- 弹框提示 -->
      <div class="pop-box">
        <mu-dialog
          :title="$LanguageMap.DIALOG_TITLE_TIP_GO"
          class="dialog-title-style"
          :esc-press-close="false"
          :overlayClose="openAlert"
          :open.sync="openAlert"
          :overlay="openAlert"
          transition="slide-top"
          :overlayOpacity="$constant.OVERLAY_OPACITY"
        >
          {{ $LanguageMap.DIALOG_OVERLAY_CLOSE_MESSAGE }}

          <mu-button slot="actions" flat color="primary" @click="closeAlertDialog">
            {{ $LanguageMap.BTN_GO }}
          </mu-button>
        </mu-dialog>
      </div>

      <!-- 成功闯关弹框提示 -->
      <mu-dialog
        :title="$LanguageMap.DIALOG_TITLE_SUCCESS_TIP"
        class="dialog-title-style"
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
          openAlert: true,
          openSuccess: false
        }
      },
      methods: {
        closeAlertDialog: function () {
          this.openAlert = false;
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

    .pop-box {

      .dialog-title-style {
        border-radius: 5px;
        color: #0eb3fc;
      }

    }

  }

  .img-box {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    position: relative;
    background-image: url("../../src/assets/img/login-ba.jpg");
    background-repeat: repeat;
    -webkit-background-size: 100% 100% ;

    .login-wife-warp {
      width: 100%;
      max-width: 660px;
      height: 660px;
      padding-left: 153px;

      .dialog-title-style {
        width: 600px;
        max-width: 80%;
      }

      .btn-submit-style {
        float: right;
        margin-top: 20px;
      }
    }
  }
</style>
