<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" :key="key" />
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive" :key="key" />
  </div>
</template>

<script>
export default {
  computed: {
    key() {
      return this.$route.fullPath;
    },
  },
};
</script>

<style></style>
