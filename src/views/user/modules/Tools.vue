<template>
  <div class="user-tools">
    <van-cell title="Git仓库" is-link url="https://github.com/Ewall1106/mall" />
    <van-cell title="文档说明" is-link url="https://docs.xwhx.top/mall/" />
    <!-- <van-cell title="相关组件" is-link /> -->
    <!-- <van-cell title="推荐学习" is-link /> -->
    <van-cell title="我的地址" is-link to="/address" />
    <van-cell title="退出登录" is-link @click="loginOut" />
  </div>
</template>

<script>
export default {
  methods: {
    loginOut() {
      this.$store.dispatch('user/logout').then((res) => {
        this.$notify({ type: 'success', message: '退出登录成功' })
        this.$router.replace('/')
      })
    }
  }
}
</script>v

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
