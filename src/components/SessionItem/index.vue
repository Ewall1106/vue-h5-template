<template>
  <div class="session-item">
    <image-pic align="center" width="100%" height="160" :src="img" />
    <div class="title">
      <span class="title__text">{{title}}</span>
      <count-down :time="time" />
    </div>
    <div class="desc">
      <span class="desc__tag">{{tagnum}}+款上新</span>
      <span class="desc__text">
        <i>{{discount}}</i>折起
      </span>
    </div>
  </div>
</template>

<script>
import CountDown from '@/components/CountDown'
export default {
  props: {
    img: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    time: {
      type: Number
    },
    tagnum: {
      type: Number,
      default: 100
    },
    discount: {
      type: Number,
      default: 0
    }
  },
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
      font-size: $small;
      color: $black;
    }
  }
  .desc {
    padding:0 10px;
    display: flex;
    align-items: center;
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
