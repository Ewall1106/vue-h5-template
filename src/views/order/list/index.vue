<template>
  <div class="order-list">
    <nav-bar title="订单列表" />
    <van-tabs v-model="active" type="card" swipeable style="margin-top: 10px">
      <van-tab v-for="(title, idx) in titleList" :key="idx" :title="title">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <list-item />
            <!-- <product-item
              v-for="(item, idx) in list"
              :key="idx"
              :product-id="item.productId"
              :img="item.img"
              :title="item.title"
              :desc="item.desc"
              :price="item.price"
              :old-price="item.oldPrice"
              :percentage="item.percentage"
              style="margin-bottom: 6px"
            /> -->
          </van-list>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import ListItem from './modules/ListItem'

export default {
  name: 'OrderList',
  components: {
    ListItem
  },
  data() {
    return {
      active: 2,
      titleList: ['全部', '待支付', '待发货', '待收货'],

      list: [],
      pageNo: 0,
      pageSize: 8,
      loading: false,
      finished: false,
      refreshing: false,
      isSkeletonShow: true
    }
  },

  methods: {
    onLoad() {
      if (!this.finished) {
        this.loading = true
        this.pageNo += 1
        // this.getProductList()
      }

      console.log('>>>>')
      this.loading = false
    },
    onRefresh() {
      this.refreshing = true
      this.pageNo = 1
      // this.getProductList()
    }
  }
}
</script>

 <style lang="scss" scoped>
.order-list {
}
</style>
