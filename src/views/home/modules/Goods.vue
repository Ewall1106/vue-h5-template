<template>
  <div class="home-goods">
    <Title />
    <div class="container">
      <goods-item v-for="(item,idx) in 10" :key="idx" />
    </div>
  </div>
</template>

<script>
import Title from './Title'
import GoodsItem from '@/components/GoodsItem'
export default {
  components: {
    GoodsItem,
    Title
  }
}
</script>

<style lang="scss" scoped>
.home-goods {
  background: #fff;
  margin-top: 24px;
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
}
</style>
