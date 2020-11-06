<template>
  <div class="tab-bar">
    <van-goods-action>
      <van-goods-action-icon icon="shop-o" text="首页" to="/" />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        :badge="num || ''"
        to="/cart"
      />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="handleClick"
      />
      <van-goods-action-button
        :color="variables.red"
        text="立即购买"
        @click="handleClick"
      />
    </van-goods-action>
    <div class="tabbar--placeholder" style="width: 100%; height: 50px" />
  </div>
</template>

<script>
import variables from '@/styles/variables.scss'

export default {
  props: {
    num: {
      type: Number,
      default: 0
    }
  },
  computed: {
    variables() {
      return variables
    }
  },
  methods: {
    handleClick() {
      this.$emit('input', true)
    }
  }
}
</script>

<style>
</style>
