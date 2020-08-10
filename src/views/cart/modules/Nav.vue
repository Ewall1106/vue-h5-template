<template>
  <div>
    <nav-bar title="购物车" class="nav">
      <van-icon name="search" size="20" />
    </nav-bar>
    <div class="nav--placeholder" style="width:100%;height:46px" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style  scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}
</style>
