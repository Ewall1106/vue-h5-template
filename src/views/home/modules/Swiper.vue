<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" width="100%" height="150" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://m.360buyimg.com/babel/s750x300_jfs/t1/91722/36/15702/155940/5e743902E12329b15/bf74028004890c45.jpg',
        'https://m.360buyimg.com/babel/s750x300_jfs/t1/101273/30/14675/149408/5e698fd3E34e671d0/20f810d02067d342.jpg',
        'https://m.360buyimg.com/babel/s750x300_jfs/t1/104517/14/15980/188439/5e7311fcE32a88066/4461e1fb99fc7cf6.jpg'
      ]
    }
  }
}
</script>

<style>
</style>
