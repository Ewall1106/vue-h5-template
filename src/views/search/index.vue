<template>
  <div class="search">
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      clearable
      autofocus
      @search="onSearch"
      @cancel="$router.back()"
    />

    <search-words @input="onSearch($event)" />
  </div>
</template>

<script>
import SearchWords from './modules/Words'

export default {
  name: 'Search',
  components: {
    SearchWords
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onSearch(value) {
      this.$store.dispatch('search/setKey', value)
      this.$router.push({
        path: '/search/list',
        query: {
          key: value,
          t: +new Date()
        }
      })
    }
  }
}
</script>
