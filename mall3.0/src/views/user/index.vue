<template>
  <div class="detail">
    <Info />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Info from './components/Info.vue'

export default defineComponent({
  name: 'User',
  components: {
    Info
  }
})
</script>

<style lang="scss" scoped>
.detail {
  // min-height: 100vh;
  background: #f5f5f5;
}
</style>
