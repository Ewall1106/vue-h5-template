<template>
  <div class="home">
    <Header />
    <Swiper :banner="banner" />
    <Category :cate-list="cateList" />
    <Session :session-list="sessionList" />
    <Goods
      v-model="isLoading"
      :goods-list="goodsList"
      :is-finished="isFinished"
      @onReachBottom="onReachBottom"
    />
    <back-top />
    <Skeleton v-if="isSkeletonShow" />
  </div>
</template>

<script>
import { getBanner, getCategory, getSession, getList } from '@/api/home'
import Header from './modules/Header'
import Swiper from './modules/Swiper'
import Category from './modules/Category'
import Session from './modules/Session'
import Goods from './modules/Goods'
import Skeleton from './modules/Skeleton'

export default {
  name: 'Home',
  components: {
    Header,
    Swiper,
    Category,
    Session,
    Goods,
    Skeleton
  },
  data() {
    return {
      banner: [],
      cateList: [],
      sessionList: [],
      goodsList: [],
      pageSize: 4,
      pageNum: 1,
      isLoading: false,
      isFinished: false,
      isSkeletonShow: true
    }
  },
  mounted() {
    Promise.all([this.getBanner(), this.getCategory(), this.getSession()]).then(
      () => {
        this.isSkeletonShow = false
        this.getGoodsList()
      }
    )
  },
  methods: {
    // banner
    getBanner() {
      return new Promise((resolve) => {
        getBanner().then((res) => {
          this.banner = res.entry
          resolve()
        })
      })
    },
    // category
    getCategory() {
      return new Promise((resolve) => {
        getCategory().then((res) => {
          const data = res.entry
          this.cateList = data
          resolve()
        })
      })
    },
    // session
    getSession() {
      return new Promise((resolve) => {
        getSession().then((res) => {
          this.sessionList = res.entry
          resolve()
        })
      })
    },
    // goods-list
    getGoodsList() {
      getList({
        pageSize: this.pageSize,
        pageNum: this.pageNum
      }).then((res) => {
        const data = res.entry
        this.goodsList = [...this.goodsList, ...data]
        this.isLoading = false
        if (data.length < this.pageSize && this.goodsList.length > 0) {
          this.isFinished = true
        }
      })
    },
    // reach-bottom
    onReachBottom() {
      this.pageNum += 1
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
