<template>
  <div class="home">
    <Header />
    <Swiper :banner="banner" />
    <Category :cateList="cateList" />
    <Session />
    <Goods />
    <back-top />
  </div>
</template>

<script>
import { getBanner, getCategory } from '@/api/home'
import Header from './modules/Header'
import Swiper from './modules/Swiper'
import Category from './modules/Category'
import Session from './modules/Session'
import Goods from './modules/Goods'
import BackTop from '@/components/BackTop'

export default {
  name: 'Home',
  components: {
    Header,
    BackTop,
    Swiper,
    Category,
    Session,
    Goods
  },
  data() {
    return {
      banner: [],
      cateList: {}
    }
  },
  mounted() {
    this.getBanner()
    this.getCategory()
  },
  methods: {
    getBanner() {
      getBanner().then(res => {
        this.banner = res.entry
      })
    },
    getCategory() {
      getCategory().then(res => {
        const data = res.entry
        if (data.length <= 5) {
          this.cateList = {
            prev: data,
            next: []
          }
        } else if (data.length > 5 && data.length <= 10) {
          this.cateList = {
            prev: data.slice(0, 5),
            next: data.slice(5)
          }
        } else {
          const breakPoint = Math.ceil(data.length / 2)
          this.cateList = {
            prev: data.slice(0, breakPoint),
            next: data.slice(breakPoint)
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.home {
  background: #f5f5f5;
  min-height: 100vh;
  .logo {
    display: block;
    width: 200px;
    margin: 0 auto;
    padding-top: 40px;
  }
  .menu__right {
    width: 50px;
  }
}
</style>
