<template>
  <div class="home-title">
    <span class="line"></span>
    <span class="text">为你推荐</span>
    <span class="line"></span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.home-title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 26px;
  .line {
    display: inline-block;
    width: 40px;
    height: 2px;
    background: #999;
  }
  .text {
    font-size: 30px;
    color: #000;
    padding: 0 20px;
  }
}
</style>
