<template>
  <div class="cart">
    <!-- 顶部导航栏 -->
    <my-header>确认订单</my-header>
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
    <!-- 商品列表 -->
    <div class="shopList">
      <h3 class="shoplist_title">我的商品</h3>
      <div class="shoplist_content">
        <div class="shoplist_item">
          <van-card num="1" tag="标签" price="2.00" desc="甜美尚秋冬好货转场" title="Candie's女装夏蕾丝气质秋连衣裙新款时尚韩版宽松长裙子仙蕾丝bf长袖气质连衣裙" thumb="//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/07/20/161/fe69644b-04e6-46c5-8e3b-f750db9ef1e7_720x909_70.jpg" origin-price="10.00">
            <div slot="footer">
              <van-button size="mini">删除</van-button>
            </div>
          </van-card>
        </div>
        <div class="shoplist_item">
          <van-card num="1" tag="标签" price="99.00" desc="甜美尚秋冬好货转场" title="Candie's女装夏蕾丝气质秋连衣裙新款时尚韩版宽松长裙子仙蕾丝bf长袖气质连衣裙" thumb="//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/10/15/78/6777ddb1-2eb3-4140-a406-2e0c4a0dadd6_720x909_70.jpg">
            <div slot="footer">
              <van-button size="mini">删除</van-button>
            </div>
          </van-card>
        </div>
      </div>
      <div class="shopList_tips">
        <span class="shopList_tips_icon">免邮</span>
        <p class="shopList_tips_text">自营商城中的所有商品已享受新会员专享全场38元包邮</p>
      </div>
    </div>
    <!-- 商品总额 -->
    <div class="acount">
      <h3 class="acount_title">商品总额</h3>
      <div class="acount_main">
        <p class="acount_main_desc">
          <span class="acount_main_desc_light">订单总金额</span>
          <span class="acount_main_desc_light">¥ 129</span>
        </p>
        <p class="acount_main_desc">
          <span>商品金额</span>
          <span>¥ 129</span>
        </p>
        <p class="acount_main_desc">
          <span>运费</span>
          <span>¥ 0</span>
        </p>
      </div>
    </div>
    <!-- 支付按钮 -->
    <div class="pay">
      <p class="payBtn payBtn1">货到付款</p>
      <p class="payBtn payBtn2">在线支付</p>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/myHeader.vue";

export default {
  name: "Cart",
  components: {
    MyHeader
  },
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
  // 商品列表
  .shopList {
    .shoplist_title {
      font-size: @sizeM;
      color: #000;
      padding: 15px;
    }
    .shoplist_content {
      border-top: 1px solid @bgColor2;
      border-bottom: 1px solid @bgColor2;
      padding-top: 10px;
      .shoplist_item {
        margin-bottom: 10px;
      }
    }
    .shopList_tips {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 20px;
      .shopList_tips_icon {
        border: 1px solid #3a5998;
        color: #3a5998;
        padding: 2px;
        margin-left: 15px;
        margin-right: 5px;
      }
      .shopList_tips_text {
      }
    }
  }
  // 商品总额
  .acount {
    .acount_title {
      font-size: @sizeM;
      color: #000;
      padding: 15px;
      margin-top: 20px;
    }
    .acount_main {
      border-top: 1px solid @bgColor2;
      padding: 6px 15px 15px 15px;
      .acount_main_desc {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: @sizeM;
        color: @fontColor2;
        margin: 8px 0;
        .acount_main_desc_light {
          color: @themeColor;
          font-weight: bold;
        }
      }
    }
  }
  // 支付按钮
  .pay {
    position: fixed;
    bottom: 10px;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .payBtn {
      box-sizing: border-box;
      font-size: @sizeL;
      width: 4.32rem;
      height: 1.2rem;
      text-align: center;
      line-height: 1.2rem;
      border-radius: 3px;
    }
    .payBtn1 {
      color: #caccd2;
      border: 1px solid #caccd2;
    }
    .payBtn2 {
      background: @themeColor;
      color: #fff;
    }
  }
}
</style>
