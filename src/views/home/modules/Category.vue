<template>
  <!-- https://www.jianshu.com/p/c7ecd50f2e52 -->
  <div class="home-category">
    <div class="scroll-wrapper" ref="scroll">
      <div class="scroll-content">
        <div class="scroll-item__wrapper" v-for="(cate,idx) in cateList" :key="idx">
          <div
            class="scroll-item"
            v-for="(item, index) in cate"
            :key="index"
            @click="onClick(item)"
          >
            <img :src="item.oneCategoryIcon" />
            <p class="text">{{item.categoryName}}</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="dot-wrapper"
      v-if="cateList && cateList.prev && cateList.prev.length > 5"
      @click="onClick()"
    >
      <div class="dot" :style="{'transform': `translateX(${rate})`,'background': `${variables.theme}`}"></div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import variables from '@/styles/variables.scss'

export default {
  props: {
    cateList: {
      type: Object
    }
  },
  data() {
    return {
      rate: 0,
      breakPoint: 0
    }
  },
  computed: {
    mainColor() {
      return 'red'
    },
    variables() {
      return variables
    }
  },
  beforeDestroy() {
    if (this.bs) this.bs.destroy()
  },
  watch: {
    cateList(val) {
      if (val && val.prev.length > 5) {
        this.$nextTick(() => {
          this.init()
        })
      }
    }
  },
  methods: {
    init() {
      this.bs = new BScroll(this.$refs.scroll, {
        scrollX: true,
        click: true,
        // taps: true,
        probeType: 3 // listening scroll hook
      })

      const totalX = Math.abs(this.bs.maxScrollX)

      this._registerHooks(['scroll'], pos => {
        const currentX = Math.abs(pos.x)
        this.rate = `${Number((currentX / totalX) * 100).toFixed(2)}%`
      })
    },
    _registerHooks(hookNames, handler) {
      hookNames.forEach(name => {
        this.bs.on(name, handler)
      })
    },
    onClick(item) {
      this.$router.push({
        path: '/pick/cate-list',
        query: {
          cateId: item.oneCategoryId,
          idx: item.index,
          t: +new Date()
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home-category {
  .scroll-wrapper {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
  }
  .scroll-content {
    display: inline-block;
    .scroll-item__wrapper {
      .scroll-item {
        font-size: 24px;
        display: inline-block;
        text-align: center;
        color: #1b1b1b;
        padding: 0 32px 24px 32px;
        img {
          display: block;
          width: 88px;
          height: 88px;
          border-radius: 50%;
          overflow: hidden;
          background: #f5f5f5;
        }
        .text {
          width: 88px;
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
      background: #f96c1d;
      transition: all 0.4s linear;
    }
  }
}
</style>
