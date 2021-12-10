<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, idx) in banner" :key="idx">
        <van-image
          style="display: block"
          lazy-load
          width="100%"
          height="150"
          :src="item.img"
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
