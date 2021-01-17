<template>
  <div class="home">
    <Banner :banner="banner" />
    <Category :cate-list="cateList" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { getBanner, getCategory } from '@/api'
import Banner from './Banner.vue'
import Category from './Category.vue'

interface DataType {
  banner: object[]
  cateList: object[]
}

export default defineComponent({
  name: 'Home',
  components: {
    Banner,
    Category
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
