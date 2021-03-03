<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      :immediate-check="false"
      @load="onLoad"
    >
      <div class="home">
        <Banner :banner="banner" />
        <div class="goods-list">
          <Goods
            v-for="item in goodsList"
            :key="item.productId"
            :productId="item.productId"
            :desc="item.desc"
            :img="item.img"
            :oldPrice="item.oldPrice"
            :price="item.price"
            :title="item.title"
          />
        </div>
      </div>
    </van-list>
  </van-pull-refresh>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useBasicInfo } from './hooks/useBasicInfo'
import { useListEffect } from './hooks/useListEffect'
import Banner from './components/Banner.vue'
import Goods from './components/Goods.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Banner,
    Goods
  },
  setup() {
    const { banner, requestBanner, cateList, requestCategory } = useBasicInfo()
    const {
      loading,
      finished,
      refreshing,
      goodsList,
      requestGoodsList,
      onLoad,
      onRefresh
    } = useListEffect()

    requestBanner()
    requestCategory()
    requestGoodsList()

    return {
      banner,
      cateList,
      goodsList,
      loading,
      finished,
      refreshing,
      onLoad,
      onRefresh
    }
  }
})
</script>

<style lang="scss" scoped>
.home {
  background: #f5f5f5;
  min-height: 100vh;
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: #fff;
  }
}
</style>
