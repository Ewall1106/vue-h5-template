<template>
  <div class="cart">
    <Nav />
    <Item
      v-for="(item, idx) in list"
      :key="item.skuId"
      :index="idx"
      :info="item"
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
    <van-empty v-if="isEmpty" description="购物车里没有内容" />
  </div>
</template>

<script>
import Nav from './modules/Nav'
import Item from './modules/Item'
import Tabbar from './modules/Tabbar'
import Skeleton from './modules/Skeleton'

import { getCartList, deleteCart } from '@/api/cart'

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
      isEmpty: false,
      isAllSelect: false,
      isSkeletonShow: true
    }
  },
  watch: {
    list(newval) {
      if (newval && newval.length > 0) {
        let num = 0
        newval.forEach((item) => {
          if (item.isChecked) num += item.price
        })
        this.isAllSelect = newval.every((item) => {
          return item.isChecked === true
        })
        this.amount = num
      }
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
        this.list = data || []
        if (this.list.length <= 0) this.isEmpty = true
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
    handleDelete(idx, skuId) {
      this.$toast.loading({
        message: '加载中...',
        overlay: true,
        duration: 0,
        forbidClick: true
      })

      deleteCart({
        skuId
      }).then((res) => {
        this.list.splice(idx, 1)
        this.$toast.clear()
        this.$toast.success('删除成功')
      })
    },
    // 提交订单
    handleSubmit() {
      const data = this.list.reduce((memo, current, index, array) => {
        if (current.isChecked) {
          memo.push({
            id: current.skuId,
            productId: current.productId,
            selectedNum: current.num
          })
        }
        return memo
      }, [])

      if (!data.length) {
        this.$toast('请至少勾选一件商品')
        return
      }

      this.$store.dispatch('order/setIds', data).then((res) => {
        this.$router.push({
          path: '/order/confirm'
        })
      })
    }
  }
}
</script>
