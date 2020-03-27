<template>
  <div class="detail">
    <nav-bar title="商品详情">
      <span style="color:#333">
        <svg-icon icon-class="share" :width="15" :height="15" />
      </span>
    </nav-bar>
    <Swiper :banner="banner" />
    <Overview />
    <Section />
    <Comment />
    <Recommend/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Swiper from './modules/Swiper'
import Overview from './modules/Overview'
import Section from './modules/Section'
import Comment from './modules/Comment'
import Recommend from './modules/Recommend'

export default {
  name: 'Detail',
  components: {
    NavBar,
    Swiper,
    Overview,
    Section,
    Comment,
    Recommend
  },
  data() {
    return {
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
