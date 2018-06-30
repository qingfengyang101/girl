<template>
    <div class="login-warp">
      <img src="../assets/login-banner.jpg">
      <p>{{ $sassMap.$widthPull }}</p>
      <p> {{ $LanguageMap.LABEL_MY_WIFE_NAME}}</p>
      <p>{{ $api.LOGIN_API }}</p>
      <p>{{ getName('xuyinghao') }}</p>
      <login-common></login-common>
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
        }
      },
      computed: {

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
