<template>
  <div id="app">
    <router-view />
    <tabbar />
  </div>
</template>

<script>
import Tabbar from './components/Tabbar'
export default {
  components: {
    Tabbar
  }
}
</script>
