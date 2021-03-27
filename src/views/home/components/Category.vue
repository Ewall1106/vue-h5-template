<template>
  <div class="category">
    <div ref="root" class="scroll-wrapper">
      <div class="scroll-content">
        <div
          v-for="(cate, idx) in list"
          :key="idx"
          class="scroll-item__wrapper"
        >
          <div v-for="(item, index) in cate" :key="index" class="scroll-item">
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
import { defineComponent, PropType, toRef, nextTick, watch } from 'vue'
import { useScrollEffect } from '../hooks/useScrollEffect'

export default defineComponent({
  props: {
    cateList: {
      type: Array as PropType<string[]>,
      required: true,
      default: () => []
    }
  },
  setup(props) {
    const { list, root, rate, init } = useScrollEffect(toRef(props, 'cateList'))

    watch(
      () => props.cateList,
      () => {
        nextTick(() => {
          init()
        })
      }
    )

    return {
      list,
      root,
      rate
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.category {
  padding: 24px 0;
  background: #fff;
  .scroll-wrapper {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
  }
  .scroll-content {
    display: inline-block;
    .scroll-item__wrapper {
      .scroll-item {
        font-size: $mini;
        display: inline-block;
        text-align: center;
        color: $black;
        padding: 0 25px 24px 25px;
        img {
          display: block;
          width: 88px;
          height: 88px;
          border-radius: 50%;
          overflow: hidden;
          background: #f5f5f5;
          margin: 0 auto;
        }
        .text {
          width: 100px;
          margin-top: 12px;
        }
      }
    }
  }
  .dot-wrapper {
    width: 80px;
    height: 4px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin: 0 auto;
    overflow: hidden;
    .dot {
      box-sizing: border-box;
      width: 40px;
      height: 4px;
      transition: all 0.4s linear;
      background: $red;
    }
  }
}
</style>
