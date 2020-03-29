<template>
  <div class="tab-bar">
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button :color="variables.red" text="立即购买" />
    </van-goods-action>
    <div class="tabbar--placeholder" style="width:100%;height:50px"></div>
  </div>
</template>

<script>
import variables from '@/styles/variables.scss'

export default {
  computed: {
    variables() {
      return variables
    }
  }
}
</script>

<style>
</style>
