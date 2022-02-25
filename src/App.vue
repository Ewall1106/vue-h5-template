<template>
  <div id="App">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" :key="key" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" :key="key" />

    <tab-bar v-if="$route.meta.showTab" />
  </div>
</template>

<script>
import TabBar from "./components/Tabbar";

export default {
  components: {
    TabBar,
  },
  computed: {
    key() {
      return this.$route.fullPath;
    },
  },
};
</script>

<style scoped>
#App {
  font-size: 16px;
}
</style>
