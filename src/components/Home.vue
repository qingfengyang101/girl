<template>
  <div class="home-warp">
    <!-- 头部提示： -->
    <mu-appbar style="width: 100%; text-align: center" color="primary">
      <mu-button icon slot="left">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
        {{ $t('LABEL_TITLE_BREAKTHROUGH_SECOND') }}
      <mu-button flat slot="right">
        {{ $t('LABEL_LOGIN') }}
      </mu-button>
    </mu-appbar>
    <!-- 主体部分 -->
      <div class="home-image-warp" style="margin-top: 40px;">
        <mu-flex justify-content="center">
          <mu-paper :z-depth="1">
            <mu-appbar color="primary">
              <mu-button icon slot="left">
                <mu-icon value="menu"></mu-icon>
              </mu-button>
              {{ $t('TITLE_HOME_PHOTO') }}
            </mu-appbar>
            <!-- 父母 -->
            <mu-grid-list class="home-image-list">
              <mu-grid-tile
                v-for="(title, index) in imageGroup"
                :key="index"
              >
                <img :src="title.image" >
                <span slot="title">{{ title.title }}</span>
                <span slot="subTitle">by <b>{{title.author}}</b></span>
                <mu-button slot="action" icon>
                  <mu-icon value="star_border"></mu-icon>
                </mu-button>
              </mu-grid-tile>
              <!-- 提问 -->
              <h4 style="margin-left: 40px;">{{ $t('QUESTION_WIFE_FATHER_WHO') }}</h4>
              <!-- 选择答案 -->
              <mu-radio
                :value="wifeFather"
                :label="getLang('LABEL_MY_WIFE_FATHER_NAME')"
                v-model="wifeFather"
                @change="changeWifeFather"
                class="common-radio"
                uncheck-icon="favorite_border"
                checked-icon="favorite"

              >
              </mu-radio>
              <mu-radio
                :value="wifeUncle"
                :label="getLang('LABEL_MY_WIFE_UNCLE_NAME')"
                v-model="wifeUncle"
                @change="changeWifeUncle"
                class="common-radio"
                uncheck-icon="favorite_border"
                checked-icon="favorite"

              >
              </mu-radio>
              <mu-radio
                :value="wifeNeighbor"
                :label="getLang('LABEL_MY_WIFE_NEIGHBOR_NAME')"
                v-model="wifeNeighbor"
                @change="changeWifeNeighbor"
                class="common-radio"
                uncheck-icon="favorite_border"
                checked-icon="favorite"
              >
              </mu-radio>
            </mu-grid-list>
          </mu-paper>
          <!-- 二姐 -->
          <mu-paper :z-depth="1" style="margin-left: 40px;">
            <mu-appbar color="primary">
              <mu-button icon slot="left">
                <mu-icon value="menu"></mu-icon>
              </mu-button>
              {{ $t('TITLE_HOME_PHOTO') }}
            </mu-appbar>
            <mu-grid-list class="home-image-list">
            <mu-grid-tile
              v-for="(title, index) in imageSisterGroup"
              :key="index"
            >
              <img :src="title.image" >
              <span slot="title">{{ title.title }}</span>
              <span slot="subTitle">by <b>{{title.author}}</b></span>
              <mu-button slot="action" icon>
                <mu-icon value="star_border"></mu-icon>
              </mu-button>
            </mu-grid-tile>
            <!-- 提问 -->
            <h4 style="margin-left: 40px;">{{ $t('QUESTION_WIFE_SISTER_WHO') }}</h4>
            <!-- 选择答案 -->
            <mu-radio
              :value="wifeSisterClass"
              :label="getLang('LABEL_MY_WIFE_SISTER_NAME_CLASS')"
              v-model="wifeSisterClass"
              @change="changeWifeSisterClass"
              class="common-radio"
              uncheck-icon="favorite_border"
              checked-icon="favorite"

            >
            </mu-radio>
            <mu-radio
              :value="wifeSister"
              :label="getLang('LABEL_MY_WIFE_SISTER_NAME')"
              v-model="wifeSister"
              @change="changeWifeSister"
              class="common-radio"
              uncheck-icon="favorite_border"
              checked-icon="favorite"

            >
            </mu-radio>
            <mu-radio
              :value="wifeGirlFriends"
              :label="getLang('LABEL_MY_WIFE_GIRL_FRIENDS_NAME')"
              v-model="wifeGirlFriends"
              @change="changeWifeGirlFriends"
              class="common-radio"
              uncheck-icon="favorite_border"
              checked-icon="favorite"
            >
            </mu-radio>
          </mu-grid-list>
          </mu-paper>
          <!-- 弟弟 -->
          <mu-paper :z-depth="1" style="margin-left: 40px;">
            <mu-appbar color="primary">
              <mu-button icon slot="left">
                <mu-icon value="menu"></mu-icon>
              </mu-button>
              {{ $t('TITLE_HOME_PHOTO') }}
            </mu-appbar>
            <mu-grid-list class="home-image-list">
              <mu-grid-tile
                v-for="(title, index) in imageBrotherGroup"
                :key="index"
              >
                <img :src="title.image" >
                <span slot="title">{{ title.title }}</span>
                <span slot="subTitle">by <b>{{title.author}}</b></span>
                <mu-button slot="action" icon>
                  <mu-icon value="star_border"></mu-icon>
                </mu-button>
              </mu-grid-tile>
              <!-- 提问 -->
              <h4 style="margin-left: 40px;">{{ $t('QUESTION_WIFE_BROTHER_WHO') }}</h4>
              <!-- 选择答案 -->
              <mu-radio
                :value="wifeBrotherClass"
                :label="getLang('LABEL_MY_WIFE_BROTHER_NAME_CLASS')"
                v-model="wifeBrotherClass"
                @change="changeWifeBrotherClass"
                class="common-radio"
                uncheck-icon="favorite_border"
                checked-icon="favorite"

              >
              </mu-radio>
              <mu-radio
                :value="wifeBrotherFriends"
                :label="getLang('LABEL_MY_WIFE_BROTHER_BIG_NAME')"
                v-model="wifeBrotherFriends"
                @change="changeWifeBrotherFriends"
                class="common-radio"
                uncheck-icon="favorite_border"
                checked-icon="favorite"

              >
              </mu-radio>
              <mu-radio
                :value="wifeBrother"
                :label="getLang('LABEL_MY_WIFE_BROTHER_NAME')"
                v-model="wifeBrother"
                @change="changeWifeBrother"
                class="common-radio"
                uncheck-icon="favorite_border"
                checked-icon="favorite"
              >
              </mu-radio>
            </mu-grid-list>
          </mu-paper>
        </mu-flex>
        <!-- 错误提示信息： -->
        <h2
          v-if="errorMessagePhoto"
          class="photo-message-error"
        >
          <mu-button color="red" icon style="margin-right: 20px">
            <mu-icon value="thumb_down"></mu-icon>
          </mu-button>

          {{ $t('WIFE_BIRTHDAY_PHOTO_ERROR_TEXT') }}
        </h2>
        <!-- 提交按钮 -->
        <mu-button
          color="primary"
          @click="handleBtnClickCommit"
          class="button-start-commit"
          :disabled="commitDisabled"
        >
          {{ $t('BTN_SUBMIT_ANSWER') }}
        </mu-button>

        <!-- 抽屉 -->
        <mu-drawer :open.sync="finalQuestion"
                   :docked="docked"
                   :right="position === 'right'"
                   width="400"
        >
          <mu-card style="width: 100%; max-width: 375px; margin: 0 auto; height: 780px;">
            <mu-card-header
              title="Myron Avatar"
              sub-title="sub title"
            >
              <mu-avatar slot="avatar">
                <img src="../assets/img/wife-head.png">
              </mu-avatar>
            </mu-card-header>
            <mu-card-media
              :title="getLang('TITLE_HOME_PHOTO_SUCCESS')"
              :sub-title="getLang('TITLE_HOME_PHOTO_GOOD')">
              <img src="../assets/img/wife_fine.jpg">
            </mu-card-media>
            <mu-card-title
              :title="getLang('TITLE_HOME_PHOTO_TO_YOU')"
              :sub-title="getLang('TITLE_HOME_PHOTO_TO_YOU_GOOD')"
            >
            </mu-card-title>
            <mu-card-text>
              {{ $t('LABEL_TITLE_BREAKTHROUGH_WORDS_TO_YOU') }}
            </mu-card-text>
            <mu-card-actions>
              <h2 style="display: flex; justify-content: flex-start;align-items: center;">
                <mu-button color="blue" icon>
                  <mu-icon value="thumb_up"></mu-icon>
                </mu-button>
                {{ $t('LABEL_WIFE_LAST_QUESTION') }}
              </h2>

              <mu-button
                color="primary"
                @click="handleBtnClickLastCommit"
                style="float: right; margin-right: 20px; margin-top: 40px;"
              >
                {{ $t('BTN_LAST_QUESTION') }}
              </mu-button>
            </mu-card-actions>
          </mu-card>
        </mu-drawer>
      </div>
    <!-- 页面加载时， 弹框提示 -->
    <common-dialog
      :title="getLang('DIALOG_TITLE_TIP_SECOND')"
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
    </common-dialog>
  </div>
