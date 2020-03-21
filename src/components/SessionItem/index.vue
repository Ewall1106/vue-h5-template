<template>
  <div class="session-item">
    <image-pic
      align="center"
      width="100%"
      height="160"
      src=" https://m.360buyimg.com/babel/s750x300_jfs/t1/96501/1/14812/180805/5e69f6e2E65623863/c40c27c4ec520eef.jpg"
    />
    <div class="title">
      <span class="title__text">头号爆品、新书特卖专场</span>
      <count-down />
    </div>
    <div class="desc">
      <span class="desc__tag">1000+款上新</span>
      <span class="desc__text">
        <i>1</i>折起
      </span>
    </div>
  </div>
</template>

<script>
import CountDown from '@/components/CountDown'
export default {
  components: {
    CountDown
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.session-item {
  width: 700px;
  height: 460px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;
  .title {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title__text {
      font-size: $normal;
      color: $black;
    }
  }
  .desc {
    padding: 10px;
    .desc__tag {
      background: linear-gradient(90deg, rgb(136, 210, 50), rgb(81, 192, 91));
      color: #fff;
      font-size: $mini;
      padding: 4px;
      border-radius: 10px;
    }
    .desc__text {
      margin-left: 14px;
      font-size: $small;
      color: $gray;
      i {
        color: $red;
      }
    }
  }
}
</style>
