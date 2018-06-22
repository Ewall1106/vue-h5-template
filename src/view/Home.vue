<template>
	<div class="home">
		<my-header></my-header>
    <carousel></carousel>
	</div>
</template>
<script>
import MyHeader from "@/components/myHeader";
import Carousel from "@/components/carousel";

export default {
  name: "home",
  components: {
    MyHeader,
    Carousel
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
//   background: @bgColor;
}
</style>