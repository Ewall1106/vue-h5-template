<template>
  <div class="container">
    <van-cell-group title="组件相关">
      <van-cell
        title="基础组件"
        label="常规的基础组件使用vant即可"
        is-link
        url="https://youzan.github.io/vant/#/zh-CN/"
      />
      <van-cell title="图标组件" is-link to="/power/svg-icon" />
      <van-cell title="返回顶部" is-link to="/power/back-top" />
      <van-cell title="更新中..." />
    </van-cell-group>

    <van-cell-group title="扩展功能">
      <van-cell title="接口请求" is-link to="/show" />
      <van-cell title="更新中..." />
    </van-cell-group>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background: #f5f5f5;
}
</style>
