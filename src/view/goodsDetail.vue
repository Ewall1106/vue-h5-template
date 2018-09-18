<template>
  <div class="goodsDetail">
    <!-- 顶部轮播图 -->
    <div class="carousel">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item,index) in swiperData" :key="index">
          <img class="myswiper_img" :src="item" @click="swiperImgClick()">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="topnav" @click="goBack()">
        <span class="iconfont">&#xe779;</span>
      </div>
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
    <!-- 尺码 -->
    <div class="produce_size">
      <div class="size_title">尺码</div>
      <div class="size_content">
        <div class="size_item" :class="activeIndex == index ? 'size_item_on' : ''" v-for="(item,index) in ['S','M','L','XL']" :key="index" @click="sizeItemClick(index)">{{item}}</div>
      </div>
    </div>
    <!-- 商务文案 -->
    <div class="service_text">
      <div class="service_text_item">
        <span class="iconfont service_text_item_icon">&#xe654;</span>
        正品保障
      </div>
      <div class="service_text_item">
        <span class="iconfont service_text_item_icon">&#xe654;</span>
        商品免邮
      </div>
      <div class="service_text_item">
        <span class="iconfont service_text_item_icon">&#xe654;</span>
        急速退款
      </div>
    </div>
    <!-- 详情图片 -->
    <div class="details">
      <div class="details_img">
        <img src="//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/07/20/84/d1d8e9a1-ed45-409a-83db-dc524c257b89.jpg">
      </div>
      <div class="details_img">
        <img src="//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/07/20/138/f1e7ab34-3da5-4dec-9a0b-a58dd9cf783e.jpg">
      </div>
      <div class="details_img">
        <img src=" //h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/07/20/106/31eef7f6-6a92-44ad-8c84-3a4dbc6b45cf.jpg">
      </div>
      <div class="details_img">
        <img src="//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/07/20/105/5094b428-4407-48d9-a9eb-4310af7ad04a.jpg">
      </div>
      <div class="details_img">
        <img src=" //h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/07/20/132/f5408bef-ee93-4d97-a9f1-3e252820158d.jpg">
      </div>
      <div class="details_img">
        <img src=" //h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/07/20/132/f5408bef-ee93-4d97-a9f1-3e252820158d.jpg">
      </div>
      <div class="details_img">
        <img src=" //h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/07/20/196/507d3de3-fa41-4e92-b3bb-c77ad00d5e7d.jpg">
      </div>
    </div>
    <!-- 底部栏购物栏 -->
    <div class="shopcart">
      <div class="shopcart_cart" @click="gotoCart">
        <span class="iconfont shopcart_cart_icon">&#xe63f;</span>
      </div>
      <div class="shopcart_add">加入购物车</div>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from "vant";
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
      },
      activeIndex: 99
    };
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    // 尺码点击
    sizeItemClick(idx) {
      this.activeIndex = idx;
    },
    // 回退
    goBack() {
      this.$router.go(-1);
    },
    // 轮播图点击
    swiperImgClick() {
      ImagePreview(this.swiperData);
    },
    // 去购物车页面
    gotoCart() {
      this.$router.push({
        path: "/cart"
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
    position: relative;
    /deep/ .swiper-pagination-bullet-active {
      background: #fff;
    }
    .myswiper_img {
      width: 100%;
      height: 375px;
    }
    .topnav {
      position: absolute;
      top: 0.266rem;
      left: 0.213rem;
      z-index: 99;
      width: 1.12rem;
      height: 1.12rem;
      text-align: center;
      line-height: 1.12rem;
      color: #fff;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.5);
    }
  }
  // 价格信息
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
      line-height: 0.48rem;
    }
  }
  // 尺码
  .produce_size {
    padding: 0 0.23rem;
    border-bottom: 1px solid @bgColor;
    .size_title {
      font-size: @sizeL_2;
      color: @fontColor1;
      margin: 0.32rem 0;
    }
    .size_content {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      .size_item {
        width: 2.746667rem;
        height: 0.8rem;
        margin-bottom: 0.32rem;
        text-align: center;
        line-height: 0.8rem;
        color: @fontColor1;
        border: 1px solid @bgColor2;
      }
      .size_item_on {
        border-color: @themeColor;
        color: @themeColor;
      }
    }
  }
  // 商务文案
  .service_text {
    display: flex;
    flex-direction: row;
    padding: 0.23rem;
    border-bottom: 1px solid @bgColor;
    .service_text_item {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-right: 0.4rem;
      .service_text_item_icon {
        color: @themeColor;
        margin-right: 0.053333rem;
      }
    }
  }
  // 详情图片
  .details {
    .details_img {
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  // 底部栏购物栏
  .shopcart {
    box-sizing: border-box;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.76rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.32rem;
    background: #fff;
    .shopcart_cart {
      width: 2.266667rem;
      height: 1.12rem;
      border: 1px solid @bgColor2;
      text-align: center;
      line-height: 1.12rem;
      border-radius: 2px;
      .shopcart_cart_icon {
        font-size: @sizeXL;
      }
    }
    .shopcart_add {
      width: 6.826667rem;
      height: 1.12rem;
      text-align: center;
      line-height: 1.12rem;
      background: @themeColor;
      color: #fff;
      font-size: @sizeL;
      border-radius: 2px;
    }
  }
}
</style>
