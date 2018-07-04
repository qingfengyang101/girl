<template>
    <div class="common-shade"
         :style="{opacity: opacityShade, zIndex: zIndexShade}"
         v-if="showShade"
    >
    </div>
</template>

<script>
    export default {
      name: "commonShade",
      props: {
        opacityShade: {
          type: Number,
          default: 0
        },
        zIndexShade: {
          type: Number,
          default: 0
        },
        showShade: {
          type: Boolean,
          default: null
        }
      }
    }
</script>

<style scoped lang="less">
  @import '../../assets/common_variable';

  .shade-box {
    position: fixed;
    left: 0;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    background-color: @color-000000;
  }
</style>