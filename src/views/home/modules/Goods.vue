<template>
  <div class="home-goods">
    <Title name="为你推荐" />
    <div class="main">
      <goods-item
        v-for="(item,idx) in goodsList"
        :key="idx"
        :img="item.img"
        :title="item.title"
        :desc="item.desc"
        :price="item.price"
        :discount="item.discount"
      />
    </div>
  </div>
</template>

<script>
import Title from './Title'
import GoodsItem from '@/components/GoodsItem'

export default {
  props: ['goodsList'],
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
  .main {
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
