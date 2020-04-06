<template>
  <div class="search">
    <nav-bar v-model="value" />
    <search-words :hotList="hotList"/>
  </div>
</template>

<script>
import { getHotList } from '@/api/search'
import NavBar from './modules/NavBar'
import SearchWords from './modules/Words'

export default {
  name: 'Search',
  components: {
    NavBar,
    SearchWords
  },
  data() {
    return {
      value: '',
      hotList: []
    }
  },
  mounted() {
    this.getHot()
  },
  methods: {
    getHot() {
      getHotList().then(res => {
        this.hotList = res.entry
      })
    }
  }
}
</script>
