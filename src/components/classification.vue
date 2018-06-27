<template>
  <div class="classification">
    <!-- 首页分类运营模块 -->
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
</template>

<script>
export default {
  name: "classification",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="less" scoped>
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
</style>