<template>
  <div class="goodsDetail">
    <!-- 顶部轮播图 -->
    <div class="carousel">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item,index) in swiperData" :key="index">
          <img class="myswiper_img" :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- 价格信息 -->
    <div class="product_meta">
      <div class="price_meta">
        <div class="price">
          <span class="price_now">¥399</span>
          <span class="discount">¥9999</span>
        </div>
        <div class="sell_num">已销 9999 件</div>
      </div>
      <div class="desc">
        Candie's女装夏蕾丝气质秋连衣裙新款时尚韩版宽松长裙子仙蕾丝bf长袖气质连衣裙
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "goodsDetail",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperData: [
        "//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/07/20/161/fe69644b-04e6-46c5-8e3b-f750db9ef1e7_720x909_70.jpg",
        "//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/07/20/116/e1498661-f21f-45b3-9c7a-557684532133_720x909_70.jpg",
        "//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/07/20/148/802e9012-d83c-4c21-a219-436f82b51709_720x909_70.jpg",
        "//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/07/20/159/950fdbff-6359-4125-a2e2-6b8a997e30ec_720x909_70.jpg",
        "//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/07/20/26/938433c5-cc0a-44e0-9074-5249d873de20_720x909_70.jpg",
        "//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/07/20/84/5ae7b596-5c69-41c5-b9db-bef670f51760_720x909_70.jpg"
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      }
    };
  },
  created() {},
  mounted() {
    //this.getIndexData();
  },
  watch: {},
  computed: {},
  methods: {
    getIndexData() {
      axios.get("/api/index.json").then(res => {
        this.swiperData = res.data.swiper;
        this.classifiData = res.data.classifiData;
        this.recommendData = res.data.recommendData;
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/styles/variables.less";
.goodsDetail {
  // 顶部轮播图
  .carousel {
    /deep/ .swiper-pagination-bullet-active {
      background: #fff;
    }
    .myswiper_img {
      width: 100%;
      height: 375px;
    }
  }
  //价格信息
  .product_meta {
    margin: 0.32rem 0.32rem 0 0.32rem;
    border-bottom: 1px dashed @bgColor;
    .price_meta {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .price {
        padding-bottom: 0.32rem;
        .price_now {
          color: @themeColor;
          font-size: @sizeXL;
        }
        .discount {
          color: @fontColor2;
          font-size: @sizeM;
          text-decoration: line-through;
        }
      }
      .sell_num {
        color: @fontColor2;
        font-size: @sizeM;
      }
    }
    .desc {
      margin-bottom: 0.32rem;
      width: 100%;
      text-overflow: ellipsis;
      text-overflow: -o-ellipsis-lastline;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}
</style>
