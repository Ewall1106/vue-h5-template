<template>
  <div class="user-tools">
    <van-cell title="Git仓库" is-link url="https://github.com/Ewall1106/mall" />
    <van-cell title="文档说明" is-link url="https://docs.xwhx.top/mall/" />
    <!-- <van-cell title="我的地址" is-link to="/address" /> -->
    <van-cell title="退出登录" is-link @click="loginOut" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { Dialog, Notify } from 'vant'

export default defineComponent({
  name: 'User',
  setup() {
    const store = useStore()
    const router = useRouter()

    const loginOut = () => {
      Dialog.confirm({
        message: '确认退出登录吗？'
      }).then(() => {
        store.dispatch('user/SING_OUT').then(() => {
          Notify({ type: 'success', message: '退出登录成功' })
          router.replace('/')
        })
      })
    }

    return {
      loginOut
    }
  }
})
</script>
<style lang="scss" scoped>
.user-tools {
  width: 702px;
  background: rgba(255, 255, 255, 1);
  margin: 0 auto;
  margin-top: 24px;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.09);
  border-radius: 24px;
  overflow: hidden;
}
</style>
