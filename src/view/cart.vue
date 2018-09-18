<template>
  <div class="cart">
    <!-- 顶部导航栏 -->
    <div class="topNav">
      <span class="iconfont" @click="goBack()">&#xe660;</span>
      <div class="title">确认订单</div>
      <span class="iconfont" @click="goHome()">&#xe64f;</span>
    </div>
    <!-- 收货地址 -->
    <div class="address" @click="gotoAddress()">
      <div class="address_left">
        <i class="iconfont address_left_icon">&#xe64e;</i>
        <span>请填写收货地址</span>
      </div>
      <div class="address_right">
        <i class="iconfont address_right_icon">&#xe65f;</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  components: {},
  data() {
    return {
      message: ""
    };
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    // 回退
    goBack() {
      this.$router.go(-1);
    },
    // 回到首页
    goHome() {
      this.$router.push({
        path: "/"
      });
    },
    // 去购物车
    gotoAddress() {
      this.$router.push({
        path: "/address"
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/styles/variables.less";
.cart {
  // 顶部栏
  .topNav {
    box-sizing: border-box;
    height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.24rem;
    background: #fff;
    border-bottom: 1px solid @bgColor;
    .title {
      font-size: @sizeL;
    }
    .iconfont {
      font-size: 20px;
      font-weight: bold;
    }
  }
  // 收货地址
  .address {
    box-sizing: border-box;
    width: 100%;
    height: 46px;
    padding: 0 0.24rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #656c89;
    .address_left {
      font-size: @sizeM;
      color: #fff;
      line-height: 18px;
      .address_left_icon {
        color: #fff;
        font-weight: bold;
      }
    }
    .address_right {
      .address_right_icon {
        font-size: @sizeM;
        color: #fff;
        font-weight: bold;
      }
    }
  }
}
</style>
