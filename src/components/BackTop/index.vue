<template>
  <div class="back-top" v-show="isShow">
    <span v-scroll-to="'body'">
      <svg-icon icon-class="backtop" :width="30" :height="30"/>
    </span>
  </div>
</template>

<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

export default {
  props: {
    offsetTop: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      timer: null,
      isShow: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (this.timer) clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        const scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop
        this.isShow = scrollTop > this.offsetTop
      }, 15)
    }
  }
}
</script>

<style lang="scss" scoped>
.back-top {
  position: fixed;
  right: 24px;
  bottom: 296px;
  z-index: 999;
}
</style>
