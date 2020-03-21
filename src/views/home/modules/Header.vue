<template>
  <div class="components-header">
    <image-pic width="30" height="30" :src="require('@/assets/logo.png')" />
    <van-button block class="search" size="small">
      <span style="color:#8e8e8e;margin-right:6px">
        <svg-icon icon-class="search" :width="15" :height="15" />
      </span>
      <span>搜索商品名称</span>
    </van-button>
    <span style="color:#8e8e8ec9">
      <svg-icon icon-class="user" :width="18" :height="18" />
    </span>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss" scoped>
.components-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 24px;
  .search {
    background: #f5f5f5;
    margin: 0 18px;
    display: flex;
    align-items: center;
    font-size: 26px;
    color: #8e8e8ec9;
  }
}
</style>
