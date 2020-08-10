<template>
  <div style="background:#fff">
    <van-swipe :autoplay="3000" :indicator-color="variables.red">
      <van-swipe-item v-for="(image, index) in banner" :key="index" @click="onSwipeClick(index)">
        <image-pic width="100%" height="400" :src="image" />
      </van-swipe-item>
    </van-swipe>

    <van-image-preview v-model="show" :images="banner" :start-position="previewIdx" />
  </div>
</template>

<script>
import variables from '@/styles/variables.scss'

export default {
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      show: false,
      previewIdx: 0
    }
  },
  computed: {
    variables() {
      return variables
    }
  },
  methods: {
    onSwipeClick(index) {
      this.previewIdx = index
      this.show = true
    }
  }
}
</script>
