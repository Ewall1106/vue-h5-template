<template>
  <div class="address-list">
    <nav-bar title="我的地址"/>

    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'Address',
  components: {
    NavBar
  },
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ]
    }
  },
  methods: {
    onAdd() {
      this.$router.push({
        path: '/address/edit'
      })
    },
    onEdit(item, index) {
      // Toast('编辑地址:' + index)
    }
  }
}
</script>

<style>
</style>
