<template>
  <div class="address-list">
    <nav-bar title="我的地址" />

    <van-address-list
      v-model="defaultId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"
    />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import { getAddress } from '@/api/address'

export default {
  name: 'Address',
  components: {
    NavBar
  },
  data() {
    return {
      defaultId: '1',
      list: []
    }
  },
  mounted() {
    this.getAddress()
  },
  methods: {
    getAddress() {
      getAddress().then(res => {
        this.list = res.entry
      })
    },
    onSelect(item, index) {
      this.$store.commit('address/SET_ADDRESS', item)
      this.$toast.success('选择成功')
      this.$router.go(-1)
    },
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
