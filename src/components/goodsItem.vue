<template>
  <div class="goodsItem">
    <img class="goods_img" :src="img" />
    <div class="goods_desc">{{desc}}</div>
    <div class="goods_price">
      <span class="price_now">¥{{price}}</span>
      <span class="discount">¥{{discount}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsItem",
  props: {
    img: String,
    desc: {
      type: String,
      default: "请输入商品描述"
    },
    price: {
      type: null,
      default: "商品价格"
    },
    discount: {
      type: null,
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
    padding: 0.133333rem 0.133333rem;
    font-size: @sizeS;
    color: @fontColor1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .goods_price {
    padding: 0 0.133333rem;
    // display: flex;
    // flex-direction: row;
    // justify-content: space-between;
    .price_now {
      font-size: @sizeL;
      color: @themeColor;
    }
    .discount {
      font-size: @sizeM;
      color: @fontColor2;
      text-decoration: line-through;
      margin-left: 0.213333rem;
    }
  }
}
</style>