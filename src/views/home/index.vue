<template>
  <div class="home">
    <Header />
    <Swiper :banner="banner" />
    <Category :cateList="cateList" />
    <Session :sessionList="sessionList" />
    <Goods :goodsList="goodsList" />
    <back-top />
  </div>
</template>

<script>
import { getBanner, getCategory, getSession, getList } from '@/api/home'
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
      cateList: [],
      sessionList: [],
      goodsList: []
    }
  },
  mounted() {
    this.getBanner()
    this.getCategory()
    this.getSession()
    this.getGoodsList()
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
        this.cateList = data
      })
    },
    getSession() {
      getSession().then(res => {
        this.sessionList = res.entry
      })
    },
    getGoodsList() {
      getList({
        pageSize: 4,
        pageNum: 3
      }).then(res => {
        console.log('>>>>>>', res)
        this.goodsList = res.entry
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
