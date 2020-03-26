<template>
  <div>
    <van-swipe :autoplay="3000" :indicator-color="variables.red">
      <van-swipe-item v-for="(image, index) in banner" :key="index">
        <image-pic width="100%" height="400" :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import variables from '@/styles/variables.scss'

export default {
  props: ['banner'],
  computed: {
    variables() {
      return variables
    }
  }
}
</script>
