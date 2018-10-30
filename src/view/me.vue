<template>
  <div class="me">
    <!-- 顶部栏 -->
    <my-header>我的</my-header>
    <!-- 头部昵称与背景 -->
    <div class="userinfo">
      <div class="avatar">
        <img src="@/assets/images/avatar.png" alt="">
      </div>
      <div class="nickname">猫码</div>
    </div>
    <!-- 我的订单 -->
    <div class="menu">
      <div class="menu_title">
        <div class="menu_title_me">我的订单</div>
        <div class="menu_title_all">全部订单
          <span class="iconfont">&#xe65f;</span>
        </div>
      </div>
      <div class="menu_content">
        <div class="menu_content_item">
          <img class="menu_content_item_icon" src="@/assets/images/meicon1.png" alt="">
          <span class="menu_content_item_text">待收货</span>
        </div>
        <div class="menu_content_item">
          <img class="menu_content_item_icon" src="@/assets/images/meicon2.png" alt="">
          <span class="menu_content_item_text">待收货</span>
        </div>
        <div class="menu_content_item">
          <img class="menu_content_item_icon" src="@/assets/images/meicon3.png" alt="">
          <span class="menu_content_item_text">待收货</span>
        </div>
        <div class="menu_content_item">
          <img class="menu_content_item_icon" src="@/assets/images/meicon4.png" alt="">
          <span class="menu_content_item_text">待收货</span>
        </div>
      </div>
    </div>
    <!-- 我的收藏 -->
    <div class="favor">
      <div class="title">我的收藏</div>
      <span class="iconfont">&#xe65f;</span>
    </div>
    <!-- 浏览历史 -->
    <div class="favor">
      <div class="title">浏览历史</div>
      <span class="iconfont">&#xe65f;</span>
    </div>
    <!-- 优惠券 -->
    <div class="favor">
      <div class="title">优惠券</div>
      <span class="iconfont">&#xe65f;</span>
    </div>
    <!-- 在线客服 -->
    <div class="favor">
      <div class="title">在线客服</div>
      <span class="iconfont">&#xe65f;</span>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/myHeader.vue";
export default {
  name: "Me",
  components: {
    MyHeader
  },
  data() {
    return {
      message: "hello world"
    };
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {}
};
</script>

<style lang="less" scoped>
@import "../assets/styles/variables.less";
.me {
  // 头部昵称与背景
  .userinfo {
    width: 100%;
    height: 4.533333rem;
    background: url("../assets/images/me_bg.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .avatar {
      img {
        display: block;
        width: 1.906667rem;
        height: 1.906667rem;
        border-radius: 50%;
        box-shadow: 0 0 20px #29000000;
      }
    }
    .nickname {
      margin-top: 0.133333rem;
      font-size: @sizeL_2;
      color: #fff;
    }
  }
  // 我的订单
  .menu {
    .menu_title {
      box-sizing: border-box;
      padding: 0.266667rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: @sizeL_2;
      border-bottom: 1px solid #eee;
      .menu_title_me {
      }
      .menu_title_all {
        color: #ababab;
        font-size: @sizeL_2;
        .iconfont {
          font-size: @sizeM;
        }
      }
    }
    .menu_content {
      box-sizing: border-box;
      padding: 0.44rem 0.973333rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      .menu_content_item {
        .menu_content_item_icon {
          display: block;
          width: 1.16rem;
          height: 1.16rem;
          margin-bottom: 0.2rem;
        }
        .menu_content_item_text {
          font-size: 0.373333rem;
        }
      }
    }
  }
  // 我的收藏
  .favor {
    box-sizing: border-box;
    padding: 0.266667rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: @sizeL_2;
    border-bottom: 1px solid #eee;
  }
  // 浏览历史
  // 优惠券
  // 在线客服
}
</style>
