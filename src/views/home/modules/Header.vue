<template>
  <div>
    <div class="home-header">
      <image-pic
        width="28px"
        height="28px"
        :src="require('@/assets/logo.png')"
      />
      <van-button block class="search" size="small" @click="onSearch">
        <span style="color: #8e8e8e; margin-right: 6px">
          <svg-icon icon-class="search" :width="15" :height="15" />
        </span>
        <span>搜索商品名称</span>
      </van-button>
      <span style="color: #8e8e8e" @click="onUser">
        <svg-icon icon-class="user" :width="18" :height="18" />
      </span>
    </div>
    <div class="placeholder" />
  </div>
</template>

<script>
export default {
  methods: {
    onSearch() {
      this.$router.push({
        path: "/search",
      });
    },
    onUser() {
      this.$router.push({
        path: "/user",
      });
    },
  },
};
</script>
>

<style lang="scss" scoped>
.home-header {
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 24px;
  .search {
    margin: 0 18px;
    display: flex;
    align-items: center;
    font-size: 26px;
    color: #8e8e8ec9;
    background: #f5f5f5;
    line-height: 10px;
  }
}
.placeholder {
  width: 100%;
  height: 108px;
}
</style>
