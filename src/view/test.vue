<template>
  <div class="test">
  	<!-- 动态路由 -->
  	This is id: {{$route.params.testId}}

  	<!-- 嵌套路由 -->
  	<router-link to="/test/title1">标题1</router-link>
  	<router-link to="/test/title2">标题2</router-link>
  	<router-view></router-view>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped></style>
