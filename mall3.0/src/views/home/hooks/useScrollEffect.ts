import BScroll from '@better-scroll/core'
import { computed, ref, Ref } from 'vue'

export const useScrollEffect = (cateList: Ref<string[]>) => {
  const root = ref<HTMLDivElement | string>('')
  const rate = ref<string>('0')

  const list = computed(() => {
    const value = cateList.value
    const breakPoint = Math.ceil(value.length / 2)
    return {
      prev: value.slice(0, breakPoint),
      next: value.slice(breakPoint)
    }
  })

  const init = () => {
    const bs = new BScroll(root.value, {
      scrollX: true,
      scrollY: false,
      click: true,
      probeType: 3 // listening scroll hook
    })
    const totalX = Math.abs(bs.maxScrollX)
    bs.on('scrollStart', () => {
      // scrollStart
    })
    bs.on('scroll', (pos: { x: number }) => {
      const currentX = Math.abs(pos.x)
      rate.value = `${Number((currentX / totalX) * 100).toFixed(2)}%`
    })
    bs.on('scrollEnd', () => {
      // scrollingEnd
    })
  }

  return { list, init, root, rate }
}
