<template>
  <div class="order-list">
    <nav-bar title="订单列表" />
    <van-tabs
      v-model="active"
      type="card"
      sticky
      swipeable
      offset-top="46"
      @change="onTitleChange"
    >
      <van-tab v-for="(title, idx) in titleList" :key="idx" :title="title">
        <van-pull-refresh
          v-model="refreshing"
          style="min-height: calc(100vh - 84px)"
          @refresh="onRefresh"
        >
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            :immediate-check="false"
            @load="onLoad"
          >
            <list-item
              v-for="item in list"
              :key="item.orderId"
              :order-id="item.orderId"
              :item-list="item"
            />
          </van-list>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import ListItem from './modules/ListItem'

import { getUserList } from '@/api/order'

export default {
  name: 'OrderList',
  components: {
    ListItem
  },
  data() {
    return {
      active: 0,
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

  mounted() {
    const { type } = this.$route.query
    this.active = Number(type)
    this.onLoad()
  },

  methods: {
    // 获取列表
    getList() {
      getUserList({
        type: this.active,
        pageNo: this.pageNo,
        pageSize: this.pageSize
      }).then((res) => {
        const data = res.entry
        if (this.refreshing) {
          this.list = data
          this.refreshing = false
          this.finished = false
        } else {
          this.list = [...this.list, ...data]
          if (data.length < this.pageSize) this.finished = true
        }
        this.loading = false
        this.isSkeletonShow = false
      })
    },
    // tab 切换
    onTitleChange(idx) {
      this.pageNo = 0
      this.loading = false
      this.finished = false
      this.refreshing = false
      this.isSkeletonShow = true
      this.list = []
      this.onLoad()
    },
    // 触底刷新
    onLoad() {
      if (!this.finished) {
        this.loading = true
        this.pageNo += 1
        this.getList()
      }
    },
    // 下拉刷新
    onRefresh() {
      this.refreshing = true
      this.pageNo = 1
      this.getList()
    }
  }
}
</script>

<style lang="scss">
.order-list {
  .van-card {
    background: #fff;
    margin-top: 0;
  }
  .van-tabs__wrap {
    background: #fff;
    padding: 4px 0;
  }
}
</style>

 <style lang="scss" scoped>
.order-list {
  background: #f5f5f5;
  .list-item {
    width: 700px;
    margin: 0 auto;
    margin-top: 12px;
    border-radius: 10px;
    overflow: hidden;
    background: #fff;
  }
}
</style>
