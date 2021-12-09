<template>
  <div class="product-item" @click="onClick">
    <image-pic :src="img" width="90" height="90" />
    <div class="desc">
      <div class="desc__top">
        <h3 class="desc__top__title">{{ title }}</h3>
        <p class="desc__top__info">{{ desc }}</p>
      </div>
      <div class="desc__bottom">
        <div class="desc__bottom__info">
          <p class="price">
            <span class="price--new">¥{{ price | toDecimal }}</span>
            <span class="price--old">¥{{ oldPrice | toDecimal }}</span>
          </p>
          <div class="progress">
            <van-progress
              stroke-width="6"
              :percentage="percentage"
              :show-pivot="false"
            />
          </div>
        </div>
        <div class="desc__bottom__btn">
          <van-button class="btn" size="mini">立即购买</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "productId",
    "img",
    "title",
    "desc",
    "price",
    "oldPrice",
    "percentage",
  ],
  methods: {
    onClick() {
      this.$router.push({
        path: "/detail",
        query: {
          productId: this.productId,
          t: +new Date(),
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.product-item {
  box-sizing: border-box;
  height: 240px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 0 20px;
  .desc {
    width: 510px;
    .desc__top {
      .desc__top__title {
        font-size: $small;
        color: $black;
        @include text-ellipsis;
      }
      .desc__top__info {
        min-height: 60px;
        font-size: $mini;
        color: $gray;
        margin-top: 8px;
        line-height: 30px;
        @include text-multiple-ellipsis;
      }
    }
    .desc__bottom {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      .desc__bottom__info {
        margin-top: 10px;
        .price {
          .price--new {
            color: $red;
            font-size: $small;
            margin-right: 10px;
          }
          .price--old {
            color: $gray;
            font-size: $mini;
            text-decoration: line-through;
          }
        }
        .progress {
          width: 300px;
          margin-top: 8px;
        }
      }
      .desc__bottom__btn {
        .btn {
          background: $red;
          color: #fff;
          border: none;
          font-size: $mini;
          padding: 0 10px;
        }
      }
    }
  }
}
</style>
