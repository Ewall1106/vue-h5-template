<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in banner" :key="index" @click="onNavigate">
        <image-pic width="100%" height="150" :src="item.img" />
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
  },
  methods: {
    onNavigate() {
      this.$router.push({
        path: '/product'
      })
    }
  }
}
</script>
