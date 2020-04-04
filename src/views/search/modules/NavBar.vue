<template>
  <div class="search-nav-bar">
    <van-icon size="16" name="arrow-left" style="padding:12px 0 12px 12px" @click="$router.back()" />
    <van-search
      style="width:100%"
      v-model="keyword"
      placeholder="请输入搜索关键词"
      show-action
      clearable
      autofocus
      @search="onSearch"
      @cancel="$router.back()"
    >
      <template #action>
        <van-button round type="primary" size="mini" :color="variables.red" @click="onSearch">搜索</van-button>
      </template>
    </van-search>
  </div>
</template>

<script>
import variables from '@/styles/variables.scss'

export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    variables() {
      return variables
    },
    keyword: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    onSearch() {
      const key = this.keyword.trim()
      if (!key) {
        this.$toast('请输入要搜索内容')
        return
      }
      this.$store.dispatch('search/setKey', key)
      this.$router.push({
        path: '/search/list',
        query: {
          key,
          t: +new Date()
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.search-nav-bar {
  display: flex;
  align-items: center;
}
</style>
