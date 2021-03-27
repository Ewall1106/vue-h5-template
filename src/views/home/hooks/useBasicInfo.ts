import { reactive, toRefs } from 'vue'
import { getBanner, getCategory, BannerResponse, CategoryResponse } from '@/api'

export interface BasicInfoType {
  banner: BannerResponse
  cateList: CategoryResponse
}

export const useBasicInfo = () => {
  const basic = reactive<BasicInfoType>({
    banner: [],
    cateList: []
  })

  const requestBanner = async () => {
    const res = await getBanner()
    basic.banner = res.data
  }
  const requestCategory = async () => {
    const res = await getCategory()
    basic.cateList = res.data
  }

  return { ...toRefs(basic), requestBanner, requestCategory }
}
