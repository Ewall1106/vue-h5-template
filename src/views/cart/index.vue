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
    />
    <Tabbar :isAllSelect="isAllSelect" @input="handleAllSelect" />
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
      isAllSelect: false
    }
  },
  mounted() {
    this.getList()
  },
  watch: {
    list(newval) {
      this.isAllSelect = !newval.some(item => {
        return item.isChecked === false
      })
    }
  },
  methods: {
    getList() {
      getCartList().then(res => {
        const data = res.entry
        data.forEach(item => {
          item.isChecked = false
        })
        this.list = data
      })
    },
    handleItemSelect(playload) {
      const { val, idx } = playload
      const newval = this.list[idx]
      newval.isChecked = val
      this.$set(this.list, idx, newval)
    },
    handleAllSelect(value) {
      const data = this.list.map(item => {
        item.isChecked = value
        return item
      })
      this.list = data
    }
  }
}
</script>
