
<template>
  <div class="skeleton">
    <ContentLoader width="325" height="600">
      <rect x="10" y="8" rx="3" ry="3" width="305" height="30" />

      <rect x="10" y="45" rx="3" ry="3" width="305" height="340" />

      <rect x="10" y="400" rx="3" ry="3" width="305" height="20" />

      <rect x="10" y="425" rx="3" ry="3" width="305" height="35" />

      <rect x="10" y="465" rx="3" ry="3" width="305" height="20" />

      <rect x="10" y="500" rx="3" ry="3" width="305" height="30" />

      <rect x="10" y="540" rx="3" ry="3" width="305" height="30" />

      <rect x="10" y="580" rx="3" ry="3" width="305" height="30" />
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
  bottom: 100px;
  z-index: 999;
  overflow: hidden;
  background: #fff;
}
</style>
