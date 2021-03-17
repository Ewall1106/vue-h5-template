<template>
  <div class="user-info">
    <image-pic width="50" height="50" :src="userInfo.avatar" />
    <div class="main">
      <div class="main__title">
        <h3 class="name">{{ userInfo.nickname }}</h3>
      </div>
      <div class="main__id" @click="doCopy(userInfo.uid)">
        <span class="code">用户id：{{ userInfo.uid }}</span>
        <span style="color: #fff">
          <svg-icon icon-class="copy" :width="13" :height="13" />
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'User',
  components: {
    Info
  },
  setup() {}
})
</script>
