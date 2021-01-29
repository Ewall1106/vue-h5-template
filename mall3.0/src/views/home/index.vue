<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :immediate-check="false"
      @load="onLoad"
    >
      <div class="home">
        <Banner :banner="banner" />
        <Goods />
      </div>
    </van-list>
  </van-pull-refresh>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { getBanner, getCategory, getList } from '@/api'
import Banner from './Banner.vue'
import Goods from './Goods.vue'

interface DataType {
  banner: object[]
  cateList: object[]
  pageNo: number
  pageSize: number
  loading: boolean
  finished: boolean
  refreshing: boolean
}

export default defineComponent({
  name: 'Home',
  components: {
    Banner,
    Goods
  },
  setup() {
    const data = reactive<DataType>({
      banner: [],
      cateList: [],
      pageNo: 0,
      pageSize: 4,
      loading: false,
      finished: false,
      refreshing: false
    })

    onMounted(() => {
      getBanner().then(res => {
        data.banner = res.entry
      })
      getCategory().then(res => {
        data.cateList = res.entry
      })
    })

    const getGoodsList = () => {
      getList({
        pageSize: data.pageSize,
        pageNo: data.pageNo
      }).then(res => {
        const data = res.entry
        if (data.refreshing) {
          data.list = data
          data.refreshing = false
          data.finished = false
        } else {
          data.list = [...data.list, ...data]
          if (data.length < data.pageSize) data.finished = true
        }
        data.loading = false
      })
    }

    const onRefresh = () => {
      if (!data.loading) {
        data.refreshing = true
        data.pageNo = 1
        getGoodsList()
      }
    }

    const onLoad = () => {
      if (!data.finished) {
        data.loading = true
        data.pageNo += 1
        getGoodsList()
      }
    }

    return { ...toRefs(data), onRefresh, onLoad }
  }
})
</script>

<style lang="scss" scoped>
.home {
  background: #f5f5f5;
  min-height: 100vh;
  .logo {
    display: block;
    width: 200px;
    margin: 0 auto;
    padding-top: 40px;
  }
  .menu__right {
    width: 50px;
  }
}
</style>
