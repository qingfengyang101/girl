<template>
  <div class="common-dialog">
    <!-- transition dialog warp -->
    <transition
      :name="$constant.TRANSITION_FADE"
    >
      <!-- dialog -->
      <div class="transition-box" v-if="showShade">
        <div
          class="dialog-warp"
          v-if="showDialog"
        >
          <div class="title-warp">
            <mu-appbar
              color="primary"
              style="width: 100%;"
            >
              <mu-button icon slot="left">
                <mu-icon value="menu"></mu-icon>
              </mu-button>
              {{ $LanguageMap.DIALOG_TITLE_TIP_MESSAGE}}
            </mu-appbar>
          </div>
          <div class="login-dialog-content-style">
            <h4 class="title-content-style"> {{ title }} </h4>
            <div class="dialog-content-text"> {{ dialogContentText }} </div>
            <!-- 卡槽 -->
            <slot></slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

    export default {
      name: "commonDialog",
      components: {},
      props: {
        title: {
          type: String,
          default: ''
        },
        dialogContentText: {
          type: String,
          default: ''
        },
        dialogContentClass: {
          type: String,
          default: ''
        },
        showShade: {
          type: Boolean,
          default: null
        },
        showDialog: {
          type: Boolean,
          default: null
        }

      },
      data () {
        return {
        }
      },
      methods: {
        handleBtnClick: function () {
          this.$emit('handleBtnClick');
        }
      },
      computed: {},
      watch: {}
    }
</script>

<style scoped lang="less">
  @import '../../assets/common_variable';

  .common-dialog {
    width: 100%;

    .transition-box {
      position: fixed;
      left: 0;
      top: 0;

      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: @color-000000;
      opacity: 0.9;
      z-index: 10;

      .dialog-warp {
        display: block;
        border-radius: 7px;

        .login-dialog-content-style {
          width: 500px;
          height: 270px;
          background-color: @color-ffffff;
          color: @color-000000;
          font-size: 16px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;

          box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);

          .title-content-style {
            padding-left: 20px;
            padding-right: 10px;
            white-space: normal;
          }

          .dialog-content-text {
            padding-left: 20px;
            padding-right: 10px;
            white-space: normal;
          }
        }

      }

    }

    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
  }

</style>
