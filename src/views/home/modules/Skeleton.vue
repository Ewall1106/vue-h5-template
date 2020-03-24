
<template>
  <div class="skeleton">
    <ContentLoader width="325" height="600">
      <rect x="10" y="8" rx="3" ry="3" width="305" height="30" />

      <rect x="10" y="45" rx="3" ry="3" width="305" height="130" />

      <circle cx="35" cy="210" r="25" />
      <circle cx="35" cy="280" r="25" />
      <circle cx="100" cy="210" r="25" />
      <circle cx="100" cy="280" r="25" />
      <circle cx="165" cy="210" r="25" />
      <circle cx="165" cy="280" r="25" />
      <circle cx="230" cy="210" r="25" />
      <circle cx="295" cy="210" r="25" />
      <circle cx="230" cy="280" r="25" />
      <circle cx="295" cy="280" r="25" />

      <rect x="100" y="340" rx="3" ry="3" width="120" height="20" />

      <rect x="10" y="370" rx="3" ry="3" width="305" height="130" />

      <rect x="10" y="510" rx="3" ry="3" width="305" height="10" />
      <rect x="10" y="540" rx="3" ry="3" width="305" height="10" />
      <rect x="10" y="570" rx="3" ry="3" width="305" height="10" />
    </ContentLoader>
  </div>
</template>

<script>
// https://github.com/egoist/vue-content-loader
import { ContentLoader } from 'vue-content-loader'

export default {
  components: { ContentLoader }
}
</script>

<style lang="scss" scoped>
.skeleton {
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 100px;
  z-index: 999;
  overflow: hidden;
}
</style>
