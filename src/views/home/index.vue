<template>
  <div class="home">
    <Header />
    <Swiper :banner="banner" />
    <Category :cateList="cateList" />
    <Session :sessionList="sessionList" />
    <Goods
      :goodsList="goodsList"
      v-model="isLoading"
      :isFinished="isFinished"
      @onReachBottom="onReachBottom"
    />
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
      goodsList: [],
      pageSize: 1,
      pageNum: 4,
      isLoading: false,
      isFinished: false
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
        pageSize: this.pageSize,
        pageNum: this.pageNum
      }).then(res => {
        const data = res.entry
        this.goodsList = [...this.goodsList, ...data]
        this.isLoading = false
        if (data.length < this.pageNum && this.goodsList.length > 0) {
          this.isFinished = true
        }
      })
    },
    onReachBottom() {
      this.pageSize += 1
      this.getGoodsList()
    }
  }
}
</script>

<style lang="scss" scoped>
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
