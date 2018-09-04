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
      <div class="mainLeft wrapper" ref="wrapper">
        <div class="content">
          <div class="item" :class="currentIndex == index ? 'item_on' : ''" v-for="(item,index) in menuTitle" :key="item.id" @click="menuClick(index)">{{item.name}}</div>
        </div>
      </div>
      <!-- 主体右侧 -->
      <div class="mainRight wrapper" ref="wrapper2">
        <div class="content">
          <!-- 顶部图 -->
          <div class="display_img">
            <img :src="menuDetail.topImg" />
          </div>
          <!-- 内容 -->
          <div class="container" v-for="(item,index) in menuDetail.details" :key="index">
            <div class="title">{{item.title}}</div>
            <div class="content">
              <div class="content_item" v-for="(item,index) in item.icon" :key="index" @click="itemClick(item.name)">
                <img :src="item.iconImg">
                <div class="txt">{{item.name}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BScroll from "better-scroll";

export default {
  name: "classify",
  components: {},
  data() {
    return {
      mainHeight: "",
      // 左侧菜单栏
      menuTitle: "",
      // 右侧菜单详情
      menuDetail: "",
      currentIndex: 0
    };
  },
  created() {
    this.mainHeight = window.innerHeight - 45 + "px";
  },
  mounted() {
    this.getClassify();
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        bounce: false,
        click: true
      });
      this.scroll = new BScroll(this.$refs.wrapper2, {
        bounce: false,
        click: true
      });
    });
  },
  watch: {},
  computed: {},
  methods: {
    getClassify() {
      axios.get("/api/classify.json").then(res => {
        console.log(res.data.content);
        this.menuTitle = res.data.navTitle;
        this.menuDetail = res.data.content;
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
    },
    // 左侧菜单栏点击
    menuClick(idx) {
      this.currentIndex = idx;
    },
    // item块点击
    itemClick(title) {
      this.$router.push({
        path: "/goodsList",
        query: {
          title: title
        }
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
      .display_img {
        img {
          box-sizing: border-box;
          display: block;
          width: 100%;
          height: 2.72rem;
          padding: 0.373333rem 0.373333rem 0 0.373333rem;
        }
      }
      .container {
        padding: 0 0.373333rem;
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
