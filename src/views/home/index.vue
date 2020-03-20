<template>
  <div class="home">
    <img class="logo" src="@/assets/logo.png" alt="logo" />

    <van-cell-group title="相关介绍：">
      <van-cell title="vue-mall" is-link url="https://github.com/Ewall1106/mall" />
      <van-cell
        title="panda-vue-template"
        is-link
        url="https://github.com/Ewall1106/panda-vue-template"
      />
      <van-cell title="yapi接口文档" is-link url="http://yapi.demo.qunar.com/project/17982" />
    </van-cell-group>

    <van-cell-group title="功能介绍：">
      <van-cell
        title="一次讲清移动端适配解决方案—rem和vw"
        is-link
        url="https://github.com/Ewall1106/panda-vue-template"
      />
      <van-cell title="vue-cli3.0与vant的引入" is-link url="https://github.com/Ewall1106/mall" />
      <van-cell title="axios的封装与数据mock" is-link url="https://github.com/Ewall1106/mall" />
      <van-cell title="vuex的基本使用" is-link url="https://github.com/Ewall1106/mall" />
    </van-cell-group>

    <van-cell-group title="组件补充：">
      <van-cell title="svg图标" is-link to="IconFont" />
      <!-- <van-cell title="返回顶部" is-link to="About" target="_blank" /> -->
    </van-cell-group>
    <back-top />
  </div>
</template>

<script>
import BackTop from '@/components/BackTop'

export default {
  name: 'Home',
  components: {
    BackTop
  },
  data() {
    return {
      val: '11111'
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  background: #f5f5f593;
  .logo {
    display: block;
    width: 200px;
    margin: 0 auto;
    padding-top: 40px;
  }
  h2 {
    padding: 10px 0;
  }
  a {
    color: #42b983;
  }
}
</style>