</template>

<script>

// 引入照片
import father from '../assets/img/wife_father.jpg';
import mather from  '../assets/img/wife_morther.jpg';
import sister from '../assets/img/wife_sister.jpg';
import sisterBoy from '../assets/img/wife_sister_boy.jpg';
import brother from '../assets/img/wife_borther.jpg';
import brotherTwo from '../assets/img/wife_border_2.jpg';

export default {
  name: 'Home',
  data () {
    return {
      secondAlert: true,
      isShowShade: true,
      isShowDialog: true,
      imageGroup: [
        {
          image: father,
          title: this.$t('TITLE_HOME_PHOTO_PLACE'),
          author: this.$constant.WIFE_NAME_TODAY
        },

        {
          image: mather,
          title: this.$t('TITLE_HOME_PHOTO_PLACE'),
          author: this.$constant.WIFE_NAME_TODAY
        }
      ],
      imageSisterGroup: [
        {
          image: sisterBoy,
          title: this.$t('TITLE_HOME_PHOTO_PLACE'),
          author: this.$constant.WIFE_NAME_TODAY
        },
        {
          image: sister,
          title: this.$t('TITLE_HOME_PHOTO_PLACE'),
          author: this.$constant.WIFE_NAME_TODAY
        }
      ],
      imageBrotherGroup: [
        {
          image: brother,
          title: this.$t('TITLE_HOME_PHOTO_PLACE'),
          author: this.$constant.WIFE_NAME_TODAY
        },
        {
          image: brotherTwo,
          title: this.$t('TITLE_HOME_PHOTO_PLACE'),
          author: this.$constant.WIFE_NAME_TODAY
        }
      ],
      wifeFather: null,
      wifeUncle: null,
      wifeNeighbor: null,
      wifeSisterClass: null,
      wifeSister: null,
      wifeGirlFriends: null,
      wifeBrotherClass: null,
      wifeBrotherFriends: null,
      wifeBrother: null,
      finalQuestion: null,
      docked: false,
      position: 'right'
    }
  },
  methods: {
    closeAlertDialog: function () {

    },
    handleBtnClick: function () {
      this.isShowDialog = false;
      this.isShowShade = false;
    },
    changeWifeFather: function () {
      this.wifeFather = true;
      this.wifeUncle = null;
      this.wifeNeighbor = null;
    },
    changeWifeUncle: function () {
      this.wifeFather = null;
      this.wifeUncle = true;
      this.wifeNeighbor = null;
    },
    changeWifeNeighbor: function () {
      this.wifeFather = null;
      this.wifeUncle = null;
      this.wifeNeighbor = true;
    },
    changeWifeSisterClass: function () {
      this.wifeSister = null;
      this.wifeSisterClass = true;
      this.wifeGirlFriends = null;
    },
    changeWifeSister: function () {
      this.wifeSister = true;
      this.wifeSisterClass = null;
      this.wifeGirlFriends = null;
    },
    changeWifeGirlFriends: function () {
      this.wifeSister = null;
      this.wifeSisterClass = null;
      this.wifeGirlFriends = true;
    },
    changeWifeBrotherClass: function () {
      this.wifeBrother = null;
      this.wifeBrotherClass = true;
      this.wifeBrotherFriends = null;
    },
    changeWifeBrotherFriends: function () {
      this.wifeBrother = null;
      this.wifeBrotherClass = null;
      this.wifeBrotherFriends = true;
    },
    changeWifeBrother: function () {
      this.wifeBrother = true;
      this.wifeBrotherClass = null;
      this.wifeBrotherFriends = null;
    },
    handleBtnClickCommit: function () {
      this.finalQuestion = true;
    },
    handleBtnClickLastCommit: function () {
      this.$router.push({
        path: '/boy'
      });
    }
  },
  computed: {
    commitDisabled: function () {
      return !(this.wifeFather && this.wifeSister && this.wifeBrother)
    },
    errorMessagePhoto: function () {
      return this.wifeUncle || this.wifeNeighbor || this.wifeSisterClass
              || this.wifeGirlFriends || this.wifeBrotherClass || this.wifeBrotherFriends;
    }
  },
  watch: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../assets/common_variable";
  .home-warp {
    width: 100%;
    height: 100%;

    .home-image-warp {
      .home-image-list {
        width: 400px;
        height: 400px;
        overflow-y: auto;
        padding-top: 30px;

        img {
          display: block;
        }
      }

      .common-radio {
        margin-left: 40px;
      }
    }

    .button-start {
      float: right;
      margin-right: 20px;
      margin-top: 40px;
    }

    .photo-message-error {
      color: @color-f44336;
      width: 100%;
      margin-top: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .button-start-commit {
      float: right;
      margin-right:170px;
      margin-top: 40px;
    }
  }

</style>
