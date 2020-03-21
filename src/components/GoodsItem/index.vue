<template>
  <div class="goods-item">
    <div class="pic">
      <image-pic
        align="center"
        width="90"
        height="125"
        src="https://img1.doubanio.com/view/subject/l/public/s4575849.jpg"
      />
    </div>
    <p class="title">张三李四王五</p>
    <p class="desc">张三李四王五</p>
    <div class="num">
      <span class="num__now">¥1111</span>
      <span class="num__old">¥111</span>
    </div>
    <div class="btn-wrapper">
      <van-button class="btn" size="small">立即购买</van-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    desc: {
      type: String
    },
    price: {
      type: null
    },
    discount: {
      type: null
    }
  },
  methods: {
    onNavigate(pitemId) {
      this.$router.push({
        path: '/detail',
        query: {
          pitemId
        }
      })
    },
    onAddCart(pitemId) {
      this.$emit('onEmitAddCart', pitemId)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

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
    font-size: $normal;
    color: $black;
    text-align: center;
    @include text-ellipsis;
  }
  .desc {
    padding-bottom: 14px;
    font-size: 28px;
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
  }
  .btn {
    background: $red;
    color: #fff;
    border: none;
  }
}
</style>
