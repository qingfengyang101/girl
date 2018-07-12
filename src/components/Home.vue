<template>
  <div class="home-warp">
    <!-- 头部提示： -->
    <mu-appbar style="width: 100%; text-align: center" color="primary">
      <mu-button icon slot="left">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
        {{ $LanguageMap.LABEL_TITLE_BREAKTHROUGH_SECOND }}
      <mu-button flat slot="right">
        {{ $LanguageMap.LABEL_LOGIN }}
      </mu-button>
    </mu-appbar>
    <!-- 主体部分 -->
      <div class="home-image-warp">
        <mu-flex justify-content="center">
          <mu-paper :z-depth="1">
            <mu-appbar color="primary">
              <mu-button icon slot="left">
                <mu-icon value="menu"></mu-icon>
              </mu-button>
              {{ $LanguageMap.TITLE_HOME_PHOTO }}
            </mu-appbar>
            <mu-grid-list class="home-image-list">
              <mu-sub-header>December</mu-sub-header>
              <mu-grid-tile
                v-for="(tile, index) in imageGroup"
                :key="index"
              >
                <img :src="tile.image" >
                <span slot="title">{{ tile.title }}</span>
                <span slot="subTitle">by <b>{{tile.author}}</b></span>
                <mu-button slot="action" icon>
                  <mu-icon value="star_border"></mu-icon>
                </mu-button>
              </mu-grid-tile>
            </mu-grid-list>
          </mu-paper>
        </mu-flex>
      </div>
    <!-- 页面加载时， 弹框提示 -->
    <common-dialog
      :title="$LanguageMap.DIALOG_TITLE_TIP_SECOND"
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
  </div>
</template>

<script>
// 引入照片

export default {
  name: 'Home',
  data () {
    return {
      secondAlert: true,
      isShowShade: true,
      isShowDialog: true,
      imageGroup: [
        {
        },
      ]
    }
  },
  methods: {
    closeAlertDialog: function () {

    },
    handleBtnClick: function () {
      this.isShowDialog = false;
      this.isShowShade = false;
    }
  },
  computed: {

  },
  watch: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .home-warp {
    width: 100%;
    height: 100%;

    .home-image-warp {
      .home-image-list {
        width: 500px;
        height: 500px;
        overflow-y: auto;
      }
    }

    .button-start {
      float: right;
      margin-right: 20px;
      margin-top: 40px;
    }
  }

</style>
