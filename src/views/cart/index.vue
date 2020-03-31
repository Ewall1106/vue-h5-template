<template>
  <div class="cart">
    <Nav />
    <Item
      v-for="(item,idx) in list"
      :key="idx"
      :index="idx"
      :num="item.num"
      :thumb="item.thumb"
      :title="item.title"
      :desc="item.desc"
      :tag="item.tag"
      :tags="item.tags"
      :originPrice="item.originPrice"
      :price="item.price"
      :isChecked="item.isChecked"
      @input="handleItemSelect"
      @handleDelete="handleDelete"
    />
    <Tabbar :amount="amount" :value="isAllSelect" @input="handleAllSelect" />
  </div>
</template>

<script>
import { getCartList } from '@/api/cart'
import Nav from './modules/Nav'
import Item from './modules/Item'
import Tabbar from './modules/Tabbar'

export default {
  name: 'Cart',
  components: {
    Nav,
    Item,
    Tabbar
  },
  data() {
    return {
      list: [],
      isAllSelect: false,
      amount: 0
    }
  },
  mounted() {
    this.getList()
  },
  watch: {
    list(newval) {
      let num = 0
      newval.forEach(item => {
        if (item.isChecked) num += item.price
      })
      this.isAllSelect = newval.every(item => {
        return item.isChecked === true
      })
      this.amount = num
    }
  },
  methods: {
    // get list
    getList() {
      getCartList().then(res => {
        const data = res.entry
        data.forEach(item => {
          item.isChecked = false
        })
        this.list = data
      })
    },
    // single select
    handleItemSelect(playload) {
      const { val, idx } = playload
      const newval = this.list[idx]
      newval.isChecked = val
      this.$set(this.list, idx, newval)
    },
    // all select
    handleAllSelect(value) {
      const data = this.list.map(item => {
        item.isChecked = value
        return item
      })
      this.list = data
    },
    // item delete
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
    }
  }
}
</script>
