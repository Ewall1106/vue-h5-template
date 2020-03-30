<template>
  <div class="goods-sku">
    <van-sku
      v-model="isShow"
      :sku="skudata"
      :goods="goods"
      :close-on-click-overlay="true"
      @buy-clicked="onBuy"
      @add-cart="onAddCart"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    skudata: Object,
    goods: Object
  },
  computed: {
    isShow: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    onBuy() {
      console.log('buy')
    },
    onAddCart() {
      this.$toast.success('添加成功')
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/variables.scss";

// reset vant style
.goods-sku {
  .van-sku-messages {
    padding: 0;
  }
  .van-button--danger {
    background: $red;
  }
}
</style>
