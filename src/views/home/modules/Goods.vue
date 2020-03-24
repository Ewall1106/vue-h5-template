<template>
  <div class="home-goods">
    <Title name="为你推荐" style="background:#fff"/>

    <van-list
      :offset="0"
      v-model="loading"
      :finished="isFinished"
      finished-text="没有更多了"
      @load="onReachBottom"
      :immediate-check="false"
    >
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
    </van-list>
  </div>
</template>

<script>
import Title from './Title'
import GoodsItem from '@/components/GoodsItem'

export default {
  model: {
    prop: 'isLoading'
  },
  props: {
    goodsList: Array,
    isLoading: {
      type: Boolean,
      default: false
    },
    isFinished: {
      type: Boolean,
      default: false
    }
  },
  components: {
    GoodsItem,
    Title
  },
  computed: {
    loading: {
      get() {
        return this.isLoading
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    onReachBottom() {
      this.$emit('onReachBottom')
    }
  }
}
</script>

<style lang="scss" scoped>
.home-goods {
  margin-top: 24px;
  .main {
    background: #fff;
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
