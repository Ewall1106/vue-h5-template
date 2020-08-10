<template>
  <div class="address-edit">
    <nav-bar title="编辑地址" />

    <van-address-edit
      :address-info="addressInfo"
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavBar from '@/components/NavBar'

import areaList from '@/utils/area.js'

export default {
  name: 'AddressEdit',
  components: {
    NavBar
  },
  data() {
    return {
      areaList,
      addressInfo: {}
    }
  },
  computed: {
    ...mapGetters(['addressList'])
  },
  mounted() {
    const { index } = this.$route.query
    this.addressInfo = this.addressList[Number(index)]
  },
  methods: {
    onSave(value) {
      console.log('保存地址', value)
      this.$toast.success('保存成功')
    },
    onDelete(value) {
      console.log('删除地址', value)
    }
  }
}
</script>

<style>
</style>
