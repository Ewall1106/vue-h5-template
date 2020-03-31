<template>
  <div class="user-tools">
    <van-cell title="Git仓库" is-link />
    <van-cell title="文档说明" is-link />
    <van-cell title="相关组件" is-link />
    <van-cell title="推荐学习" is-link />
    <van-cell title="退出登录" is-link />
  </div>
</template>

<script>
export default {}
</script>

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
