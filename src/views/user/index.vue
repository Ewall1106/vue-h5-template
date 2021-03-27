<template>
  <div class="detail">
    <Info />
    <Tools />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Info from './components/Info.vue'
import Tools from './components/Tools.vue'

export default defineComponent({
  name: 'User',
  components: {
    Info,
    Tools
  }
})
</script>
