<template>
  <div class="card__item">
    <van-checkbox
      icon-size="18px"
      :checked-color="variables.theme"
      v-model="checked"
      style="padding:0 10px 0 16px"
    ></van-checkbox>
    <van-swipe-cell style="width:100%">
      <van-card
        num="2"
        tag="标签"
        price="2.00"
        desc="描萨芬多多多多多多多多多多多多多多多多多多多多多述信息"
        title="商阿大发送到是都发到付品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        origin-price="10.00"
      >
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </template>
      </van-card>
      <template #right>
        <van-button square text="删除" type="danger" style="height:100%" />
      </template>
    </van-swipe-cell>
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

<style lang="scss" scoped>
.card__item {
  display: flex;
  flex-direction: row;
  margin-bottom: 14px;
}
</style>
