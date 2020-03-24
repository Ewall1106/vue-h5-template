<template>
  <div class="home-session">
    <Title name="精选专场" />
    <div class="main">
      <session-item
        style="margin-bottom:10px"
        v-for="(item,idx) in sessionList"
        :key="idx"
        :img="item.img"
        :title="item.title"
        :tagnum="item.tagnum"
        :discount="item.discount"
        :time="item.time"
      />
    </div>
  </div>
</template>

<script>
import Title from './Title'
import SessionItem from '@/components/SessionItem'

export default {
  props: ['sessionList'],
  components: {
    Title,
    SessionItem
  }
}
</script>

<style lang="scss" scoped>
</style>
