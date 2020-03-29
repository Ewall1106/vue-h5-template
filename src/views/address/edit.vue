<template>
  <div class="address-edit">
    <nav-bar title="编辑地址" />

    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import areaList from '@/utils/area.js'
import NavBar from '@/components/NavBar'

export default {
  name: 'AddressEdit',
  data() {
    return {
      areaList,
      searchResult: []
    }
  },
  components: {
    NavBar
  },
  methods: {
    onSave() {
      // Toast('save')
    },
    onDelete() {
      // Toast('delete')
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }
        ]
      } else {
        this.searchResult = []
      }
    }
  }
}
</script>

<style>
</style>
