<template>
  <div class="detail">
    <nav-bar title="商品详情">
      <span style="color: #333">
        <svg-icon icon-class="share" :width="15" :height="15" />
      </span>
    </nav-bar>

    <Swiper :banner="info.banner" />

    <Overview
      :title="info.title"
      :desc="info.desc"
      :price="info.price"
      :old-price="info.oldPrice"
    />

    <Section :service="info.service" @input="isSkuShow = $event" />

    <!--
    <Comment
      :rate="comment.rate"
      :num="comment.num"
      :tags="comment.tags"
      :list="comment.list"
    /> -->

    <Description :details="info.details" />

    <Sku v-model="isSkuShow" :skudata="skudata" :goods-id="productId" :goods="info.goods" />

    <Tabbar @input="isSkuShow = $event" />
    <back-top />
    <Skeleton v-if="isSkeletonShow" />
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
      productId: '',
      info: {},
      skudata: {},
      goods: {},
      isSkuShow: false,
      isSkeletonShow: true
    }
  },
  mounted() {
    const { productId } = this.$route.query
    this.productId = productId
    this.getDetail()
  },
  methods: {
    getDetail() {
      getDetail({
        productId: this.productId
      }).then((res) => {
        const data = res.entry
        this.info = data
        this.skudata = data.sku
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
