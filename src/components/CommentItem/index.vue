<template>
  <div class="comment-item-component">
    <div class="title">
      <div class="title__left">
        <image-pic
          round
          fit="contain"
          :src="avatar"
          width="25"
          height="25"
          style="margin-right: 6px"
        />
        <span style="margin-right: 6px">{{ name }}</span>
        <van-rate
          v-model="score"
          :size="15"
          :color="variables.red"
          void-icon="star"
          void-color="#eee"
        />
      </div>
      <div class="title__right">{{ time }}</div>
    </div>

    <div class="desc">
      <p class="desc__text van-multi-ellipsis--l3">{{ desc }}</p>
      <div class="desc_img">
        <image-pic
          v-for="(item, idx) in imgs"
          :key="idx"
          :src="item"
          fit="cover"
          width="60"
          height="70"
          style="margin-right: 8px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import variables from "@/styles/variables.scss";

export default {
  props: {
    avatar: {
      type: String,
      default: "",
    },
    time: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: "",
    },
    score: {
      type: Number,
      default: 0,
    },
    desc: {
      type: String,
      default: "",
    },
    imgs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    variables() {
      return variables;
    },
  },
};
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
      color: $black;
      font-size: $mini;
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
