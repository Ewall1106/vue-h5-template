<template>
  <div class="list-item">
    <h3 class="title">
      <van-icon name="shop-o" />
      <span class="title__name">熊猫商城自营</span>
    </h3>
    <div v-for="(item,idx) in 2" :key="idx" class="item">
      <image-pic
        width="80"
        height="80"
        fit="fill"
        src="http://img3m4.ddimg.cn/32/35/23579654-1_l_3.jpg"
      />
      <div class="item__main">
        <p class="item__main__desc van-multi-ellipsis--l2">中国科幻中国科幻基石丛书：三体（套装1-3册）</p>
        <p class="item__main__attr">
          <span>1.320kg/件</span>
          <span>套装1-3册</span>
        </p>
      </div>
      <div class="item__price">
        <span class="item__price__price">¥1111.00</span>
        <span class="item__price__count">x3</span>
      </div>
    </div>
    <div class="amount">
      共<span class="amount--red">1</span>件商品 合计:
      <span class="amount--red">¥1111.10</span>
    </div>
  </div>
</template>

<script>
export default {}
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
