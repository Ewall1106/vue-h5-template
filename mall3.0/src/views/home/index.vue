<template>
  <div class="home">
    <Banner :banner="banner" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { getBanner, getCategory } from '@/api'
import Banner from './Banner.vue'

interface DataType {
  banner: object[]
  cateList: object[]
}

export default defineComponent({
  name: 'Home',
  components: {
    Banner
  },
  setup() {
    const data = reactive<DataType>({
      banner: [],
      cateList: []
    })

    onMounted(() => {
      getBanner().then(res => {
        data.banner = res.entry
      })
      getCategory().then(res => {
        data.cateList = res.entry
      })
    })

    return { ...toRefs(data) }
  }
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
