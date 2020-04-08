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
  data() {
    return {
      areaList,
      addressInfo: {}
    }
  },
  components: {
    NavBar
  },
  computed: {
    ...mapGetters(['addressList'])
  },
  mounted() {
    const { index } = this.$route.query
    this.addressInfo = this.addressList[Number(index)]
    console.log('adfasd', this.addressList, this.addressInfo)
  },
  methods: {
    onSave(value) {
      console.log('>>>>', value)
    },
    onDelete() {
      // Toast('delete')
    }
  }
}
</script>

<style>
</style>
