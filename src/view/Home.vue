<template>
  <div class="home">
    <my-header></my-header>
    <carousel></carousel>
    <!-- 分类 -->
    <div class="classification">
      <div class="class_top">
        <div class="item">
          <img src="https://a4.vimage1.com/upload/flow/2018/05/29/106/15275616596915.jpg" alt="">
        </div>
        <div class="item">
          <img src="https://a2.vimage1.com/upload/flow/2018/05/22/138/15269786875124.jpg" alt="">
        </div>
        <div class="item">
          <img src="https://a4.vimage1.com/upload/flow/2018/05/29/100/15275815231657.jpg" alt="">
        </div>
        <div class="item">
          <img src="https://a4.vimage1.com/upload/flow/2018/05/22/190/15269788745661.jpg" alt="">
        </div>
        <div class="item">
          <img src="https://a4.vimage1.com/upload/flow/2018/05/22/110/15269789816830.jpg" alt="">
        </div>
      </div>
      <div class="class_bottom">
        <div class="item">
          <img src="https://a3.vimage1.com/upload/flow/2018/05/29/40/15275616172415.jpg" alt="">
        </div>
        <div class="item">
          <img src="https://a2.vimage1.com/upload/flow/2018/05/29/139/15275815452999.jpg" alt="">
        </div>
        <div class="item">
          <img src="https://a3.vimage1.com/upload/flow/2018/05/22/163/15269793276446.jpg" alt="">
        </div>
        <div class="item">
          <img src="https://a4.vimage1.com/upload/flow/2018/05/22/172/15269794028123.jpg" alt="">
        </div>
        <div class="item">
          <img src="https://a4.vimage1.com/upload/flow/2018/05/22/21/15269794589634.jpg" alt="">
        </div>
      </div>
    </div>
    <!-- 推荐 -->
    <div class="recommend">
      <div class="title">今日推荐</div>
      <div class="content">
        <div class="item">
          <img src="https://b.vimage1.com/upload/mst/2018/06/27/14/9b74b67ad8d6049035e8178f6c17ab70_604x290_80.jpg" alt="">
          <div class="item_text">
            <span>运动潮人录取线
            </span>
            <span>剩 2 天</span>
          </div>
        </div>
        <div class="item">
          <img src="https://b.vimage1.com/upload/mst/2018/06/26/189/f43d77bad367edf2cd9721601f90df1a_604x290_80.jpg" alt="">
          <div class="item_text">
            <span>国潮攻心计
            </span>
            <span>剩 1 天</span>
          </div>
        </div>
        <div class="item">
          <img src="https://a.vimage1.com/upcb/2018/06/05/132/ias_152816727785388_604x290_80.jpg" alt="">
          <div class="item_text">
            <span>欧美品牌女装与美泽美
            </span>
            <span>剩 2 天</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyHeader from "@/components/myHeader";
import Carousel from "@/components/carousel";
import Classification from "@/components/classification";

export default {
  name: "home",
  components: {
    MyHeader,
    Carousel,
    Classification
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
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
        margin-bottom: .133333rem;
        img {
          width: 100%;
          height: 4.8rem;
          display: block;
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