<template>
  <div class="test">
  	<!-- 动态路由 -->
    This is id : {{$route.params.testId}}
    <br/> 
    This is name : {{$route.params.testName}}

    <!-- 嵌套路由 -->
    <router-link to="/test/title1">标题1</router-link>
    <router-link to="/test/title2">内容2</router-link>
    <router-view></router-view>

    <!-- 编程式路由 -->
    <div @click="gotoGoods">跳转到商品详情页面</div>
  </div>
</template>
<script>
export default {
	data() {
		return {
			msg: 'hello vue'
		}
	},
	methods: {
		gotoGoods() {
			// this.$router.push('/goods');

      // this.$router.push({
      //   path: '/goods?goodsId=666'
      // });
      this.$router.push({
        path: '/goods',
        query:{
          goodsId:666
        }
      });
		}
	}
}

</script>
<style scoped></style>
