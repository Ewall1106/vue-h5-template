<template>
  <div class="container">
    <van-cell-group title="组件相关">
      <van-cell
        title="基础组件"
        label="常规的基础组件使用vant即可"
        is-link
        url="https://docs.xwhx.top/mall/"
      />
      <van-cell title="图标组件" is-link to="/power/svg-icon" />
      <van-cell title="更新中..." />
    </van-cell-group>
  </div>
  <div class="container">
    <van-cell-group title="基础功能">
      <van-cell title="更新中..." />
    </van-cell-group>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 702px;
  background: rgba(255, 255, 255, 1);
  margin: 0 auto;
  margin-top: 24px;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.09);
  border-radius: 24px;
  overflow: hidden;
}
</style>
