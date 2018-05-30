<template>
  <div class="home">
    <my-header></my-header>
    <carousel></carousel>
  </div>
</template>
<script>
import MyHeader from '@/components/myHeader'
import Carousel from '@/components/carousel'
export default {
  name: "home",
  components: {
    MyHeader,
    Carousel
  },
  data() {
    return {
      msg: "hello vue"
    };
  },
  methods: {}
};
</script>
<style scoped>
</style>
