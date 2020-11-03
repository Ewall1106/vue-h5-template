<template>
  <div class="list-item">
    <h3 class="title">
      <van-icon name="shop-o" />
      <span class="title__name">熊猫商城自营</span>
    </h3>
    <div v-for="item in list" :key="item.skuId" class="item">
      <image-pic width="80" height="80" fit="fill" :src="item.imgUrl" />
      <div class="item__main">
        <p class="item__main__desc van-multi-ellipsis--l2">
          {{ item.title }}
        </p>
        <p class="item__main__attr">
          <span v-for="(attr, idx) in item.skuAttr" :key="idx">{{ attr }}</span>
        </p>
      </div>
      <div class="item__price">
        <span class="item__price__price">¥{{ item.price }}</span>
        <span class="item__price__count">x{{ item.selectedNum }}</span>
      </div>
    </div>
    <div class="amount">
      共<span class="amount--red">{{ amountObj.num }}</span>件商品 合计:
      <span class="amount--red">¥{{ amountObj.price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    // 店铺维度
    amountObj() {
      let num = 0; let price = 0
      this.list.forEach(item => {
        num += item.selectedNum
        price += (item.selectedNum * item.price)
      })
      return {
        num,
        price
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.list-item {
  box-sizing: border-box;
  width: 100%;
  background: #fff;
  padding: 24px;
  margin-top: 24px;
  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    .title__name {
      margin-left: 18px;
      font-size: $small;
      color: $black;
    }
  }
  .item {
    position: relative;
    margin-top: 34px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .item__main {
      box-sizing: border-box;
      flex-grow: 1;
      height: 160px;
      display: flex;
      flex-direction: column;
      padding: 0 24px;
      .item__main__desc {
        line-height: 30px;
        font-size: $mini;
        color: $black;
        text-align: justify;
      }
      .item__main__attr {
        margin-top: 12px;
        span {
          display: inline-block;
          background: #f7f7f7;
          border-radius: 6px;
          padding: 6px;
          font-size: $mini;
          color: $gray;
          margin-right: 6px;
        }
      }
      .item__main__id {
        margin-top: 12px;
        font-size: $mini;
        color: $gray;
      }
    }
    .item__price {
      width: 100px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .item__price__price {
        font-size: $mini;
        color: $black;
      }
      .item__price__count {
        font-size: $mini;
        color: $gray;
        margin-top: 12px;
      }
    }
  }
  .amount {
    margin-top: 14px;
    text-align: right;
    font-size: $small;
    color: $black;
    .amount--red {
      color: $red;
    }
  }
}
</style>
