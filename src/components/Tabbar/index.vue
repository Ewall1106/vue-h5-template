<template>
  <div>
    <div class="tabbar">
      <van-tabbar v-model="active" :active-color="variables.theme" :fixed="false" route>
        <van-tabbar-item to="/" icon="wap-home">首页</van-tabbar-item>
        <van-tabbar-item to="/category" icon="bars">分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager">我的</van-tabbar-item>
      </van-tabbar>
    </div>
    <div class="tabbar--placeholder" style="width:100%;height:50px"></div>
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
</style>
