
<template>
  <div class="skeleton">
    <ContentLoader width="325" height="600">
      <rect x="10" y="5" rx="3" ry="3" width="305" height="30" />

      <rect x="10" y="42" rx="3" ry="3" width="305" height="80" />

      <rect x="10" y="130" rx="3" ry="3" width="305" height="80" />

      <rect x="10" y="220" rx="3" ry="3" width="305" height="80" />

      <rect x="10" y="310" rx="3" ry="3" width="305" height="80" />

      <rect x="10" y="400" rx="3" ry="3" width="305" height="20" />
      <rect x="60" y="435" rx="3" ry="3" width="205" height="10" />
      <rect x="60" y="460" rx="3" ry="3" width="205" height="10" />
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  overflow: hidden;
  background: #fff;
}
</style>
