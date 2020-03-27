<template>
  <div class="comment-item-component">
    <div class="title">
      <div class="title__left">
        <image-pic
          round
          fit="contain"
          :src="require('@/assets/logo.png')"
          width="25"
          height="25"
          style="margin-right:6px"
        />
        <van-rate
          v-model="value"
          :size="15"
          :color="variables.red"
          void-icon="star"
          void-color="#eee"
        />
      </div>
      <div class="title__right">2019-10-10</div>
    </div>

    <div class="desc">
      <p
        class="desc__text van-multi-ellipsis--l3"
      >收到货就赶紧打开看起来了，之前看过电子版的看完之后感到意犹未尽，前两天突然想再看一遍于是决定买实体书认真读一遍。 </p>
      <div class="desc_img">
        <image-pic
          v-for="(item,idx) in imgs"
          :key="idx"
          :src="item"
          fit="cover"
          width="60"
          height="70"
          style="margin-right:8px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import variables from '@/styles/variables.scss'

export default {
  data() {
    return {
      value: 2,
      imgs: [
        'http://img30.360buyimg.com/shaidan/s128x96_jfs/t1/91400/14/15534/116833/5e723705E6e97e5a3/012d7444f8ccbcea.jpg',
        'http://img30.360buyimg.com/shaidan/s128x96_jfs/t1/91314/13/15486/245367/5e723706E663c43aa/abb31350cdadf56d.jpg',
        'http://img30.360buyimg.com/shaidan/s128x96_jfs/t1/103902/15/15108/267864/5e703d09E6603898f/4d91ad6fab4f76e0.jpg'
      ]
    }
  },
  computed: {
    variables() {
      return variables
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.comment-item-component {
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title__left {
      display: flex;
      align-items: center;
    }
    .title__right {
      color: $gray;
      font-size: $mini;
    }
  }
  .desc {
    .desc__text {
      font-size: $mini;
      color: $black;
      line-height: 38px;
      text-align: justify;
    }
    .desc_img {
      display: flex;
      flex-direction: row;
      margin-top: 8px;
    }
  }
}
</style>
