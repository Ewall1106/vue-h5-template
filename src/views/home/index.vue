<template>
  <div class="home">
    <Header />
    <Swiper />
    <back-top />
    <Category :cateList="cateList" />
    <Goods />
  </div>
</template>

<script>
import Header from './modules/Header'
import Swiper from './modules/Swiper'
import Category from './modules/Category'

import Goods from './modules/Goods'
import BackTop from '@/components/BackTop'

export default {
  name: 'Home',
  components: {
    Header,
    BackTop,
    Swiper,
    Category,
    Goods
  },
  data() {
    return {
      val: '11111',
      value: 0,
      switch1: false,
      switch2: false,
      cateList: {}
    }
  },
  mounted() {
    const data = [
      {
        categoryName: '食品',
        index: 0,
        oneCategoryIcon:
          'https://cdn.webuy.ai/assets/img/2019/11/06/n_1573033162472_4895___size132x132.png',
        oneCategoryId: 293
      },
      {
        categoryName: '食品',
        index: 0,
        oneCategoryIcon:
          'https://cdn.webuy.ai/assets/img/2019/11/06/n_1573033162472_4895___size132x132.png',
        oneCategoryId: 293
      },
      {
        categoryName: '食品',
        index: 0,
        oneCategoryIcon:
          'https://cdn.webuy.ai/assets/img/2019/11/06/n_1573033162472_4895___size132x132.png',
        oneCategoryId: 293
      },
      {
        categoryName: '食品',
        index: 0,
        oneCategoryIcon:
          'https://cdn.webuy.ai/assets/img/2019/11/06/n_1573033162472_4895___size132x132.png',
        oneCategoryId: 293
      },
      {
        categoryName: '食品',
        index: 0,
        oneCategoryIcon:
          'https://cdn.webuy.ai/assets/img/2019/11/06/n_1573033162472_4895___size132x132.png',
        oneCategoryId: 293
      },
      {
        categoryName: '食品',
        index: 0,
        oneCategoryIcon:
          'https://cdn.webuy.ai/assets/img/2019/11/06/n_1573033162472_4895___size132x132.png',
        oneCategoryId: 293
      },
      {
        categoryName: '食品',
        index: 0,
        oneCategoryIcon:
          'https://cdn.webuy.ai/assets/img/2019/11/06/n_1573033162472_4895___size132x132.png',
        oneCategoryId: 293
      },
      {
        categoryName: '食品',
        index: 0,
        oneCategoryIcon:
          'https://cdn.webuy.ai/assets/img/2019/11/06/n_1573033162472_4895___size132x132.png',
        oneCategoryId: 293
      },
      {
        categoryName: '食品',
        index: 0,
        oneCategoryIcon:
          'https://cdn.webuy.ai/assets/img/2019/11/06/n_1573033162472_4895___size132x132.png',
        oneCategoryId: 293
      },
      {
        categoryName: '食品',
        index: 0,
        oneCategoryIcon:
          'https://cdn.webuy.ai/assets/img/2019/11/06/n_1573033162472_4895___size132x132.png',
        oneCategoryId: 293
      },
      {
        categoryName: '食品',
        index: 0,
        oneCategoryIcon:
          'https://cdn.webuy.ai/assets/img/2019/11/06/n_1573033162472_4895___size132x132.png',
        oneCategoryId: 293
      },
      {
        categoryName: '食品',
        index: 0,
        oneCategoryIcon:
          'https://cdn.webuy.ai/assets/img/2019/11/06/n_1573033162472_4895___size132x132.png',
        oneCategoryId: 293
      },
      {
        categoryName: '食品',
        index: 0,
        oneCategoryIcon:
          'https://cdn.webuy.ai/assets/img/2019/11/06/n_1573033162472_4895___size132x132.png',
        oneCategoryId: 293
      }
    ]
    data.forEach((item, idx) => {
      item.index = idx
    })
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
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle()
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
