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
          {{ $t('LABEL_TITLE_BREAKTHROUGH') }}
        <mu-button flat slot="right">
          {{ $t('LABEL_LOGIN') }}
        </mu-button>
      </mu-appbar>
      <!-- 答题部分 -->
      <div class="img-box">
        <!-- 登录信息验证 -->
        <div class="login-wife-warp">
          <mu-text-field
            v-model="wifeName"
            :placeholder="getLang('HOLDER_WIFE_NAME')"
            icon="comment"
            :errorText="wifeNameErrorText"
            @blur="handleWifeNameBlur"
            fullWidth
          >
          </mu-text-field>
          <mu-text-field
            v-model="wifeTelephone"
            :placeholder="getLang('HOLDER_WIFE_TELEPHONE')"
            icon="phone"
            type="number"
            :errorText="wifeTelephoneErrorText"
            @blur="handleWifeTelephoneBlur"
            fullWidth
          >
          </mu-text-field>

            <mu-text-field
              v-model="wifeEatFood"
              :placeholder="getLang('LABEL_WIFE_LIKE_FOOD')"
              icon="room"
              :errorText="wifeEatFoodErrorText"
              @blur="handleWifeEatFoodBlur"
              fullWidth
            >
            </mu-text-field>
            <mu-text-field
              v-model="wifeBoy"
              :placeholder="getLang('LABEL_WIFE_BOY')"
              :errorText="wifeBoyErrorText"
              @blur="handleWifeBoyBlur"
              icon="favorite"
              fullWidth
            >
            </mu-text-field>
          <!-- 生日日期 -->
          <mu-date-input
            v-model="wifeBirthdayDate"
            :label="getLang('LABEL_MY_WIFE_BIRTHDAY_DATE')"
            icon="today"
            :errorText="wifeBirthdayDateErrorText"
            @input="handleWifeBirthdayDate"
            :format="getLang('FORMAT_TIME')"
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
            {{ $t('BTN_SUBMIT_ANSWER') }}
          </mu-button>
        </div>
      </div>

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
              <img src="../assets/img/wife-head.png">
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
              v-model="wifeBloodType"
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
              <img src="../assets/img/wife-middle.jpg">
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
              <img src="../assets/img/333.jpg">
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
      <!-- 天气预报部分 -->
      <common-weather
        :weatherData="weatherData"

      >

      </common-weather>
      <!-- 弹框提示 -->
      <common-dialog
          :title="getLang('DIALOG_TITLE_TIP_GO')"
          :dialogContentText="getLang('DIALOG_OVERLAY_CLOSE_MESSAGE')"
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
          <mu-menu
            placement="top-start"
            open-on-hover
            class="button-start"
          >
            <mu-button
              color="primary"
            >
              {{ $t('BTN_CHANGE_LANGUAGE') }}
            </mu-button>
            <mu-list slot="content">
              <mu-list-item
                @click="handleChangeLanguageChinese"
                button
              >
                <mu-list-item-title
                >
                  {{ $t('BTN_LANGUAGE_CHINESE') }}
                </mu-list-item-title>
              </mu-list-item>
              <mu-list-item
                button
                @click="handleChangeLanguageEnglish"
              >
                <mu-list-item-title
                >
                  {{ $t('BTN_LANGUAGE_ENGLISH') }}
                </mu-list-item-title>
              </mu-list-item>
            </mu-list>
          </mu-menu>
        </common-dialog>
      <!-- 成功闯关弹框提示 -->
      <mu-dialog
        :title="getLang('DIALOG_TITLE_SUCCESS_TIP')"
        :esc-press-close="false"
        :overlayClose="openSuccess"
        :open.sync="openSuccess"
        :overlay="openSuccess"
        transition="slide-top"
        :overlayOpacity="$constant.OVERLAY_OPACITY"
      >
        {{ $t('DIALOG_OVERLAY_CLOSE_MESSAGE') }}

        <mu-button slot="actions" flat color="primary" @click="closeSuccessDialog">
          {{ $t('BTN_GO') }}
        </mu-button>
      </mu-dialog>
    </div>
</template>

