<template>
  <div class="cart">
    <Nav />
    <Item
      v-for="(item, idx) in list"
      :key="idx"
      :index="idx"
      :num="item.num"
      :thumb="item.img"
      :title="item.title"
      :desc="item.desc"
      :tag="item.tag"
      :tags="item.tags"
      :old-price="item.oldPrice"
      :price="item.price"
      :is-checked="item.isChecked"
      @input="handleItemSelect"
      @handleDelete="handleDelete"
    />
    <Tabbar
      :amount="amount"
      :value="isAllSelect"
      @input="handleAllSelect"
      @handleSubmit="handleSubmit"
    />
    <Skeleton v-if="isSkeletonShow" />
  </div>
</template>

<script>
import Nav from './modules/Nav'
import Item from './modules/Item'
import Tabbar from './modules/Tabbar'
import Skeleton from './modules/Skeleton'

import { getCartList } from '@/api/cart'

export default {
  name: 'Cart',
  components: {
    Nav,
    Item,
    Tabbar,
    Skeleton
  },
  data() {
    return {
      list: [],
      amount: 0,
      isAllSelect: false,
      isSkeletonShow: true
    }
  },
  watch: {
    list(newval) {
      let num = 0
      newval.forEach((item) => {
        if (item.isChecked) num += item.price
      })
      this.isAllSelect = newval.every((item) => {
        return item.isChecked === true
      })
      this.amount = num
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    // 获取列表
    getList() {
      getCartList().then((res) => {
        const data = res.entry
        data.forEach((item) => {
          item.isChecked = false
        })
        this.list = data
        this.isSkeletonShow = false
      })
    },
    // 单选
    handleItemSelect(playload) {
      const { val, idx } = playload
      const newval = this.list[idx]
      newval.isChecked = val
      this.$set(this.list, idx, newval)
    },
    // 全选
    handleAllSelect(value) {
      const data = this.list.map((item) => {
        item.isChecked = value
        return item
      })
      this.list = data
    },
    // 删除
    handleDelete(idx) {
      this.$toast.loading({
        message: '加载中...',
        overlay: true,
        duration: 0,
        forbidClick: true
      })

      // 模拟删除
      let second = 3
      const timer = setInterval(() => {
        second--
        if (!second) {
          clearInterval(timer)
          this.$toast.clear()
          this.list.splice(idx, 1)
          this.$toast.success('删除成功')
        }
      }, 1000)
    },
    // 提交订单
    handleSubmit() {
      // this.$store.dispatch('search/setKey', key)
      this.$router.push({
        path: '/order/confirm'
      })
    }
  }
}
</script>
