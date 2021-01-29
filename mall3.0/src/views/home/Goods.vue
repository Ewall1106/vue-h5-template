<template>
  <div class="goods-container">
    <div class="goods-item" @click="onNavigate">
      <div class="pic">
        <van-image
          fill="cover"
          align="center"
          width="90"
          height="100"
          :src="img"
        />
      </div>
      <p class="title">{{ title }}</p>
      <p class="desc">{{ desc }}</p>
      <div class="num">
        <!-- <span class="num__now">¥{{ price | toDecimal }}</span>
        <span class="num__old">¥{{ oldPrice | toDecimal }}</span> -->
      </div>
      <div class="btn-wrapper">
        <van-button class="btn" size="small">立即购买</van-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  props: {
    id: {
      type: Number,
      requied: true
    }
  },
  setup(props) {
    const router = useRouter()

    const onNavigate = () => {
      router.push({
        path: '/detail',
        query: {
          productId: props.id
        }
      })
    }

    return { onNavigate }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.goods-item {
  position: relative;
  width: 360px;
  overflow: hidden;
  .pic {
    display: block;
    padding: 14px;
    background: #f5f5f5;
  }
  .title {
    padding: 14px;
    font-size: $small;
    color: $black;
    text-align: center;
    @include text-ellipsis;
  }
  .desc {
    padding: 14px;
    padding-top: 0;
    font-size: $small;
    color: $gray;
    text-align: center;
    @include text-ellipsis;
  }
  .num {
    padding-bottom: 14px;
    text-align: center;
    .num__now {
      font-family: DIN-Medium, DIN;
      font-size: 34px;
      font-weight: 500;
      color: $red;
      margin-right: 10px;
    }
    .num__old {
      font-family: DIN-Medium, DIN;
      font-size: 24px;
      font-weight: 400;
      color: $gray;
      text-decoration: line-through;
      margin-right: 10px;
    }
  }
  .btn-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 24px;
    .btn {
      background: $red;
      color: #fff;
      border: none;
    }
  }
}
</style>
