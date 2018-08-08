<template>
  <div class="home">
    <my-header></my-header>
    <carousel :swiperData='swiperData'></carousel>
    <!-- 分类 -->
    <div class="classification">
      <div class="class_top">
        <div class="item" v-for="(item,index) in classifiData.up" :key="index">
          <img :src="item.img" @click="gotoClassify(item.id)">
        </div>
      </div>
      <div class="class_bottom">
        <div class="item" v-for="(item,index) in classifiData.down" :key="index">
          <img :src="item.img" @click="gotoClassify(item.id)">
        </div>
      </div>
    </div>
    <!-- 推荐 -->
    <div class="recommend">
      <div class="title">今日推荐</div>
      <div class="content">
        <div class="item" v-for="(item,index) in recommendData" :key="index">
          <img v-lazy="item.imgurl" alt="">
          <div class="item_text">
            <span>{{item.title}}</span>
            <span>剩 {{item.endtime}} 天</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyHeader from "@/components/myHeader";
import Carousel from "@/components/carousel";
import axios from "axios";
export default {
  name: "home",
  components: {
    MyHeader,
    Carousel
  },
  data() {
    return {
      // 轮播图
      swiperData: [],
      // 分类
      classifiData: {},
      // 推荐
      recommendData: []
    };
  },
  mounted() {
    this.getIndexData();
  },
  methods: {
    getIndexData() {
      axios.get("/api/index.json").then(res => {
        console.log(res.data);
        this.swiperData = res.data.swiper;
        this.classifiData = res.data.classifiData;
        this.recommendData = res.data.recommendData;
      });
    },
    gotoClassify(id) {
      this.$router.push({
        path: "/classify",
        query: {
          id: id
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import "~styles/variables.less";
.home {
  background: #f3f4f5;
  // 分类
  .classification {
    .class_top,
    .class_bottom {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .item {
        img {
          display: block;
          width: 2rem;
          height: 2.346667rem;
        }
      }
    }
  }
  // 推荐
  .recommend {
    .title {
      text-align: center;
      font-size: 0.373333rem;
      padding: 0.266667rem;
      background: #fff;
      margin: 0.133333rem 0;
    }
    .content {
      .item {
        background: #fff;
        margin-bottom: 0.133333rem;
        img {
          width: 100%;
          height: 4.8rem;
          display: block;
        }
        img[lazy="loading"] {
          display: block;
          width: 50px;
          height: 50px;
          margin: 0 auto;
        }
        .item_text {
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 0.133333rem;
          font-size: 0.32rem;
        }
      }
    }
  }
}
</style>