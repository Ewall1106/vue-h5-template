<template>
	<div class="home">
		<my-header></my-header>
	</div>
</template>
<script>
import MyHeader from "@/components/myHeader";
export default {
  name: "home",
  components: {
	  MyHeader
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