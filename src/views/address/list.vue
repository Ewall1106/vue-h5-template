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
import { getAddressList, setAddressList } from '@/api/user'

export default {
  name: 'Address',
  components: {
    NavBar
  },
  data() {
    return {
      defaultId: '',
      list: []
    }
  },

  async mounted() {
    this.$toast.loading('加载中...')
    this.getAddressList()
  },
  methods: {
    // 获取地址
    getAddressList() {
      getAddressList().then((res) => {
        const { list = [], defaultId = '' } = res.entry
        this.defaultId = defaultId
        if (list && list.length) {
          this.list = list.map((item) => {
            return {
              id: item.addressId,
              name: item.name,
              tel: item.tel,
              address: item.fullAddress,
              isDefault: item.isDefault
            }
          })
        }
        this.$toast.clear()
      })
    },
    // 选择地址
    onSelect(item) {
      if (item.id === this.defaultId) {
        this.$router.go(-1)
        return
      }
      this.$toast.loading('加载中...')
      setAddressList({
        id: item.id
      }).then((res) => {
        this.defaultId = item.id
        this.$toast.clear()
        this.$router.go(-1)
      })
    },
    // 新增地址
    onAdd() {
      this.$router.push({
        path: '/address/edit',
        query: {
          type: 1
        }
      })
    },
    // 编辑地址
    onEdit(item, index) {
      this.$router.push({
        path: '/address/edit',
        query: {
          id: this.list[index].id,
          type: 2
        }
      })
    }
  }
}
</script>

<style>
</style>
