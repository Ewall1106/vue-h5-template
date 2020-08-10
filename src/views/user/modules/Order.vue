<template>
  <div class="user-order">
    <h3 class="order__title">
      <p class="order__title__title">我的订单</p>
      <p class="order__title__navigate">
        <span>全部订单</span>
        <van-icon name="arrow" color="#969799" />
      </p>
    </h3>
    <div class="order__bd">
      <div v-for="(item,idx) in orderList" :key="idx" class="order__bd__item">
        <van-icon :name="item.icon" size="25" color="#dab309" :badge="item.count" />
        <span class="name">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderList: [
        {
          icon: 'pending-payment',
          name: '待支付',
          count: 3
        },
        {
          icon: 'peer-pay',
          name: '待发货',
          count: ''
        },
        {
          icon: 'logistics',
          name: '待收货',
          count: ''
        },
        {
          icon: 'chat-o',
          name: '售后',
          count: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.user-order {
  width: 702px;
  height: 268px;
  margin: 0 auto;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.09);
  border-radius: 24px;
  margin-top: 42px;
  .order__title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 34px 24px 34px 34px;
    .order__title__title {
      font-size: 36px;
      font-weight: 500;
      color: $black;
    }
    .order__title__navigate {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-right: 6px;
      span {
        font-size: 26px;
        font-family: PingFangSC;
        font-weight: 400;
        color: $gray;
        margin-right: 10px;
      }
    }
  }
  .order__bd {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 46px;
    .order__bd__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 14px;
      .name {
        font-size: 26px;
        color: $gray;
        margin-top: 16px;
      }
    }
  }
}
</style>
