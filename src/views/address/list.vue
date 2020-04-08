<template>
  <div class="address-list">
    <nav-bar title="我的地址" />

    <van-address-list
      v-model="id"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavBar from '@/components/NavBar'

export default {
  name: 'Address',
  components: {
    NavBar
  },
  data() {
    return {
      list: []
    }
  },
  computed: {
    // TODO:这里写的可能有点冗杂了，如果有接口的话直接调就完事，这里是为了演示而演示。
    ...mapGetters(['defaultId']),
    id: {
      get() {
        return this.defaultId
      },
      set(val) {
        this.$store.commit('address/SET_DEFAULT_ID', val)
      }
    }
  },
  async mounted() {
    this.list = await this.$store.dispatch('address/getList')
  },
  methods: {
    onSelect(item, index) {
      this.$store.commit('address/SET_SELECTED_ADDRESS', item)
      this.$router.go(-1)
    },
    onAdd() {
      this.$router.push({
        path: '/address/edit'
      })
    },
    onEdit(item, index) {
      this.$toast('编辑地址:' + index)
      this.$router.push({
        path: '/address/edit',
        query: {
          index
        }
      })
    }
  }
}
</script>

<style>
</style>
