<template>
  <div class="home-category">
    <div ref="scroll" class="scroll-wrapper">
      <div class="scroll-content">
        <div
          v-for="(cate, idx) in list"
          :key="idx"
          class="scroll-item__wrapper"
        >
          <div
            v-for="(item, index) in cate"
            :key="index"
            class="scroll-item"
            @click="onNavigate()"
          >
            <van-image width="35" height="35" fill="contain" :src="item.icon" />
            <p class="text">{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="list && list.prev && list.prev.length > 5" class="dot-wrapper">
      <div class="dot" :style="{ transform: `translateX(${rate})` }" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, ref, PropType, nextTick } from 'vue'
import BScroll from '@better-scroll/core'

export default defineComponent({
  props: {
    cateList: {
      type: Array as PropType<string[]>,
      required: true,
      default: () => []
    }
  },
  setup(props) {
    let bs
    let rate = ref('0')
    const list = computed(() => {
      let rlt
      const data = props.cateList
      const len = props.cateList.length
      if (len <= 5) {
        rlt = {
          prev: data,
          next: []
        }
      } else if (len > 5 && len <= 10) {
        rlt = {
          prev: data.slice(0, 5),
          next: data.slice(5)
        }
      } else {
        const breakPoint = Math.ceil(data.length / 2)
        rlt = {
          prev: data.slice(0, breakPoint),
          next: data.slice(breakPoint)
        }
      }
      return rlt
    })

    // 初始化
    const _registerHooks = (hookNames, handler) => {
      hookNames.forEach(name => {
        this.bs.on(name, handler)
      })
    }
    const init = () => {
      bs = new BScroll(this.$refs.scroll, {
        scrollX: true,
        scrollY: false,
        click: true,
        // taps: true,
        probeType: 3 // listening scroll hook
      })

      const totalX = Math.abs(bs.maxScrollX)

      _registerHooks(['scroll'], pos => {
        const currentX = Math.abs(pos.x)
        rate = `${Number((currentX / totalX) * 100).toFixed(2)}%`
      })
    }

    watch(props.cateList, value => {
      if (value.length > 5) {
        nextTick(() => {
          init()
        })
      }
    })

    return { list }
  }
})
</script>
