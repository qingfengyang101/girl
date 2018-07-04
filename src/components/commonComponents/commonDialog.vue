<template>
  <div class="common-dialog">
    <!-- transition dialog warp -->
    <transition
      :name="$constant.TRANSITION_FADE"
    >
      <!-- dialog -->
      <div
        class="dialog-warp"
        v-if="showDialog"
      >
        <h4 :class="classTitle"> {{  title }}</h4>
        <div :class="dialogContentClass">
          {{ dialogContentText }}
        </div>
        <mu-button
          fullWidth
          flat
          slot="actions"
          color="primary"
          @click="handleBtnClick"
        >
        </mu-button>
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
        classTitle: {
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
    position: fixed;
    left: 0;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    background-color: @color-000000;
    opacity: 0.7;
    z-index: 10;

    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }

    .dialog-warp {
      border-radius: 5px;

      width: 500px;
      height:500px;
      background-color: @color-ffffff;
    }

  }

</style>
