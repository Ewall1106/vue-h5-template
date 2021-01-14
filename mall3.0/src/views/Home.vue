<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <van-button plain hairline type="primary">细边框按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />

    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { getBanner } from '@/api'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup() {
    const data = reactive({
      banner: []
    })

    onMounted(() => {
      getBanner().then((res: any) => {
        data.banner = res.entry
      })
    })
  }
})
</script>