<script>
    import {
      GET_USER_NAME,
      GET_WIFE_LIKE,
      USER_LOGIN_SYSTEM,
      WEATHER_LUOHE_REQUERST,
      WEATHER_LUOHE_REQUERST_ERROR
    } from '../store/mutation-types';

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
          openBottomSheetFlag: null,
          wifeBoardMessage: '',
          wifeHobby: this.$t('HOLDER_WIFE_HOBBY_BASE'),
          wifeConstellation: this.$t('LABEL_WIFE_CONSTELLATION'),
          wifeBloodType: this.$t('LABEL_WIFE_BASE_INFO_BLOOD_TYPE'),
          wifeHometown: this.$t('LABEL_WIFE_BASE_INFO_WIFE_HOMETOWN'),
          wifeLove: this.$t('LABEL_WIFE_BASE_INFO_WIFE_LOVE'),
          wifeLikeWords: this.$t('LABEL_WIFE_BASE_INFO_LIKE_WORDS'),
          wifeAphorism: this.$t('LABEL_WIFE_BASE_INFO_WIFE_APHORISM'),
          wifeLikeLove: this.$t('LABEL_WIFE_BASE_INFO_WIFE_LIKE_LOVE'),
          wifeLife: this.$t('LABEL_WIFE_BASE_INFO_WIFE_LIFE'),
          weatherData: null
        }
      },
      methods: {
        handleBtnClick: function () {
          this.isShowShade = false;
          this.isShowDialog = false;
          this.$store.dispatch(USER_LOGIN_SYSTEM, {
            USER_ID: '124',
            USER_NAME: 'xuyinghao',
            USER_ROLE: '老公',
            USER_PERMISSION: ['12', '12'],
            USER_STATUS: 0,
          })
        },
        handleWifeNameBlur: function () {
          this.wifeName === this.$constant.WIFE_NAME
                              ? this.wifeNameErrorText = ''
                              : this.wifeNameErrorText = this.$t('WIFE_NAME_ERROR_TEXT')
        },
        handleWifeTelephoneBlur: function () {
          (parseInt(this.wifeTelephone) === this.$constant.WIFE_TELEPHONE
                              || parseInt(this.wifeTelephone) === this.$constant.WIFE_TELEPHONE_NEW)
                                  ? this.wifeTelephoneErrorText = ''
                                  : this.wifeTelephoneErrorText = this.$t('WIFE_TELEPHONE_ERROR_TEXT')
        },
        handleWifeEatFoodBlur: function () {
          this.wifeEatFood === this.$constant.WIFE_LIKE_EAT_FOOD
                                  ? this.wifeEatFoodErrorText = ''
                                  : this.wifeEatFoodErrorText = this.$t('WIFE_LIKE_EAT_FOOD_ERROR_TEXT')
        },
        handleWifeBoyBlur: function () {
          this.wifeBoy === this.$constant.WIFE_BOY
                                  ? this.wifeBoyErrorText = ''
                                  : this.wifeBoyErrorText = this.$t('WIFE_BOY_ERROR_TEXT')
        },
        handleWifeBirthdayDate: function () {
          this.handleFormatDate(this.wifeBirthdayDate)
                                  ? this.wifeBirthdayDateErrorText = ''
                                  : this.wifeBirthdayDateErrorText = this.$t('WIFE_BIRTHDAY_DATE_ERROR_TEXT')
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
        openSheet: function () {
          this.openBottomSheetFlag = true;
          this.wifeBoardMessage = window.localStorage.getItem('borderMessage');
        },
        closeSheet: function () {
        },
        closeSuccessDialog: function () {
          this.$router.push({
            path: '/home'
          });
        },
        wifeBoardMessageUp: function () {
          window.localStorage.setItem(
            'borderMessage', this.wifeBoardMessage
          );
        },
        handleChangeLanguageChinese: function () {
            this.$i18n.locale = 'cn';
        },
        handleChangeLanguageEnglish: function () {
          this.$i18n.locale = 'en';
        },
        handleGetUserName: function (res) {
          if (this.$lodash.isObject(res)) {
          }
        },
        handleGetWeather: function (res) {
          if (this.$lodash.isObject(res)) {
            this.weatherData = res.weatherResult.data.HeWeather6;         
          }
        },
        handleGetWeatherServerError: function (error) {
          
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
      },
      created () {
        this.$store.dispatch(WEATHER_LUOHE_REQUERST, {});
        this.eventBus.on(GET_USER_NAME, this.handleGetUserName);
        this.eventBus.on(WEATHER_LUOHE_REQUERST, this.handleGetWeather);
        this.eventBus.on(WEATHER_LUOHE_REQUERST_ERROR, this.handleGetWeatherServerError)
      },
      beforeDestroy () {
        this.eventBus.off(GET_USER_NAME, this.handleGetUserName);
        this.eventBus.off(WEATHER_LUOHE_REQUERST_ERROR, this.handleGetWeatherServerError);
      }
    }
</script>

<style scoped lang="less">
  @import "../assets/common_variable.less";

  .login-warp {
    width: 100%;
    height: 900px;

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


    .button-start {
      float: right;
      margin-right: 20px;
      margin-top: 40px;
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
      width: 400px;
      height: 700px;
      background-color: @color-ffffff;
      box-shadow: 0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12);

      position: absolute;
      top: 100px;
      left: 20px;

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
