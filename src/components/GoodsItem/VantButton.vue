<template>
  <van-button type="warning">{{ content }}</van-button>
</template>

<script>
import { Button } from 'vant'

export default {
  name: 'VantButton',
  props: ['content'],
  components: {
    VanButton: Button
  }
}
</script>
