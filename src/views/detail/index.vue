<template>
  <div class="detail">
    <nav-bar title="商品详情">
      <span style="color:#333">
        <svg-icon icon-class="share" :width="15" :height="15" />
      </span>
    </nav-bar>

    <Swiper :banner="banner" />

  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Swiper from './modules/Swiper'

export default {
  name: 'Detail',
  components: {
    Swiper,
    NavBar
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
}
</style>
