<template>
  <div class="goodsItem">
    <img class="goods_img" src="//a4.vimage1.com/upload/merchandise/pdcvis/2018/04/19/125/36eed2e5-e324-4bc0-99e8-8c28cd03bc18.jpg" />
    <div class="goods_desc">时尚玛丽珍2018新品花水钻百搭如熙女鞋</div>
    <div class="goods_price">
      <span class="price_now">¥99.9</span>
      <span class="discount">¥999.9</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsItem",
  props: {
    message: {
      type: String,
      default: "hello"
    }
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {}
};
</script>

<style lang="less" scoped>
@import "../assets/styles/variables.less";
.goodsItem {
  width: 4.746667rem;
  .goods_img {
    display: block;
    width: 100%;
    height: 6rem;
  }
  .goods_desc {
    padding: .133333rem .133333rem;
    font-size: @sizeS;
    color: @fontColor1;;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .goods_price {
    padding: 0 .133333rem;
    // display: flex;
    // flex-direction: row;
    // justify-content: space-between;
    .price_now {
      font-size: @sizeXL;
      color: @themeColor;
    }
    .discount {
      font-size: @sizeM;
      color: @fontColor2;
      text-decoration: line-through;
      margin-left: .213333rem;
    }
  }
}
</style>