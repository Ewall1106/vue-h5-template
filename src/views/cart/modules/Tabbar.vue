<template>
  <div>
    <van-submit-bar :price="3050" button-text="提交订单" class="submit-bar">
      <van-checkbox icon-size="18px" :checked-color="variables.theme" v-model="checked">全选</van-checkbox>
    </van-submit-bar>
    <div class="submit-bar-placeholder" style="width:100%;height:50px"></div>
  </div>
</template>

<script>
import variables from '@/styles/variables.scss'

export default {
  data() {
    return {
      checked: true
    }
  },
  computed: {
    variables() {
      return variables
    }
  }
}
</script>

<style scoped>
.submit-bar {
  box-shadow: 0px -2px 10px 0px rgba(0, 0, 0, 0.08);
}
</style>
