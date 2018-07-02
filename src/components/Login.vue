<template>
    <div class="login-warp">
        <mu-appbar style="width: 100%; margin-bottom: 100px " title="我媳妇" color="primary"></mu-appbar>
      <mu-container>
        <mu-flex justify-content="between" align-items="end" wrap="wrap">
          <mu-paper :z-depth="1" class="demo-date-picker">
            <mu-date-picker landscape :date.sync="date"></mu-date-picker>
          </mu-paper>
        </mu-flex>
      </mu-container>
    </div>
</template>

<script>
    export default {
      name: "Login",
      components: {
      },
      data () {
        return {
          message: this.$sassMap.$widthPull
        }
      },
      methods: {
        getName: function (data) {
          return this.$commonFunc.isWife(data);
        },
        getUserName: function () {
          console.log(this.$store, 'this.$store');
        }
      },
      computed: {
        userNameCommon: function () {
          console.log(this.$store, 'getters');
        }
      },
      watch: {

      }
    }
</script>

<style scoped lang="scss">

  .login-warp {
    width: 100%;
    height: 100%;

    img {
      width: 100px;
      height: 100px;
    }

  }
</style>
