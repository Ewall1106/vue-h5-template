<template>
  <div class="search">
    <nav-bar v-model="value"/>
    <search-words />
  </div>
</template>

<script>
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
      value: ''
    }
  },
  methods: {}
}
</script>
