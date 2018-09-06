<template>
  <div class="test">
    <van-button type="default">默认按钮</van-button>
  </div>
</template>

<script>
import { ImagePreview } from "vant";

export default {
  name: "test",
  components: {},
  data() {
    return {
      message: ""
    };
  },
  created() {},
  mounted() {
    ImagePreview([
      "//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/07/20/161/fe69644b-04e6-46c5-8e3b-f750db9ef1e7_720x909_70.jpg",
      "//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/07/20/116/e1498661-f21f-45b3-9c7a-557684532133_720x909_70.jpg",
      "//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/07/20/148/802e9012-d83c-4c21-a219-436f82b51709_720x909_70.jpg",
      "//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/07/20/159/950fdbff-6359-4125-a2e2-6b8a997e30ec_720x909_70.jpg",
      "//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/07/20/26/938433c5-cc0a-44e0-9074-5249d873de20_720x909_70.jpg",
      "//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2018/07/20/84/5ae7b596-5c69-41c5-b9db-bef670f51760_720x909_70.jpg"
    ]);
  },
  watch: {},
  computed: {}
};
</script>

<style lang="less" scoped>
@import "../assets/styles/variables.less";
.test {
  //background: @bgColor;
}
</style>
