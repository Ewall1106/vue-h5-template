<template>

  <div class="detail">
    <nav-bar title="商品详情">
      <span style="color: #333" @click="isShareShow = true">
        <svg-icon icon-class="share" :width="15" :height="15" />
      </span>
    </nav-bar>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <Swiper :banner="info.banner" />

      <Overview
        :title="info.title"
        :desc="info.desc"
        :price="info.price"
        :old-price="info.oldPrice"
      />

      <Section
        :service="info.service"
        :address="address"
        @input="isSkuShow = $event"
      />

      <!--
    <Comment
      :rate="comment.rate"
      :num="comment.num"
      :tags="comment.tags"
      :list="comment.list"
    /> -->

      <Description :details="info.details" />

      <Sku
        v-model="isSkuShow"
        :skudata="skudata"
        :goods-id="productId"
        :goods="info.goods"
        @handleCartNum="getCartNum"
      />

      <Share v-model="isShareShow" />

    </van-pull-refresh>

    <Tabbar :num="cartNum" @input="isSkuShow = $event" />
    <back-top />
    <Skeleton v-if="isSkeletonShow" />
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
import Skeleton from './modules/Skeleton'
import Share from './modules/Share'

import { getDetail } from '@/api/detail'
import { getAddressList } from '@/api/user'
import { getCartNum } from '@/api/cart'

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
    Skeleton,
    Share
  },
  data() {
    return {
      productId: '',
      info: {},
      address: '',
      skudata: {},
      goods: {},
      cartNum: 0,
      refreshing: false,
      isShareShow: false,
      isSkuShow: false,
      isSkeletonShow: true
    }
  },
  mounted() {
    const { productId } = this.$route.query
    this.productId = productId
    this.getDetail()
    this.getCartNum()
  },
  activated() {
    this.getAddress()
  },
  methods: {
    // 获取商品详情
    getDetail() {
      getDetail({
        productId: this.productId
      }).then((res) => {
        const data = res.entry
        this.info = data
        this.skudata = data.sku
        this.isSkeletonShow = false
        this.refreshing = false
      })
    },
    // 购物车数量
    getCartNum() {
      getCartNum().then((res) => {
        this.cartNum = res.entry
      })
    },
    // 获取地址
    getAddress() {
      getAddressList().then((res) => {
        const { list = [], defaultId = '' } = res.entry
        let address = ''
        if (defaultId) { address = list.filter((item) => item.addressId === defaultId) } else address = list.filter((item) => item.isDefault === true)
        if (address && address.length) {
          const [{ province, city, county }] = address
          this.address = `${province} ${city} ${county}`
        }
      })
    },
    // 下拉刷新
    onRefresh() {
      this.getDetail()
      this.getCartNum()
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
