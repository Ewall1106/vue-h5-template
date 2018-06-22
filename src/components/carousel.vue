<template>
  <div class="carousel">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img class="myswiper_img" src="http://a3.vimage1.com/upload/flow/2018/06/21/160/15295761713116.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="myswiper_img" src="https://a2.vimage1.com/upload/flow/2018/06/22/40/15296362191561.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="myswiper_img" src="https://a3.vimage1.com/upload/flow/2018/06/06/29/15282588215380.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="myswiper_img" src="https://a4.vimage1.com/upload/flow/2018/06/21/49/15295697893682.jpg" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "carousel",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
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
  }
};
</script>

<style lang="less" scoped>
.carousel {
  /deep/ .swiper-pagination-bullet-active {
    background: #fff;
  }
  .myswiper_img {
    width: 100%;
    height: 4rem;
  }
}
</style>