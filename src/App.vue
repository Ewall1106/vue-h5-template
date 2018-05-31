<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import MyHeader from '@/components/myHeader'
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,body {
  padding: 0;
  margin: 0;
}
</style>
