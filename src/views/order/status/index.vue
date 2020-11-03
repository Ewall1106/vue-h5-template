<template>
  <div class="order-status">
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
        <!-- <router-link
          tag="p"
          class="header__btn__item"
          to="/order/detail"
        >查看订单</router-link> -->
      </div>
    </div>

    <div class="share">
      <svg-icon icon-class="facelove" :width="40" :height="40" />
      <div class="share__center">
        <!-- <p class="share__center__title">立即分享</p> -->
        <p class="share__center__subtitle">快和亲朋好友分享好物吧~</p>
      </div>
      <div class="share__btn">分享订单</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderStatus'
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.order-status {
  min-height: 100vh;
  background: #f5f5f5;
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
        //   margin-left: 60px;
        }
      }
    }
  }
  .share {
    box-sizing: border-box;
    width: 702px;
    height: 120px;
    background: #fff;
    border-radius: 18px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 30px;
    margin: 0 auto;
    margin-top: -40px;
    .share__center {
      flex: 1;
      padding-left: 25px;
      .share__center__title {
        font-size: 30px;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
      }
      .share__center__subtitle {
        font-size: 26px;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        margin-top: 18px;
      }
    }
    .share__btn {
      width: 180px;
      height: 60px;
      background: $red;
      border-radius: 33px;
      font-size: 26px;
      font-weight: 400;
      color: #fff;
      line-height: 60px;
      text-align: center;
    }
  }
}
</style>
