<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" :key="key" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" :key="key" />

    <tabbar v-if="$route.meta.showTab" />
  </div>
</template>

<script>
import Tabbar from "./components/Tabbar";

export default {
  components: {
    Tabbar,
  },
  computed: {
    key() {
      return this.$route.fullPath;
    },
  },
};
</script>
