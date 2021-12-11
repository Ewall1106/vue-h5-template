<template>
  <div class="user-tools">
    <van-cell
      title="Git仓库"
      is-link
      url="https://github.com/Ewall1106/vue-h5-template"
    />
    <van-cell title="退出登录" is-link @click="loginOut" />
  </div>
</template>

<script>
export default {
  methods: {
    loginOut() {
      this.$store.dispatch("user/logout").then(() => {
        this.$notify({ type: "success", message: "退出登录成功" });
        this.$router.replace("/");
      });
    },
  },
};
</script>
v

<style lang="scss" scoped>
.user-tools {
  width: 702px;
  background: rgba(255, 255, 255, 1);
  margin: 0 auto;
  margin-top: 24px;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.09);
  border-radius: 24px;
  overflow: hidden;
}
</style>
