<template>
  <div class="detail">
    <nav-bar title="商品详情">
      <span style="color:#333">
        <svg-icon icon-class="share" :width="15" :height="15" />
      </span>
    </nav-bar>

    <Swiper :banner="banner" />

    <Overview
      :title="overview.title"
      :desc="overview.desc"
      :price="overview.price"
      :discount="overview.discount"
    />

    <Section @input="isSkuShow = $event" />

    <Comment :rate="comment.rate" :num="comment.num" :tags="comment.tags" :list="comment.list" />

    <Description :description="description" />

    <Sku :skudata="skudata" :goods="goods" v-model="isSkuShow" />

    <Tabbar @input="isSkuShow = $event" />
    <back-top />
    <Skeleton v-if="isSkeletonShow"/>
  </div>
</template>

<script>
import { getDetail } from '@/api/detail'
import NavBar from '@/components/NavBar'
import Swiper from './modules/Swiper'
import Overview from './modules/Overview'
import Section from './modules/Section'
import Comment from './modules/Comment'
import Description from './modules/Description'
import Tabbar from './modules/Tabbar'
import Sku from './modules/Sku'
import Skeleton from './modules/Skeleton'

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
    Sku,
    Skeleton
  },
  data() {
    return {
      banner: [],
      overview: {},
      comment: {},
      description: '',
      skudata: {},
      goods: {},
      isSkuShow: false,
      isSkeletonShow: true
    }
  },
  mounted() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      getDetail({
        goodsId: '1234'
      }).then(res => {
        const {
          banner,
          overview,
          comment,
          description,
          sku,
          goods
        } = res.entry
        this.banner = banner
        this.overview = overview
        this.comment = comment
        this.description = description
        this.skudata = sku
        this.goods = goods
        this.isSkeletonShow = false
      })
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
