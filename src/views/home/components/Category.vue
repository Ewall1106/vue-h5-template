<template>
  <div class="home-category">
    <div ref="scroll" class="scroll-wrapper">
      <div class="scroll-content">
        <div
          v-for="(cate, idx) in list"
          :key="idx"
          class="scroll-item__wrapper"
        >
          <div v-for="(item, index) in cate" :key="index" class="scroll-item">
            <image-pic width="35" height="35" fill="contain" :src="item.icon" />
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

<script>
import BScroll from "@better-scroll/core";

export default {
  props: {
    cateList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      rate: 0,
      breakPoint: 0,
    };
  },
  computed: {
    list() {
      let rlt = {};
      const data = this.cateList;
      const len = this.cateList.length;
      if (len <= 5) {
        rlt = {
          prev: data,
          next: [],
        };
      } else if (len > 5 && len <= 10) {
        rlt = {
          prev: data.slice(0, 5),
          next: data.slice(5),
        };
      } else {
        const breakPoint = Math.ceil(data.length / 2);
        rlt = {
          prev: data.slice(0, breakPoint),
          next: data.slice(breakPoint),
        };
      }
      return rlt;
    },
  },
  watch: {
    cateList(val) {
      if (val.length > 5) {
        this.$nextTick(() => {
          this.init();
        });
      }
    },
  },
  beforeDestroy() {
    if (this.bs) this.bs.destroy();
  },
  methods: {
    // 初始化
    init() {
      this.bs = new BScroll(this.$refs.scroll, {
        scrollX: true,
        scrollY: false,
        click: true,
        // taps: true,
        probeType: 3, // listening scroll hook
      });

      const totalX = Math.abs(this.bs.maxScrollX);

      this._registerHooks(["scroll"], (pos) => {
        const currentX = Math.abs(pos.x);
        this.rate = `${Number((currentX / totalX) * 100).toFixed(2)}%`;
      });
    },
    _registerHooks(hookNames, handler) {
      hookNames.forEach((name) => {
        this.bs.on(name, handler);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.home-category {
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
