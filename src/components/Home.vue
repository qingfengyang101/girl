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
    <mu-dialog
      :title="$LanguageMap.DIALOG_TITLE_TIP_SECOND"
      class="dialog-title-style"
      :esc-press-close="false"
      :overlayClose="secondAlert"
      :open.sync="secondAlert"
      :overlay="secondAlert"
      transition="slide-top"
      :overlayOpacity="$constant.OVERLAY_OPACITY"
    >
      {{ $LanguageMap.DIALOG_OVERLAY_CLOSE_MESSAGE }}

      <mu-button slot="actions" flat color="primary" @click="closeAlertDialog">
        {{ $LanguageMap.BTN_GO }}
      </mu-button>
    </mu-dialog>
  </div>
</template>

<script>
// 引入照片

export default {
  name: 'Home',
  data () {
    return {
      secondAlert: true,
      imageGroup: [
        {
        },
      ]
    }
  },
  methods: {
    closeAlertDialog: function () {
      this.secondAlert = false;
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
  }

</style>
