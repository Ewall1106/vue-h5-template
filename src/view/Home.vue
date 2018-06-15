<template>
	<div class="home">
		hello
	</div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
// 这样引入会报错
// @import '@/assets/styles/variables.less';

// 需要加一个波浪符
//@import "~@/assets/styles/variables.less";

// 可以使用相对路径
//@import "../assets/styles/variables.less";

// 在webapck.base.conf.js中的alias中配置路径
@import "~styles/variables.less";

.home {
  background: @bgColor;
}
</style>