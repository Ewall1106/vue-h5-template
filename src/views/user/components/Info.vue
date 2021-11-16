<template>
  <div class="user-info">
    <van-image width="50" height="50" :src="userInfo.avatar" />
    <div class="main">
      <div class="main__title">
        <h3 class="main__title__name">{{ userInfo.nickname }}</h3>
      </div>
      <div class="main__id">
        <span class="main__id__code">用户id：{{ userInfo.uid }}</span>
        <span style="color: #fff">
          <svg-icon icon-class="copy" :width="13" :height="13" />
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import SvgIcon from '@/components/SvgIcon'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'User',
  components: {
    SvgIcon
  },
  setup() {
    const store = useStore()
    return {
      userInfo: computed(() => store.state.user.userInfo)
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.user-info {
  display: flex;
  flex-direction: row;
  padding: 60px 24px 50px 24px;
  background: $red;
  border-radius: 100% 100% 100% 100% / 0% 0% 16% 16%;
  .main {
    margin-left: 18px;
    &__title {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 6px;
      &__name {
        font-size: $large;
        font-weight: 500;
        color: #fff;
        display: inline-block;
        max-width: 350px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: 20px;
      }
    }
    &__id {
      margin-top: 24px;
      &__code {
        font-size: $small;
        font-weight: 400;
        color: #fff;
        margin-right: 10px;
      }
    }
  }
}
</style>
