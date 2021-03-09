import { reactive, toRefs } from 'vue'
import { getList, ListResponse } from '@/api'

export interface ListInfoType {
  pageNo: number
  pageSize: number
  goodsList: ListResponse
  loading: boolean
  finished: boolean
  refreshing: boolean
}

export const useListEffect = () => {
  const info = reactive<ListInfoType>({
    pageNo: 1,
    pageSize: 4,
    goodsList: [],
    loading: false,
    finished: false,
    refreshing: false
  })

  const requestGoodsList = async () => {
    const res = await getList({
      pageSize: info.pageSize,
      pageNo: info.pageNo
    })
    const data = res.data
    info.loading = false
    if (info.refreshing) {
      info.goodsList = data
      info.refreshing = false
      info.finished = false
    } else {
      info.goodsList = [...info.goodsList, ...data]
      if (data.length < info.pageSize) info.finished = true
    }
  }

  const onLoad = () => {
    if (!info.finished) {
      info.loading = true
      info.pageNo += 1
      requestGoodsList()
    }
  }

  const onRefresh = () => {
    if (!info.loading) {
      info.refreshing = true
      info.pageNo = 1
      requestGoodsList()
    }
  }

  return { ...toRefs(info), requestGoodsList, onLoad, onRefresh }
}
