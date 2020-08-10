<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in banner" :key="index">
        <image-pic width="100%" height="150" :src="image" />
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
        return []
      }
    }
  }
}
</script>
