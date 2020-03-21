<template>
  <div class="home-session">
    <Title name="精选专场" />
    <div class="main">
      <session-item style="margin-top:10px" v-for="(item,idx) in 3" :key="idx" />
    </div>
  </div>
</template>

<script>
import Title from './Title'
import SessionItem from '@/components/SessionItem'

export default {
  components: {
    Title,
    SessionItem
  }
}
</script>

<style lang="scss" scoped>
</style>
