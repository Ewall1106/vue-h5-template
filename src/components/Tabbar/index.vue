<template>
  <div>
    <div class="tabbar">
      <van-tabbar v-model="active" :active-color="variables.theme" :fixed="false">
        <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
        <van-tabbar-item icon="bars">分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager">我的</van-tabbar-item>
      </van-tabbar>
    </div>
    <div class="tabbar--placeholder"></div>
  </div>
</template>

<script>
import variables from '@/styles/variables.scss'

export default {
  data() {
    return {
      active: 0
    }
  },
  computed: {
    variables() {
      return variables
    }
  }
}
</script>

<style lang="scss" scoped>
.tabbar {
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 2px solid #f5f5f5;
}
.tabbar--placeholder {
    width: 100vw;
    height: 100px;
}
</style>
