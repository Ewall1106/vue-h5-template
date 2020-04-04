<template>
  <div class="search-list">
    <nav-bar v-model="value" />
    <filter-bar />

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onReachBottom"
      :immediate-check="false"
    >
      <div class="main">
        <goods-item
          v-for="(item,idx) in list"
          :key="idx"
          :img="item.img"
          :title="item.title"
          :desc="item.desc"
          :price="item.price"
          :discount="item.discount"
        />
      </div>
    </van-list>
  </div>
</template>

<script>
import { getList } from '@/api/home'
import NavBar from './modules/NavBar'
import FilterBar from './modules/FilterBar'
import GoodsItem from '@/components/GoodsItem'

export default {
  name: 'SearchList',
  components: {
    NavBar,
    FilterBar,
    GoodsItem
  },
  data() {
    return {
      value: '',
      list: [],
      pageSize: 1,
      pageNum: 8,
      loading: false,
      finished: false,
      isSkeletonShow: true
    }
  },
  mounted() {
    const { key } = this.$route.query
    this.value = key
    this.getList()
  },
  methods: {
    onReachBottom() {},
    getList() {
      getList({
        pageSize: this.pageSize,
        pageNum: this.pageNum
      }).then(res => {
        const data = res.entry
        this.list = [...this.list, ...data]
        this.loading = false
        if (data.length < this.pageNum && this.list.length > 0) {
          this.finished = true
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.search-list {
  .main {
    background: #fff;
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
