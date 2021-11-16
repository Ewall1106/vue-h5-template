<template>
  <van-nav-bar
    title="图标组件"
    left-text="返回"
    left-arrow
    @click-left="$router.back()"
  />
  <van-button>
    <span style="color: red">
      <svg-icon icon-class="copy" :width="20" :height="20" />
    </span>
  </van-button>
  <van-button>
    <svg-icon icon-class="qq" :width="20" :height="20" />
  </van-button>
  <van-button>
    <span style="color: green">
      <svg-icon icon-class="wechat" :width="20" :height="20" />
    </span>
  </van-button>
  <van-button>
    <svg-icon icon-class="star" :width="20" :height="20" />
  </van-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SvgIcon from '@/components/SvgIcon'

export default defineComponent({
  components: {
    SvgIcon
  }
})
</script>
