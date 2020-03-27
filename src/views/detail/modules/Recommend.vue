<template>
  <div class="recommend">
    <h3 class="title">猜你喜欢</h3>
    <div class="main">
      <div class="main__item" v-for="(item,idx) in 6" :key="idx">
        <image-pic
          src="http://img14.360buyimg.com/mobilecms/s400x400_jfs/t1/104130/8/15999/189699/5e75fa42E14ee0ff8/04f910345b5cf5d9.jpg"
          width="120"
          height="120"
          fill="cover"
        />
        <p class="main__item__desc van-multi-ellipsis--l2">三体全集123 京东物流包邮 刘慈欣科幻小说 另著流浪地球</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.recommend {
  background: #fff;
  margin-top: 24px;
  .title {
    color: $black;
    font-size: $small;
    padding: 26px;
  }
  .main {
    display: flex;
    flex-direction: row;
    overflow: scroll;
    .main__item {
        padding:0 14px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 250px;
      .main__item__desc {
        color: $gray;
        font-size: $mini;
      }
    }
  }
}
</style>
