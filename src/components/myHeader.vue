<template>
  <div class="myHeader">
    <div class="left">
      <img class="logo" src="@/assets/logo.png" />
      <span class="title">Hxx-Luxury Store</span>
    </div>
    <div class="right">
      <span class="iconfont">&#xe6b8;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "myHeader",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="less" scoped>
.myHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 1.066667rem;
  padding: 0 .133333rem;
  .left {
    display: flex;
    flex-direction: row;
    align-items: center;
    .logo {
      width: .8rem;
      height: .8rem;
    }
    .title {
      padding-left: .133333rem;
      font-size: .4rem;
      color: #8e8e8e;
    }
  }
  .right {
    span {
      font-size: .5rem;
    }
  }
}
</style>