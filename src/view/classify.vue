<template>
  <div class="classify">
    <!-- 顶部栏 -->
    <div class="topNav">
      <span class="iconfont" @click="goBack()">&#xe660;</span>
      <div class="title">分类</div>
      <span class="iconfont" @click="goHome()">&#xe64f;</span>
    </div>
    <!-- 主体 -->
    <div class="main" :style="{height:mainHeight}">
      <!-- 主体左侧 -->
      <div class="mainLeft">
        <div class="item" v-for="item in navTitle" :key="item.id">{{item.name}}</div>
      </div>
      <!-- 主体右侧 -->
      <div class="mainRight">
        <div class="container" v-for="(item,index) in [1]" :key="index">
          <div class="display_img">
            <img src="//a.vpimg2.com/upload/flow/2018/08/06/42/15335484131961.jpg" alt="">
          </div>
          <div class="title">人气美衣</div>
          <div class="content">
            <div class="content_item" v-for="(item,index) in [1,2,3,4,5,6,7]" :key="index">
              <img src="//h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/04/25/92/15246482342239_200x375_80.jpg!75.webp" alt="">
              <div class="txt">连衣裙</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "classify",
  components: {},
  data() {
    return {
      mainHeight: "",
      navTitle: ""
    };
  },
  created() {
    this.mainHeight = window.innerHeight - 45 + "px";
  },
  mounted() {
    this.getClassify();
  },
  watch: {},
  computed: {},
  methods: {
    getClassify() {
      axios.get("/api/classify.json").then(res => {
        this.navTitle = res.data.navTitle;
      });
    },
    // 回退
    goBack() {
      this.$router.go(-1);
    },
    // 回到首页
    goHome() {
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/styles/variables.less";
.classify {
  background: @bgColor;
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
  // 主体
  .main {
    display: flex;
    flex-direction: row;
    overflow: hidden;
    // 主体左侧
    .mainLeft {
      width: 2.48rem;
      height: 100%;
      font-size: @sizeM;
      .item {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 1.28rem;
        line-height: 1.28rem;
        text-align: center;
      }
      .item_on::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 0.10667rem;
        height: 1.28rem;
        font-size: 0;
        background-color: #de3d96;
      }
      .item_on {
        background: #fff;
      }
    }
    // 主体右侧
    .mainRight {
      width: 7.52rem;
      height: 100%;
      background: #fff;
      .container {
        padding: 0 0.373333rem;
        .display_img {
          img {
            display: block;
            width: 100%;
            height: 2.72rem;
            margin-top: 0.373333rem;
          }
        }
        .title {
          box-sizing: border-box;
          font-size: @sizeS;
          font-weight: bold;
          padding: 0.533333rem 0 0.533333rem 0;
        }
        .content {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          border-bottom: 1px solid @bgColor;

          .content_item {
            padding: 0 0.066667rem;
            img {
              display: block;
              width: 1.653333rem;
              height: 1.653333rem;
            }
            .txt {
              text-align: center;
              font-size: @sizeS;
              padding: 0.293333rem 0 0.666667rem 0;
            }
          }
        }
      }
    }
  }
}
</style>
