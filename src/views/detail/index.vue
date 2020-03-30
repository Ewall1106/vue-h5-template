<template>
  <div class="detail">
    <nav-bar title="商品详情">
      <span style="color:#333">
        <svg-icon icon-class="share" :width="15" :height="15" />
      </span>
    </nav-bar>
    <Swiper :banner="banner" />
    <Overview />
    <Section @input="isSkuShow = $event" />
    <Comment />
    <Description />
    <Sku v-model="isSkuShow" />
    <Tabbar @input="isSkuShow = $event" />
    <back-top />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Swiper from './modules/Swiper'
import Overview from './modules/Overview'
import Section from './modules/Section'
import Comment from './modules/Comment'
import Description from './modules/Description'
import Tabbar from './modules/Tabbar'
import Sku from './modules/Sku'

export default {
  name: 'Detail',
  components: {
    NavBar,
    Swiper,
    Overview,
    Section,
    Comment,
    Description,
    Tabbar,
    Sku
  },
  data() {
    return {
      isSkuShow: false,
      banner: [
        'http://img3m4.ddimg.cn/32/35/23579654-1_e_3.jpg',
        'http://img3m4.ddimg.cn/32/35/23579654-2_e_5.jpg',
        'http://img3m4.ddimg.cn/32/35/23579654-3_e_3.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {
  min-height: 100vh;
  background: #f5f5f5;
}
</style>
