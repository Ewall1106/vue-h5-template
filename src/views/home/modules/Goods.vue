<template>
  <div class="home-goods">
    <van-list
      v-model="loading"
      :finished="isFinished"
      finished-text="没有更多了"
      @load="onReachBottom"
    >
      <div class="main">
        <goods-item
          v-for="(item, idx) in goodsList"
          :key="idx"
          :product-id="item.productId"
          :img="item.img"
          :title="item.title"
          :desc="item.desc"
          :price="item.price"
          :old-price="item.oldPrice"
        />
      </div>
    </van-list>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem'

export default {
  components: {
    GoodsItem
  },
  model: {
    prop: 'isLoading'
  },
  props: {
    goodsList: {
      type: Array,
      default() {
        return []
      }
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isFinished: {
      type: Boolean,
      default: false
    }
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
  .main {
    background: #fff;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
