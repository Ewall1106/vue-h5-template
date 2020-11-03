<template>
  <div class="header">
    <div class="header__title">
      <van-icon name="checked" color="#fff" size="25" />
      <span class="header__title__text">支付成功</span>
    </div>

    <p class="header__desc">我们将尽快为您配货~</p>

    <div class="header__btn">
      <router-link
        tag="p"
        class="header__btn__item"
        to="/"
      >返回首页</router-link>
      <router-link
        tag="p"
        class="header__btn__item"
        to="/order/detail"
      >查看订单</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.header {
  width: 100%;
  height: 390px;
  background: $red;
  .header__title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 92px;
    .header__title__text {
      font-size: 42px;
      font-weight: 500;
      color: #fff;
      margin-left: 12px;
    }
  }
  .header__desc {
    font-size: 26px;
    color: #fff;
    margin-top: 27px;
    text-align: center;
    opacity: 0.9;
  }
  .header__btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 48px;
    .header__btn__item {
      width: 180px;
      height: 60px;
      border-radius: 33px;
      border: 1px solid#fff;
      line-height: 60px;
      text-align: center;
      font-size: 26px;
      color: #fff;
      &:last-child {
        margin-left: 60px;
      }
    }
  }
}
</style>
